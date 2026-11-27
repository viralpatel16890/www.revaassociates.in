import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { NavbarComponent } from './navbar.component';

@Component({ template: '' })
class StubPage {}

describe('NavbarComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarComponent],
      providers: [provideRouter([{ path: '**', component: StubPage }])],
    }).compileComponents();
  });

  it('should create the navbar component', () => {
    const fixture = TestBed.createComponent(NavbarComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
    expect(component.isScrolled()).toBe(false);
    expect(component.menuOpen()).toBe(false);
  });

  it('should toggle mobile menu', () => {
    const fixture = TestBed.createComponent(NavbarComponent);
    const component = fixture.componentInstance;

    component.toggleMenu();
    expect(component.menuOpen()).toBe(true);

    component.toggleMenu();
    expect(component.menuOpen()).toBe(false);
  });

  it('should close mobile menu on closeMenu()', () => {
    const fixture = TestBed.createComponent(NavbarComponent);
    const component = fixture.componentInstance;

    component.toggleMenu();
    expect(component.menuOpen()).toBe(true);

    component.closeMenu();
    expect(component.menuOpen()).toBe(false);
  });

  it('should update isScrolled when window scrolls', () => {
    const fixture = TestBed.createComponent(NavbarComponent);
    const component = fixture.componentInstance;

    Object.defineProperty(window, 'scrollY', { value: 50, writable: true });
    window.dispatchEvent(new Event('scroll'));
    component.onWindowScroll();
    expect(component.isScrolled()).toBe(true);

    Object.defineProperty(window, 'scrollY', { value: 10, writable: true });
    window.dispatchEvent(new Event('scroll'));
    component.onWindowScroll();
    expect(component.isScrolled()).toBe(false);
  });

  it('should render brand logo, navigation links, and trigger close on click', async () => {
    const fixture = TestBed.createComponent(NavbarComponent);
    fixture.detectChanges();
    const component = fixture.componentInstance;
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).toContain('REVA ASSOCIATES');
    expect(compiled.textContent).toContain('Your Trusted Financial Partner');
    expect(compiled.textContent).toContain('Book Free Consultation');

    const toggleBtn = compiled.querySelector('.mobile-toggle') as HTMLButtonElement;
    expect(toggleBtn).toBeTruthy();
    toggleBtn.click();
    fixture.detectChanges();
    expect(component.menuOpen()).toBe(true);

    const navLinks = compiled.querySelectorAll('.nav-links a');
    expect(navLinks.length).toBeGreaterThan(0);
    navLinks.forEach((link) => {
      (link as HTMLAnchorElement).click();
      expect(component.menuOpen()).toBe(false);
    });
    // Let the router finish the navigations the clicks started before teardown.
    await fixture.whenStable();
  });
});
