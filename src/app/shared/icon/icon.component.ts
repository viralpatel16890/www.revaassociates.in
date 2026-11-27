import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { ICONS } from './icons';

/**
 * Inline SVG icon. Used as an attribute on <i> so existing `i { ... }` styles
 * (font-size, color, margins) keep working: `<i icon="phone"></i>`.
 * Decorative by default (aria-hidden); give meaning via the parent's text/aria-label.
 */
@Component({
  selector: 'i[icon]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'icon', 'aria-hidden': 'true' },
  template: `
    @if (data(); as d) {
      <svg [attr.viewBox]="'0 0 ' + d.width + ' ' + d.height" focusable="false">
        <path fill="currentColor" [attr.d]="d.path" />
      </svg>
    }
  `,
  styles: `
    :host {
      display: inline-block;
      line-height: 1;
      font-style: normal;
      vertical-align: -0.125em;
    }
    svg {
      display: block;
      height: 1em;
      width: auto;
      overflow: visible;
    }
  `,
})
export class IconComponent {
  readonly icon = input.required<string>();
  protected readonly data = computed(() => ICONS[this.icon()]);
}
