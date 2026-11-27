import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconComponent } from '../../shared/icon/icon.component';
import { BUSINESS } from '../../core/business-info';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink, IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="not-found">
      <div class="container">
        <span class="badge-tag">Error 404</span>
        <h1>Page not found</h1>
        <p>Sorry, the page you were looking for doesn't exist or may have moved.</p>
        <div class="actions">
          <a routerLink="/" class="btn btn-primary">
            <span>Go to Home</span>
            <i icon="arrow-right"></i>
          </a>
          <a routerLink="/contact" class="btn btn-outline">Contact Us</a>
          <a [href]="biz.phoneHref" class="btn btn-outline">
            <i icon="phone"></i>
            <span>Call {{ biz.phoneDisplay }}</span>
          </a>
        </div>
      </div>
    </section>
  `,
  styles: `
    .not-found {
      padding: 7rem 0;
      text-align: center;
    }
    h1 {
      font-size: clamp(2.2rem, 5vw, 3rem);
      margin: 0.8rem 0 1rem;
    }
    p {
      max-width: 520px;
      margin: 0 auto 2rem;
    }
    .actions {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
    }
  `,
})
export class NotFoundComponent {
  protected get biz() {
    return BUSINESS;
  }
}
