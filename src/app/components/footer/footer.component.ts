import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="footer">
      <div class="container footer-content">
        <div class="footer-col brand-col">
          <div class="footer-logo">
            <span class="logo-mark"><i class="fa-solid fa-scale-balanced"></i></span>
            <div>
              <h3>REVA &amp; ASSOCIATES</h3>
              <span class="tag">Advocates &amp; Corporate Advisors</span>
            </div>
          </div>
          <p class="brand-desc">
            Reva &amp; Associates is a premier legal and corporate advisory firm delivering strategic counsel, regulatory compliance, dispute resolution, and taxation solutions to enterprises and individuals.
          </p>
          <div class="social-links">
            <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
            <a href="https://twitter.com" target="_blank" aria-label="Twitter"><i class="fa-brands fa-x-twitter"></i></a>
            <a href="https://facebook.com" target="_blank" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="https://instagram.com" target="_blank" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
          </div>
        </div>

        <div class="footer-col">
          <h4 class="col-title">Quick Links</h4>
          <ul class="footer-links">
            <li><a routerLink="/"><i class="fa-solid fa-chevron-right"></i> Home</a></li>
            <li><a routerLink="/about"><i class="fa-solid fa-chevron-right"></i> About Our Firm</a></li>
            <li><a routerLink="/services"><i class="fa-solid fa-chevron-right"></i> Practice Areas</a></li>
            <li><a routerLink="/testimonials"><i class="fa-solid fa-chevron-right"></i> Client Testimonials</a></li>
            <li><a routerLink="/contact"><i class="fa-solid fa-chevron-right"></i> Contact &amp; Inquiry</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4 class="col-title">Practice Areas</h4>
          <ul class="footer-links">
            <li><a routerLink="/services"><i class="fa-solid fa-chevron-right"></i> Corporate &amp; Commercial Law</a></li>
            <li><a routerLink="/services"><i class="fa-solid fa-chevron-right"></i> Taxation &amp; Regulatory Compliance</a></li>
            <li><a routerLink="/services"><i class="fa-solid fa-chevron-right"></i> Litigation &amp; Dispute Resolution</a></li>
            <li><a routerLink="/services"><i class="fa-solid fa-chevron-right"></i> Intellectual Property Rights</a></li>
            <li><a routerLink="/services"><i class="fa-solid fa-chevron-right"></i> Real Estate &amp; Property Advisory</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4 class="col-title">Contact Information</h4>
          <div class="contact-item">
            <i class="fa-solid fa-location-dot"></i>
            <div>
              <strong>Head Office</strong>
              <p>402, Prestige Tower, Bandra Kurla Complex, Mumbai, Maharashtra 400051, India</p>
            </div>
          </div>
          <div class="contact-item">
            <i class="fa-solid fa-phone"></i>
            <div>
              <strong>Phone</strong>
              <p>+91 (022) 2890-1234 / +91 98765 43210</p>
            </div>
          </div>
          <div class="contact-item">
            <i class="fa-solid fa-envelope"></i>
            <div>
              <strong>Email</strong>
              <p>info&#64;revaassociates.in</p>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="container bottom-inner">
          <p>&copy; {{ currentYear }} Reva &amp; Associates. All Rights Reserved. Built with Angular.</p>
          <div class="disclaimer-links">
            <a href="#">Privacy Policy</a>
            <span>•</span>
            <a href="#">Terms of Use</a>
            <span>•</span>
            <a href="#">Legal Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background-color: var(--dark);
      color: #94a3b8;
      padding-top: 5rem;
      border-top: 3px solid var(--secondary);
    }

    .footer-content {
      display: grid;
      grid-template-columns: 1.4fr 0.9fr 1.1fr 1.2fr;
      gap: 3rem;
      padding-bottom: 4rem;
    }

    @media (max-width: 1024px) {
      .footer-content {
        grid-template-columns: 1fr 1fr;
      }
    }

    @media (max-width: 640px) {
      .footer-content {
        grid-template-columns: 1fr;
      }
    }

    .footer-logo {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1.25rem;

      .logo-mark {
        width: 44px;
        height: 44px;
        background: var(--primary-light);
        border: 1px solid rgba(197, 160, 89, 0.4);
        color: var(--secondary);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: var(--radius-sm);
        font-size: 1.25rem;
      }

      h3 {
        color: #ffffff;
        font-size: 1.25rem;
        margin: 0;
      }

      .tag {
        font-size: 0.72rem;
        text-transform: uppercase;
        color: var(--secondary);
        letter-spacing: 1px;
      }
    }

    .brand-desc {
      font-size: 0.92rem;
      line-height: 1.7;
      margin-bottom: 1.5rem;
      color: #94a3b8;
    }

    .social-links {
      display: flex;
      gap: 0.75rem;

      a {
        width: 38px;
        height: 38px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        display: flex;
        align-items: center;
        justify-content: center;
        color: #e2e8f0;
        font-size: 0.9rem;
        transition: var(--transition);

        &:hover {
          background: var(--secondary);
          color: #ffffff;
          border-color: var(--secondary);
          transform: translateY(-3px);
        }
      }
    }

    .col-title {
      color: #ffffff;
      font-size: 1.15rem;
      margin-bottom: 1.5rem;
      position: relative;
      padding-bottom: 0.75rem;

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 35px;
        height: 2px;
        background: var(--secondary);
      }
    }

    .footer-links {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 0.75rem;

      a {
        color: #94a3b8;
        font-size: 0.92rem;
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        transition: var(--transition);

        i {
          font-size: 0.7rem;
          color: var(--secondary);
          transition: transform 0.2s ease;
        }

        &:hover {
          color: #ffffff;
          padding-left: 4px;

          i {
            transform: translateX(3px);
          }
        }
      }
    }

    .contact-item {
      display: flex;
      gap: 1rem;
      margin-bottom: 1.25rem;

      i {
        font-size: 1.1rem;
        color: var(--secondary);
        margin-top: 0.25rem;
      }

      strong {
        display: block;
        color: #ffffff;
        font-size: 0.92rem;
        margin-bottom: 0.15rem;
      }

      p {
        font-size: 0.88rem;
        color: #94a3b8;
        margin: 0;
        line-height: 1.5;
      }
    }

    .footer-bottom {
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      padding: 1.5rem 0;
      font-size: 0.85rem;

      .bottom-inner {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 1rem;
      }

      p {
        margin: 0;
        color: #64748b;
      }

      .disclaimer-links {
        display: flex;
        align-items: center;
        gap: 0.75rem;

        a {
          color: #64748b;
          &:hover {
            color: var(--secondary);
          }
        }
      }
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
