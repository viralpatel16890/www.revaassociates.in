import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

describe('App Routes', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideRouter(routes)]
    });
  });

  it('should define all expected routes', () => {
    expect(routes.length).toBe(6);
    const paths = routes.map(r => r.path);
    expect(paths).toContain('');
    expect(paths).toContain('about');
    expect(paths).toContain('services');
    expect(paths).toContain('testimonials');
    expect(paths).toContain('contact');
    expect(paths).toContain('**');
  });

  it('should have redirect for wildcard route', () => {
    const wildcardRoute = routes.find(r => r.path === '**');
    expect(wildcardRoute?.redirectTo).toBe('');
  });
});
