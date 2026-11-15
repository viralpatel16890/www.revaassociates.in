import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { TestimonialsComponent } from './testimonials.component';

describe('TestimonialsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestimonialsComponent],
      providers: [provideRouter([])]
    }).compileComponents();
  });

  it('should create the testimonials component', () => {
    const fixture = TestBed.createComponent(TestimonialsComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
    expect(component.testimonials.length).toBeGreaterThan(0);
  });

  it('should display client testimonials from Mumbai', () => {
    const fixture = TestBed.createComponent(TestimonialsComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('50+');
    expect(compiled.textContent).toContain('Happy Clients Across Mumbai');
  });
});
