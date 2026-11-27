import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { NotFoundComponent } from './not-found.component';

describe('NotFoundComponent', () => {
  it('shows a 404 message with links home, to contact and a call button', async () => {
    TestBed.configureTestingModule({
      imports: [NotFoundComponent],
      providers: [provideRouter([])],
    });
    const fixture = TestBed.createComponent(NotFoundComponent);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('h1')?.textContent).toContain('Page not found');
    const hrefs = Array.from(el.querySelectorAll('a')).map((a) => a.getAttribute('href'));
    expect(hrefs).toEqual(['/', '/contact', 'tel:+918879146502']);
  });
});
