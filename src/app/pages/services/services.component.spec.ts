import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ServicesComponent } from './services.component';

describe('ServicesComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesComponent],
      providers: [provideRouter([])]
    }).compileComponents();
  });

  it('should create the services component', () => {
    const fixture = TestBed.createComponent(ServicesComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
    expect(component.allServices.length).toBe(6);
  });

  it('should filter services by category', () => {
    const fixture = TestBed.createComponent(ServicesComponent);
    const component = fixture.componentInstance;

    expect(component.filteredServices().length).toBe(6);

    component.setCategory('Tax Filing');
    const taxServices = component.filteredServices();
    expect(taxServices.length).toBe(1);
    expect(taxServices[0].title).toContain('Tax Filing');

    component.setCategory('ALL');
    expect(component.filteredServices().length).toBe(6);
  });

  it('should render all services in template', () => {
    const fixture = TestBed.createComponent(ServicesComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('.service-detail-card').length).toBe(6);
    expect(compiled.textContent).toContain('Tax Filing Services - Our Core');
    expect(compiled.textContent).toContain('Loan Services');
  });

  it('should filter cards when category button is clicked in UI', () => {
    const fixture = TestBed.createComponent(ServicesComponent);
    fixture.detectChanges();
    const component = fixture.componentInstance;

    const compiled = fixture.nativeElement as HTMLElement;
    const categoryButtons = compiled.querySelectorAll('.category-tabs button');
    
    // Find the button for 'Loans' and click it
    const loanBtn = Array.from(categoryButtons).find(btn => btn.textContent?.includes('Loans')) as HTMLButtonElement;
    expect(loanBtn).toBeTruthy();
    loanBtn.click();
    fixture.detectChanges();

    expect(component.selectedCategory()).toBe('Loans');
    expect(compiled.querySelectorAll('.service-detail-card').length).toBe(1);
    expect(compiled.textContent).toContain('30+ banks and NBFCs');

    // Click 'All Services'
    const allBtn = categoryButtons[0] as HTMLButtonElement;
    allBtn.click();
    fixture.detectChanges();
    expect(component.selectedCategory()).toBe('ALL');
    expect(compiled.querySelectorAll('.service-detail-card').length).toBe(6);
  });

  it('should cover each distinct service category', () => {
    const fixture = TestBed.createComponent(ServicesComponent);
    const component = fixture.componentInstance;
    for (const cat of component.categories) {
      component.setCategory(cat);
      expect(component.filteredServices().length).toBeGreaterThan(0);
    }
  });
});
