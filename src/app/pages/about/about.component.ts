import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <!-- PAGE HEADER -->
    <div class="page-hero">
      <div class="container">
        <span class="badge-tag">About Us</span>
        <h1>About Reva Associates</h1>
        <p>Simplifying finance, taxation, and investments with clarity, compliance, and commitment.</p>
      </div>
    </div>

    <!-- MISSION & PROMISE -->
    <section class="section">
      <div class="container">
        <div class="mission-grid">
          <div class="mission-card">
            <div class="icon-circle"><i class="fa-solid fa-bullseye"></i></div>
            <h3>Our Mission</h3>
            <p>
              To make finance simple, accessible, and transparent for every Indian individual, trader, professional, and growing business.
            </p>
          </div>
          <div class="mission-card">
            <div class="icon-circle"><i class="fa-solid fa-handshake"></i></div>
            <h3>Our Promise</h3>
            <p>
              <strong>Compliance, Clarity, Growth.</strong> We believe good accounting is not just about compliance — it's about clarity for better decisions.
            </p>
          </div>
          <div class="mission-card">
            <div class="icon-circle"><i class="fa-solid fa-users"></i></div>
            <h3>Who We Stand For</h3>
            <p>
              Whether you are a small shop owner filing your first GST return or an investor building a long-term portfolio, we speak your language.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- DETAILED STORY SECTION -->
    <section class="section story-section bg-light">
      <div class="container story-grid">
        <div class="story-content">
          <span class="badge-tag">Our Story</span>
          <h2>Founded &amp; Operated by Pooja Patel</h2>
          <p class="lead-text">
            Reva Associates was founded and is operated by <strong>Pooja Patel</strong> with a mission to make finance simple for every Indian.
          </p>
          <p>
            Located in Rajendra Nagar, Borivali East, we proudly serve 50+ happy clients across Mumbai. We combine deep knowledge of Indian taxation laws with practical, hands-on financial guidance.
          </p>
          <p>
            From GST and Income Tax filing to loan advisory and investment planning — we handle the numbers, so you can focus on growth.
          </p>

          <div class="milestones">
            <div class="milestone-box">
              <span class="number">50+</span>
              <span class="desc">Happy Clients</span>
            </div>
            <div class="milestone-box">
              <span class="number">30+</span>
              <span class="desc">Banks &amp; NBFCs</span>
            </div>
            <div class="milestone-box">
              <span class="number">100%</span>
              <span class="desc">On-Time Compliance</span>
            </div>
          </div>
        </div>

        <div class="story-image">
          <div class="founder-card">
            <div class="founder-badge"><i class="fa-solid fa-award"></i> Founder &amp; Operator</div>
            <div class="founder-header">
              <div class="avatar-circle">
                <i class="fa-solid fa-user-tie"></i>
              </div>
              <div>
                <h3>Pooja Patel</h3>
                <span class="founder-title">Founder &amp; Financial Consultant</span>
                <p class="founder-loc"><i class="fa-solid fa-location-dot"></i> Borivali East, Mumbai</p>
              </div>
            </div>
            <p class="founder-quote">
              "We believe good accounting is not just about compliance — it's about clarity for better decisions. Whether you are a small shop owner or an investor, we speak your language."
            </p>
            <div class="founder-contacts">
              <a href="tel:8879146502"><i class="fa-solid fa-phone"></i> 8879 146 502</a>
              <a href="mailto:revaassociates22@gmail.com"><i class="fa-solid fa-envelope"></i> revaassociates22&#64;gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- WHY CHOOSE US -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <span class="badge-tag">Why Choose Us</span>
          <h2>The Reva Associates Advantage</h2>
          <p>Trusted financial partner delivering complete clarity and dedicated compliance support.</p>
        </div>

        <div class="edge-grid">
          <div class="edge-item" *ngFor="let edge of edges">
            <div class="edge-icon"><i [class]="edge.icon"></i></div>
            <div>
              <h4>{{ edge.title }}</h4>
              <p>{{ edge.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA BANNER -->
    <section class="cta-banner">
      <div class="container cta-container">
        <div class="cta-text">
          <h2>Ready to Partner with Us?</h2>
          <p>Book a free consultation and let us simplify your taxes and finances today.</p>
        </div>
        <div class="cta-actions">
          <a routerLink="/contact" class="btn btn-white">Book Free Consultation</a>
          <a href="tel:8879146502" class="call-link">
            <i class="fa-solid fa-phone-volume"></i>
            <span>8879 146 502</span>
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .page-hero {
      background: linear-gradient(135deg, var(--dark) 0%, var(--primary) 100%);
      color: #ffffff;
      padding: 5rem 0 4.5rem 0;
      text-align: center;

      h1 {
        font-size: 3rem;
        color: #ffffff;
        margin: 0.8rem 0;
      }

      p {
        color: #cbd5e1;
        font-size: 1.15rem;
        max-width: 600px;
        margin: 0 auto;
      }
    }

    .mission-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
    }

    @media (max-width: 900px) {
      .mission-grid {
        grid-template-columns: 1fr;
      }
    }

    .mission-card {
      background: #ffffff;
      padding: 2.5rem;
      border-radius: var(--radius-md);
      box-shadow: var(--shadow-sm);
      border: 1px solid var(--border-color);
      transition: var(--transition);

      &:hover {
        transform: translateY(-4px);
        box-shadow: var(--shadow-md);
        border-color: var(--secondary);
      }

      .icon-circle {
        width: 55px;
        height: 55px;
        border-radius: 50%;
        background: var(--secondary-soft);
        color: var(--secondary);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.4rem;
        margin-bottom: 1.5rem;
      }

      h3 {
        font-size: 1.35rem;
        margin-bottom: 0.85rem;
      }

      p {
        font-size: 0.95rem;
        line-height: 1.65;
        margin: 0;
      }
    }

    .story-section {
      background-color: var(--bg-light);
    }

    .story-grid {
      display: grid;
      grid-template-columns: 1.2fr 0.8fr;
      gap: 4rem;
      align-items: center;
    }

    @media (max-width: 950px) {
      .story-grid {
        grid-template-columns: 1fr;
        gap: 2.5rem;
      }
    }

    .story-content {
      .lead-text {
        font-size: 1.15rem;
        color: var(--primary);
        font-weight: 500;
        margin-bottom: 1rem;
      }

      p {
        margin-bottom: 1.25rem;
      }

      .milestones {
        display: flex;
        gap: 2.5rem;
        margin-top: 2rem;
        flex-wrap: wrap;

        .milestone-box {
          .number {
            display: block;
            font-size: 2rem;
            font-weight: 800;
            color: var(--secondary);
            font-family: var(--font-heading);
          }
          .desc {
            font-size: 0.85rem;
            color: var(--text-muted);
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
        }
      }
    }

    .founder-card {
      background: #ffffff;
      padding: 2.5rem;
      border-radius: var(--radius-md);
      box-shadow: var(--shadow-lg);
      border-top: 5px solid var(--secondary);

      .founder-badge {
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
        background: var(--secondary-soft);
        color: var(--secondary);
        padding: 0.3rem 0.8rem;
        border-radius: 50px;
        font-size: 0.8rem;
        font-weight: 700;
        text-transform: uppercase;
        margin-bottom: 1.25rem;
      }

      .founder-header {
        display: flex;
        align-items: center;
        gap: 1.25rem;
        margin-bottom: 1.5rem;

        .avatar-circle {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background: var(--primary-soft);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.8rem;
        }

        h3 {
          font-size: 1.4rem;
          margin-bottom: 0.2rem;
          color: var(--dark);
        }

        .founder-title {
          font-size: 0.9rem;
          color: var(--secondary);
          font-weight: 600;
          display: block;
        }

        .founder-loc {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-top: 0.2rem;
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }
      }

      .founder-quote {
        font-style: italic;
        color: var(--text-dark);
        line-height: 1.6;
        font-size: 0.95rem;
        border-left: 3px solid var(--secondary);
        padding-left: 1rem;
        margin-bottom: 1.5rem;
      }

      .founder-contacts {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        border-top: 1px solid #f1f5f9;
        padding-top: 1.25rem;

        a {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          color: var(--primary);
          font-weight: 600;
          font-size: 0.92rem;

          &:hover {
            color: var(--secondary);
          }
        }
      }
    }

    .edge-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
    }

    @media (max-width: 768px) {
      .edge-grid {
        grid-template-columns: 1fr;
      }
    }

    .edge-item {
      display: flex;
      gap: 1.25rem;
      background: #ffffff;
      padding: 1.75rem;
      border-radius: var(--radius-sm);
      border: 1px solid var(--border-color);

      .edge-icon {
        width: 48px;
        height: 48px;
        min-width: 48px;
        background: var(--secondary-soft);
        color: var(--secondary);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: var(--radius-sm);
        font-size: 1.25rem;
      }

      h4 {
        font-size: 1.1rem;
        margin-bottom: 0.35rem;
      }

      p {
        font-size: 0.92rem;
        margin: 0;
        color: var(--text-muted);
        line-height: 1.5;
      }
    }

    .cta-banner {
      background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
      padding: 4.5rem 0;
      color: #ffffff;

      .cta-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 2rem;
        flex-wrap: wrap;
      }

      .cta-text {
        max-width: 650px;

        h2 {
          color: #ffffff;
          font-size: 2.2rem;
          margin-bottom: 0.6rem;
        }

        p {
          color: #cbd5e1;
          font-size: 1.1rem;
          margin: 0;
        }
      }

      .cta-actions {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        flex-wrap: wrap;

        .call-link {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          color: #ffffff;
          font-size: 1.15rem;
          font-weight: 700;

          i {
            color: var(--secondary);
            font-size: 1.3rem;
          }

          &:hover {
            color: var(--secondary);
          }
        }
      }
    }
  `]
})
export class AboutComponent {
  edges = [
    {
      icon: 'fa-solid fa-users',
      title: 'Local Expertise with 50+ Happy Clients',
      desc: 'In-depth knowledge of Indian accounting standards, Income Tax Act, and GST laws, trusted by 50+ clients across Mumbai.'
    },
    {
      icon: 'fa-solid fa-layer-group',
      title: 'One-Stop Solution',
      desc: 'From bookkeeping to portfolio management — all financial, tax, loan, and insurance services under one roof.'
    },
    {
      icon: 'fa-solid fa-clock-rotate-left',
      title: 'Transparent & Timely',
      desc: 'No hidden charges. We ensure 100% compliance and on-time filings so you avoid penalties and notices.'
    },
    {
      icon: 'fa-solid fa-user-check',
      title: 'Personalized for You',
      desc: 'Customized plans for salaried individuals, traders, professionals, and SMEs tailored to your financial goals.'
    }
  ];
}
