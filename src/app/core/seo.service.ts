import { DOCUMENT, Injectable, inject } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { BUSINESS } from './business-info';

const DEFAULT_DESCRIPTION =
  'Reva Associates - Accounting, Taxation, Loans & Investments for individuals and businesses. Borivali East, Mumbai.';
const OG_IMAGE = '/og-image.jpg';

/**
 * Keeps per-page SEO tags in sync with the active route: meta description,
 * robots, canonical URL, Open Graph and Twitter tags. Also injects the
 * LocalBusiness JSON-LD once. Runs during prerendering, so the tags are baked
 * into the static HTML.
 */
@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly router = inject(Router);
  private readonly meta = inject(Meta);
  private readonly doc = inject(DOCUMENT);

  init(): void {
    this.addStructuredData();
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((e) => this.update(e.urlAfterRedirects));
  }

  update(url: string): void {
    const route = this.deepest(this.router.routerState.snapshot.root);
    const title = route.title ?? this.doc.title;
    const description: string = route.data['description'] ?? DEFAULT_DESCRIPTION;
    const path = url.split(/[?#]/)[0] || '/';
    const canonical = BUSINESS.siteUrl + (path === '/' ? '/' : path);
    const image = BUSINESS.siteUrl + OG_IMAGE;

    this.meta.updateTag({ name: 'description', content: description });
    const robots: string = route.data['robots'] ?? 'index, follow';
    this.meta.updateTag({ name: 'robots', content: robots });
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:url', content: canonical });
    this.meta.updateTag({ property: 'og:image', content: image });
    this.meta.updateTag({ name: 'twitter:title', content: title });
    this.meta.updateTag({ name: 'twitter:description', content: description });
    this.meta.updateTag({ name: 'twitter:image', content: image });
    this.setCanonical(robots.includes('noindex') ? null : canonical);
  }

  private deepest(route: ActivatedRouteSnapshot): ActivatedRouteSnapshot {
    while (route.firstChild) route = route.firstChild;
    return route;
  }

  private setCanonical(href: string | null): void {
    let link = this.doc.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (href === null) {
      link?.remove();
      return;
    }
    if (!link) {
      link = this.doc.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.doc.head.appendChild(link);
    }
    link.setAttribute('href', href);
  }

  /** schema.org data so Google can show address, hours and phone in local results. */
  private addStructuredData(): void {
    const id = 'ld-local-business';
    if (this.doc.getElementById(id)) return; // already present from prerendered HTML
    const a = BUSINESS.address;
    const data = {
      '@context': 'https://schema.org',
      '@type': 'AccountingService',
      '@id': `${BUSINESS.siteUrl}/#business`,
      name: BUSINESS.name,
      url: BUSINESS.siteUrl,
      image: BUSINESS.siteUrl + OG_IMAGE,
      telephone: '+91-8879146502',
      email: BUSINESS.email,
      founder: { '@type': 'Person', name: BUSINESS.founder },
      address: {
        '@type': 'PostalAddress',
        streetAddress: a.street,
        addressLocality: a.locality,
        addressRegion: a.region,
        postalCode: a.postalCode,
        addressCountry: a.country,
      },
      areaServed: 'Mumbai',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '10:00',
          closes: '19:00',
        },
      ],
      hasMap: BUSINESS.mapsUrl,
    };
    const script = this.doc.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    this.doc.head.appendChild(script);
  }
}
