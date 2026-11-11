import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  template: `
    <header class="header" [class.scrolled]="isScrolled()">
      <div class="topbar">
        <div class="container topbar-inner">
          <div class="topbar-contacts">
            <span><i class="fa-solid fa-phone"></i> +91 98765 43210</span>
            <span><i class="fa-solid fa-envelope"></i> contact&#64;revaassociates.in</span>
            <span><i class="fa-solid fa-clock"></i> Mon - Sat: 9:30 AM - 6:30 PM</span>
          </div>
          <div class="topbar-socials">
            <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
            <a href="https://twitter.com" target="_blank" aria-label="Twitter"><i class="fa-brands fa-x-twitter"></i></a>
            <a href="https://facebook.com" target="_blank" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
          </div>
        </div>
      </div>

      <nav class="navbar">
        <div class="container nav-container">
          <a routerLink="/" class="logo">
            <span class="logo-mark"><i class="fa-solid fa-scale-balanced"></i></span>
            <div class="logo-text">
              <span class="logo-title">REVA &amp; ASSOCIATES</span>
              <span class="logo-tagline">Advocates &amp; Corporate Advisors</span>
            </div>
          </a>

          <button class="mobile-toggle" (click)="toggleMenu()" aria-label="Toggle navigation">
            <i class="fa-solid" [class.fa-bars]="!menuOpen()" [class.fa-xmark]="menuOpen()"></i>
          </button>

          <div class="nav-links" [class.open]="menuOpen()">
            <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" (click)="closeMenu()">Home</a>
            <a routerLink="/about" routerLinkActive="active" (click)="closeMenu()">About Us</a>
            <a routerLink="/services" routerLinkActive="active" (click)="closeMenu()">Services</a>
            <a routerLink="/testimonials" routerLinkActive="active" (click)="closeMenu()">Testimonials</a>
            <a routerLink="/contact" routerLinkActive="active" (click)="closeMenu()">Contact</a>
            <a routerLink="/contact" class="btn btn-primary nav-cta" (click)="closeMenu()">
              <span>Free Consultation</span>
              <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </nav>
    </header>
  `,
  styles: [`
    .header {
      position: sticky;
      top: 0;
      z-index: 1000;
      background: #ffffff;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
      transition: all 0.3s ease;
    }

    .topbar {
      background: var(--dark);
      color: #94a3b8;
      font-size: 0.82rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);

      .topbar-inner {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
      }

      .topbar-contacts {
        display: flex;
        gap: 1.5rem;
        flex-wrap: wrap;

        span {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;

          i {
            color: var(--secondary);
          }
        }
      }

      .topbar-socials {
        display: flex;
        gap: 1rem;

        a {
          color: #94a3b8;
          &:hover {
            color: var(--secondary);
          }
        }
      }
    }

    @media (max-width: 900px) {
      .topbar {
        display: none;
      }
    }

    .navbar {
      background: #ffffff;
      padding: 0.9rem 0;
    }

    .nav-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 0.85rem;

      .logo-mark {
        width: 44px;
        height: 44px;
        background: linear-gradient(135deg, var(--primary), var(--primary-light));
        color: var(--secondary);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: var(--radius-sm);
        font-size: 1.3rem;
        box-shadow: 0 4px 10px rgba(15, 30, 54, 0.15);
      }

      .logo-text {
        display: flex;
        flex-direction: column;

        .logo-title {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 700;
          letter-spacing: 0.5px;
          color: var(--primary);
          line-height: 1.1;
        }

        .logo-tagline {
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          color: var(--secondary);
          font-weight: 600;
          margin-top: 2px;
        }
      }
    }

    .mobile-toggle {
      display: none;
      background: none;
      border: none;
      font-size: 1.5rem;
      color: var(--primary);
      cursor: pointer;
    }

    .nav-links {
      display: flex;
      align-items: center;
      gap: 2rem;

      a:not(.btn) {
        font-size: 0.95rem;
        font-weight: 600;
        color: var(--primary);
        position: relative;
        padding: 0.4rem 0;

        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--secondary);
          transition: width 0.25s ease;
        }

        &:hover, &.active {
          color: var(--secondary);
          &::after {
            width: 100%;
          }
        }
      }

      .nav-cta {
        padding: 0.65rem 1.4rem;
        font-size: 0.88rem;
      }
    }

    @media (max-width: 960px) {
      .mobile-toggle {
        display: block;
      }

      .nav-links {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: #ffffff;
        flex-direction: column;
        align-items: stretch;
        padding: 1.5rem 2rem 2rem 2rem;
        gap: 1.2rem;
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
        border-top: 1px solid var(--border-color);
        display: none;

        &.open {
          display: flex;
        }

        .nav-cta {
          text-align: center;
          margin-top: 0.5rem;
        }
      }
    }
  `]
})
export class NavbarComponent {
  isScrolled = signal(false);
  menuOpen = signal(false);

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 30);
  }

  toggleMenu() {
    this.menuOpen.update(v => !v);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }
}
