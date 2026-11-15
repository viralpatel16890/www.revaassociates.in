import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [provideRouter([])]
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
    expect(compiled.querySelector('.hero-title')?.textContent).toContain('Your Trusted Financial Partner in Mumbai');
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
