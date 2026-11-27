import { Type } from '@angular/core';
import { routes } from './app.routes';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

describe('App Routes', () => {
  const expected: [string, Type<unknown>][] = [
    ['', HomeComponent],
    ['about', AboutComponent],
    ['services', ServicesComponent],
    ['testimonials', TestimonialsComponent],
    ['contact', ContactComponent],
    ['404', NotFoundComponent],
    ['**', NotFoundComponent],
  ];

  it('should define all expected routes', () => {
    expect(routes.map((r) => r.path)).toEqual(expected.map(([path]) => path));
  });

  it('should lazy-load the right component for every route', async () => {
    for (const [i, route] of routes.entries()) {
      const component = await (route.loadComponent as () => Promise<Type<unknown>>)();
      expect(component).toBe(expected[i][1]);
    }
  });

  it('should give every route a title and a meta description', () => {
    for (const route of routes) {
      expect(route.title).toBeTruthy();
      expect(route.data?.['description']).toBeTruthy();
    }
  });

  it('should mark the not-found routes as noindex', () => {
    const notFound = routes.filter((r) => r.path === '404' || r.path === '**');
    expect(notFound.every((r) => r.data?.['robots'] === 'noindex')).toBe(true);
  });
});
