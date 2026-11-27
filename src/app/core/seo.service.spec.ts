import { Component, DOCUMENT } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router, provideRouter } from '@angular/router';
import { SeoService } from './seo.service';

@Component({ template: '' })
class Page {}

describe('SeoService', () => {
  let doc: Document;
  let router: Router;

  const meta = (attr: string, key: string) =>
    doc.head.querySelector(`meta[${attr}="${key}"]`)?.getAttribute('content');
  const canonical = () => doc.head.querySelector('link[rel="canonical"]')?.getAttribute('href');

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideRouter([
          { path: '', component: Page, title: 'Home T', data: { description: 'Home D' } },
          { path: 'about', component: Page, title: 'About T' },
          {
            path: 'gone',
            component: Page,
            title: 'Gone',
            data: { description: 'x', robots: 'noindex' },
          },
        ]),
      ],
    });
    doc = TestBed.inject(DOCUMENT);
    doc.head
      .querySelectorAll('link[rel="canonical"], #ld-local-business')
      .forEach((n) => n.remove());
    router = TestBed.inject(Router);
    TestBed.inject(SeoService).init();
  });

  it('sets description, Open Graph tags and canonical for each route', async () => {
    await router.navigateByUrl('/?utm_source=x#top');
    expect(meta('name', 'description')).toBe('Home D');
    expect(meta('property', 'og:title')).toBe('Home T');
    expect(meta('property', 'og:url')).toBe('https://www.revaassociates.in/');
    expect(meta('name', 'robots')).toBe('index, follow');
    expect(canonical()).toBe('https://www.revaassociates.in/');

    await router.navigateByUrl('/about');
    expect(meta('name', 'twitter:title')).toBe('About T');
    expect(meta('name', 'description')).toContain('Reva Associates'); // default description
    expect(canonical()).toBe('https://www.revaassociates.in/about');
  });

  it('marks noindex routes and drops their canonical link', async () => {
    await router.navigateByUrl('/about');
    await router.navigateByUrl('/gone');
    expect(meta('name', 'robots')).toBe('noindex');
    expect(canonical()).toBeUndefined();
  });

  it('adds LocalBusiness structured data exactly once', () => {
    TestBed.inject(SeoService).init();
    const scripts = doc.head.querySelectorAll('#ld-local-business');
    expect(scripts.length).toBe(1);
    const data = JSON.parse(scripts[0].textContent!);
    expect(data['@type']).toBe('AccountingService');
    expect(data.address.postalCode).toBe('400066');
    expect(data.telephone).toBe('+91-8879146502');
  });
});
