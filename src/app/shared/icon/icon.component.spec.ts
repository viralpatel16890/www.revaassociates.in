import { Component, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { IconComponent } from './icon.component';
import { ICONS } from './icons';

@Component({
  imports: [IconComponent],
  template: `<i [icon]="name()" class="extra"></i>`,
})
class Host {
  name = signal('phone');
}

describe('IconComponent', () => {
  it('renders an aria-hidden inline SVG for a known icon and keeps host classes', async () => {
    const fixture = TestBed.createComponent(Host);
    await fixture.whenStable();
    const i = fixture.nativeElement.querySelector('i') as HTMLElement;
    expect(i.getAttribute('aria-hidden')).toBe('true');
    expect(i.classList).toContain('icon');
    expect(i.classList).toContain('extra');
    const svg = i.querySelector('svg')!;
    expect(svg.getAttribute('viewBox')).toBe(
      `0 0 ${ICONS['phone'].width} ${ICONS['phone'].height}`,
    );
    expect(svg.querySelector('path')!.getAttribute('d')).toBe(ICONS['phone'].path);
  });

  it('switches icons when the input changes and renders nothing for unknown names', async () => {
    const fixture = TestBed.createComponent(Host);
    await fixture.whenStable();
    fixture.componentInstance.name.set('whatsapp');
    await fixture.whenStable();
    expect(fixture.nativeElement.querySelector('path').getAttribute('d')).toBe(
      ICONS['whatsapp'].path,
    );

    fixture.componentInstance.name.set('does-not-exist');
    await fixture.whenStable();
    expect(fixture.nativeElement.querySelector('svg')).toBeNull();
  });

  it('includes every icon the site references', () => {
    for (const name of [
      'bars',
      'xmark',
      'phone',
      'envelope',
      'whatsapp',
      'chevron-right',
      'book-bookmark',
    ]) {
      expect(ICONS[name]).toBeDefined();
    }
  });
});
