import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('should create the home component', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
    expect(component.featuredServices.length).toBe(6);
  });

  it('should render hero title and tagline', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.hero-title')?.textContent).toContain('Reva Associates');
    expect(compiled.querySelector('.hero-title')?.textContent).toContain(
      'Your Trusted Financial Partner in Mumbai',
    );
  });

  it('should render compliance calendar entries', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('July 31');
    expect(compiled.textContent).toContain('ITR Filing for Individuals');
    expect(compiled.textContent).toContain('GSTR-1 & 3B');
  });
});

describe('HomeComponent image', () => {
  it('serves the about image responsively from the Unsplash CDN with a fixed crop', async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [provideRouter([])],
    }).compileComponents();
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const img = fixture.nativeElement.querySelector('img.main-img') as HTMLImageElement;
    expect(img.getAttribute('src')).toBe(
      'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=75&w=800&h=740',
    );
    expect(img.getAttribute('srcset')).toContain('w=640&h=592 640w');
    expect(img.getAttribute('loading')).toBe('lazy');
  });
});
