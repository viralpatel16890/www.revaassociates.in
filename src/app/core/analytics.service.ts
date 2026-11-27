import { DOCUMENT, DestroyRef, Injectable, PLATFORM_ID, inject, isDevMode } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { GA_MEASUREMENT_ID } from './analytics.config';

type Gtag = (...args: unknown[]) => void;
type GtagWindow = Window & { dataLayer?: unknown[]; gtag?: Gtag };

/** Outbound contact links tracked automatically as GA4 events. */
const LINK_EVENTS: { test: (href: string) => boolean; event: string }[] = [
  { test: (h) => h.startsWith('tel:'), event: 'click_to_call' },
  { test: (h) => h.startsWith('mailto:'), event: 'click_email' },
  { test: (h) => h.includes('wa.me/'), event: 'click_whatsapp' },
  { test: (h) => h.includes('google.com/maps'), event: 'click_directions' },
];

/**
 * Google Analytics 4 for a single-page app: loads gtag.js only in the browser,
 * only in production builds and only when a measurement ID is configured.
 * Sends a page_view on every route change and events for call / WhatsApp /
 * email / directions clicks. Never sends names, phone numbers or emails.
 */
@Injectable({ providedIn: 'root' })
export class AnalyticsService {
  private readonly router = inject(Router);
  private readonly doc = inject(DOCUMENT);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private readonly destroyRef = inject(DestroyRef);
  private gtag?: Gtag;

  init(measurementId: string = GA_MEASUREMENT_ID, enabled = !isDevMode()): void {
    if (!this.isBrowser || !measurementId || !enabled || this.gtag) return;
    const win = this.doc.defaultView as GtagWindow;

    win.dataLayer = win.dataLayer || [];
    // gtag.js expects the real `arguments` object, so this can't be an arrow function.
    win.gtag = function gtag() {
      // eslint-disable-next-line prefer-rest-params
      win.dataLayer!.push(arguments);
    };
    this.gtag = win.gtag;
    this.gtag('js', new Date());
    // Page views are sent manually on navigation (the SPA never reloads).
    this.gtag('config', measurementId, { send_page_view: false });

    const script = this.doc.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
    this.doc.head.appendChild(script);

    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((e) =>
        this.trackEvent('page_view', {
          page_path: e.urlAfterRedirects,
          page_location: win.location.href,
          page_title: this.doc.title,
        }),
      );

    const onClick = (ev: Event) => this.onClick(ev);
    this.doc.addEventListener('click', onClick, { capture: true });
    this.destroyRef.onDestroy(() =>
      this.doc.removeEventListener('click', onClick, { capture: true }),
    );
  }

  trackEvent(name: string, params: Record<string, unknown> = {}): void {
    this.gtag?.('event', name, params);
  }

  private onClick(ev: Event): void {
    const link = (ev.target as Element | null)?.closest?.('a[href]');
    const href = link?.getAttribute('href') ?? '';
    const match = LINK_EVENTS.find((l) => l.test(href));
    if (match) {
      this.trackEvent(match.event, { link_location: this.router.url.split(/[?#]/)[0] });
    }
  }
}
