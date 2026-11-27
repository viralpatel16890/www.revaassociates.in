import { Component, DOCUMENT, PLATFORM_ID } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router, provideRouter } from '@angular/router';
import { AnalyticsService } from './analytics.service';

@Component({ template: '' })
class Page {}

type W = Window & { dataLayer?: IArguments[]; gtag?: unknown };

describe('AnalyticsService', () => {
  let doc: Document;
  let win: W;

  const setup = (platform = 'browser') => {
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      providers: [
        provideRouter([{ path: '**', component: Page }]),
        { provide: PLATFORM_ID, useValue: platform },
      ],
    });
    doc = TestBed.inject(DOCUMENT);
    win = doc.defaultView as W;
    delete win.dataLayer;
    delete win.gtag;
    doc.head.querySelectorAll('script[src*="googletagmanager"]').forEach((s) => s.remove());
    return TestBed.inject(AnalyticsService);
  };
  const events = () =>
    (win.dataLayer ?? []).map((a) => Array.from(a)).filter((a) => a[0] === 'event');

  it('does nothing without a measurement ID, in dev mode, or on the server', () => {
    setup().init('');
    setup().init('G-TEST', false);
    setup('server').init('G-TEST', true);
    expect(win.dataLayer).toBeUndefined();
    expect(doc.querySelector('script[src*="googletagmanager"]')).toBeNull();
  });

  it('loads gtag.js once and configures GA without automatic page views', () => {
    const svc = setup();
    svc.init('G-TEST', true);
    svc.init('G-TEST', true); // second call is ignored
    const scripts = doc.querySelectorAll('script[src*="googletagmanager"]');
    expect(scripts.length).toBe(1);
    expect((scripts[0] as HTMLScriptElement).src).toContain('id=G-TEST');
    const config = win.dataLayer!.map((a) => Array.from(a)).find((a) => a[0] === 'config');
    expect(config).toEqual(['config', 'G-TEST', { send_page_view: false }]);
  });

  it('sends a page_view on each navigation', async () => {
    setup().init('G-TEST', true);
    await TestBed.inject(Router).navigateByUrl('/services?x=1');
    const pv = events().find((e) => e[1] === 'page_view');
    expect(pv?.[2]).toMatchObject({ page_path: '/services?x=1' });
  });

  it('tracks call, WhatsApp, email and directions clicks but not other links', async () => {
    setup().init('G-TEST', true);
    await TestBed.inject(Router).navigateByUrl('/contact');
    const hrefs = [
      'tel:+918879146502',
      'https://wa.me/918879146502',
      'mailto:a@b.c',
      'https://www.google.com/maps/search/?api=1&query=x',
      '/about',
    ];
    for (const href of hrefs) {
      const a = doc.createElement('a');
      a.href = href;
      a.innerHTML = '<span>x</span>';
      a.addEventListener('click', (e) => e.preventDefault());
      doc.body.appendChild(a);
      a.querySelector('span')!.click();
      a.remove();
    }
    const names = events()
      .map((e) => e[1])
      .filter((n) => n !== 'page_view');
    expect(names).toEqual(['click_to_call', 'click_whatsapp', 'click_email', 'click_directions']);
    expect(events().at(-1)?.[2]).toEqual({ link_location: '/contact' });
  });

  it('trackEvent is a no-op until analytics is initialised', () => {
    const svc = setup();
    svc.trackEvent('generate_lead');
    expect(win.dataLayer).toBeUndefined();
  });
});
