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
            <span class="logo-mark"><i class="fa-solid fa-chart-line"></i></span>
            <div>
              <h3>REVA ASSOCIATES</h3>
              <span class="tag">Your Trusted Financial Partner</span>
            </div>
          </div>
          <p class="brand-desc">
            Simplifying Accounting, Taxation, Loans &amp; Investments for Individuals and Businesses across India. Operated by Pooja Patel in Borivali East, Mumbai.
          </p>
          <div class="social-links">
            <a href="https://wa.me/918879146502" target="_blank" aria-label="WhatsApp"><i class="fa-brands fa-whatsapp"></i></a>
            <a href="mailto:revaassociates22@gmail.com" aria-label="Email"><i class="fa-solid fa-envelope"></i></a>
            <a href="tel:8879146502" aria-label="Phone"><i class="fa-solid fa-phone"></i></a>
          </div>
        </div>

        <div class="footer-col">
          <h4 class="col-title">Quick Links</h4>
          <ul class="footer-links">
            <li><a routerLink="/"><i class="fa-solid fa-chevron-right"></i> Home</a></li>
            <li><a routerLink="/about"><i class="fa-solid fa-chevron-right"></i> About Us</a></li>
            <li><a routerLink="/services"><i class="fa-solid fa-chevron-right"></i> Our Services</a></li>
            <li><a routerLink="/contact"><i class="fa-solid fa-chevron-right"></i> Contact Us</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4 class="col-title">Our Services</h4>
          <ul class="footer-links">
            <li><a routerLink="/services"><i class="fa-solid fa-chevron-right"></i> Accounting Services</a></li>
            <li><a routerLink="/services"><i class="fa-solid fa-chevron-right"></i> Tax Filing Services (ITR, GST, TDS)</a></li>
            <li><a routerLink="/services"><i class="fa-solid fa-chevron-right"></i> Loan Advisory (30+ Banks &amp; NBFCs)</a></li>
            <li><a routerLink="/services"><i class="fa-solid fa-chevron-right"></i> Insurance Services</a></li>
            <li><a routerLink="/services"><i class="fa-solid fa-chevron-right"></i> Investment Services &amp; SIP</a></li>
            <li><a routerLink="/services"><i class="fa-solid fa-chevron-right"></i> Portfolio Management</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4 class="col-title">Contact Information</h4>
          <div class="contact-item">
            <i class="fa-solid fa-location-dot"></i>
            <div>
              <strong>Office Address</strong>
              <p>15/Patrakar Sadan, Near Rationing Office, Rajendra Nagar, Borivali East, Mumbai - 400066</p>
            </div>
          </div>
          <div class="contact-item">
            <i class="fa-solid fa-user"></i>
            <div>
              <strong>Contact Person</strong>
              <p>Pooja Patel</p>
            </div>
          </div>
          <div class="contact-item">
            <i class="fa-solid fa-phone"></i>
            <div>
              <strong>Phone / WhatsApp</strong>
              <p><a href="tel:8879146502" style="color: inherit;">+91 8879 146 502</a></p>
            </div>
          </div>
          <div class="contact-item">
            <i class="fa-solid fa-envelope"></i>
            <div>
              <strong>Email</strong>
              <p><a href="mailto:revaassociates22@gmail.com" style="color: inherit;">revaassociates22&#64;gmail.com</a></p>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="container bottom-inner">
          <p>&copy; 2026 Reva Associates, Mumbai. Operated by Pooja Patel. All Rights Reserved.</p>
          <div class="disclaimer-links">
            <span>Disclaimer: We are financial consultants, not a bank or NBFC. Investments are subject to market risks.</span>
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
