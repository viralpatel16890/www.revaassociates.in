import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <!-- HERO SECTION -->
    <section class="hero">
      <div class="hero-overlay"></div>
      <div class="container hero-container">
        <div class="hero-content">
          <span class="hero-badge"><i class="fa-solid fa-award"></i> Trusted Legal &amp; Corporate Advisors</span>
          <h1 class="hero-title">
            Strategic Counsel. <br/>
            <span>Uncompromising Integrity.</span>
          </h1>
          <p class="hero-description">
            Reva &amp; Associates provides premier advisory, litigation, and regulatory compliance services tailored to businesses, startups, and private clients across India and globally.
          </p>
          <div class="hero-actions">
            <a routerLink="/contact" class="btn btn-primary">
              <span>Book a Consultation</span>
              <i class="fa-solid fa-arrow-right"></i>
            </a>
            <a routerLink="/services" class="btn btn-outline-white">
              <i class="fa-solid fa-briefcase"></i>
              <span>Explore Practice Areas</span>
            </a>
          </div>

          <div class="hero-metrics">
            <div class="metric-item">
              <h3>20+</h3>
              <p>Years Experience</p>
            </div>
            <div class="metric-divider"></div>
            <div class="metric-item">
              <h3>1,500+</h3>
              <p>Clients Advised</p>
            </div>
            <div class="metric-divider"></div>
            <div class="metric-item">
              <h3>98%</h3>
              <p>Success Rate</p>
            </div>
            <div class="metric-divider"></div>
            <div class="metric-item">
              <h3>50+</h3>
              <p>Legal Experts</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- HIGHLIGHT STATS BAR -->
    <section class="banner-strip">
      <div class="container strip-grid">
        <div class="strip-item">
          <i class="fa-solid fa-shield-halved"></i>
          <div>
            <h4>Corporate Governance</h4>
            <p>Rigorous regulatory adherence &amp; board advisory</p>
          </div>
        </div>
        <div class="strip-item">
          <i class="fa-solid fa-handshake"></i>
          <div>
            <h4>Commercial Deals &amp; M&amp;A</h4>
            <p>Seamless transaction structuring &amp; due diligence</p>
          </div>
        </div>
        <div class="strip-item">
          <i class="fa-solid fa-gavel"></i>
          <div>
            <h4>Litigation Defense</h4>
            <p>High-stakes dispute resolution &amp; arbitration</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ABOUT PREVIEW SECTION -->
    <section class="section about-preview">
      <div class="container about-grid">
        <div class="about-image-col">
          <div class="image-wrapper">
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" alt="Office building" class="main-img" />
            <div class="exp-badge">
              <span class="exp-number">20+</span>
              <span class="exp-text">Years of Excellence in Legal Advocacy</span>
            </div>
          </div>
        </div>

        <div class="about-text-col">
          <span class="badge-tag">Who We Are</span>
          <h2>A Heritage of Trust, A Vision for Tomorrow</h2>
          <p class="lead-text">
            At Reva &amp; Associates, we combine traditional professional rigor with modern, tech-forward business acumen to navigate complex legal, tax, and regulatory landscapes.
          </p>
          <p>
            Our multidisciplinary team of seasoned advocates, chartered accountants, and company secretaries delivers actionable strategies designed to safeguard our clients' assets, drive growth, and mitigate risks.
          </p>

          <div class="features-list">
            <div class="feature-item">
              <i class="fa-solid fa-circle-check"></i>
              <div>
                <strong>Client-Centric Solutions:</strong> Every strategy is bespoke to your business model.
              </div>
            </div>
            <div class="feature-item">
              <i class="fa-solid fa-circle-check"></i>
              <div>
                <strong>Transparent Fee Models:</strong> Predictable retainers and milestone-based engagements.
              </div>
            </div>
            <div class="feature-item">
              <i class="fa-solid fa-circle-check"></i>
              <div>
                <strong>Global Capability:</strong> Cross-border legal structuring and foreign direct investment expertise.
              </div>
            </div>
          </div>

          <div class="cta-row">
            <a routerLink="/about" class="btn btn-primary">Learn More About Us</a>
            <div class="founder-info">
              <i class="fa-solid fa-quote-left quote-icon"></i>
              <span>"Justice and precision in every brief."</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CORE SERVICES -->
    <section class="section services-section bg-light">
      <div class="container">
        <div class="section-header">
          <span class="badge-tag">Practice Areas</span>
          <h2>Comprehensive Corporate &amp; Legal Services</h2>
          <p>Full-spectrum legal and financial advisory tailored to corporations, founders, and high-net-worth individuals.</p>
        </div>

        <div class="services-grid">
          <div class="service-card" *ngFor="let s of featuredServices">
            <div class="card-icon"><i [class]="s.icon"></i></div>
            <h3>{{ s.title }}</h3>
            <p>{{ s.description }}</p>
            <ul class="service-bullets">
              <li *ngFor="let item of s.bullets"><i class="fa-solid fa-check"></i> {{ item }}</li>
            </ul>
            <a routerLink="/services" class="card-link">
              <span>Read More</span>
              <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>

        <div class="view-all-wrapper">
          <a routerLink="/services" class="btn btn-primary">
            <span>View All Practice Areas</span>
            <i class="fa-solid fa-grid-2"></i>
          </a>
        </div>
      </div>
    </section>

    <!-- TESTIMONIALS SLIDER / PREVIEW -->
    <section class="section testimonials-section">
      <div class="container">
        <div class="section-header">
          <span class="badge-tag">Client Voices</span>
          <h2>What Our Clients Say About Us</h2>
          <p>Read genuine feedback from organizations and private individuals we have had the honor to advise.</p>
        </div>

        <div class="testimonials-grid">
          <div class="testimonial-card" *ngFor="let t of topTestimonials">
            <div class="stars">
              <i class="fa-solid fa-star" *ngFor="let i of [1,2,3,4,5]"></i>
            </div>
            <p class="quote">"{{ t.quote }}"</p>
            <div class="client-meta">
              <div class="client-avatar">
                <i class="fa-solid fa-user-tie"></i>
              </div>
              <div class="client-details">
                <h4>{{ t.name }}</h4>
                <span>{{ t.role }}, {{ t.company }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="view-all-wrapper">
          <a routerLink="/testimonials" class="btn btn-outline">Read All Client Stories</a>
        </div>
      </div>
    </section>

    <!-- CTA BANNER -->
    <section class="cta-banner">
      <div class="container cta-container">
        <div class="cta-text">
          <h2>Ready to Discuss Your Case or Transaction?</h2>
          <p>Schedule a confidential consultation with our principal advisors today.</p>
        </div>
        <div class="cta-actions">
          <a routerLink="/contact" class="btn btn-white">Get in Touch Today</a>
          <a href="tel:+919876543210" class="call-link">
            <i class="fa-solid fa-phone-volume"></i>
            <span>+91 98765 43210</span>
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      position: relative;
      background: linear-gradient(135deg, #09121f 0%, #11223e 50%, #0f1e36 100%);
      color: #ffffff;
      padding: 6.5rem 0 5rem 0;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        top: -50%;
        right: -10%;
        width: 600px;
        height: 600px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(197, 160, 89, 0.15) 0%, transparent 70%);
        pointer-events: none;
      }
    }

    .hero-container {
      position: relative;
      z-index: 2;
    }

    .hero-content {
      max-width: 820px;
    }

    .hero-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: rgba(197, 160, 89, 0.18);
      color: var(--secondary);
      border: 1px solid rgba(197, 160, 89, 0.35);
      padding: 0.45rem 1.1rem;
      border-radius: 50px;
      font-size: 0.85rem;
      font-weight: 600;
      letter-spacing: 0.5px;
      margin-bottom: 1.5rem;
    }

    .hero-title {
      font-size: 3.5rem;
      color: #ffffff;
      line-height: 1.15;
      margin-bottom: 1.5rem;

      span {
        color: var(--secondary);
        font-style: italic;
      }
    }

    @media (max-width: 768px) {
      .hero-title {
        font-size: 2.3rem;
      }
    }

    .hero-description {
      font-size: 1.2rem;
      color: #cbd5e1;
      line-height: 1.7;
      margin-bottom: 2.5rem;
      max-width: 700px;
    }

    .hero-actions {
      display: flex;
      gap: 1.25rem;
      flex-wrap: wrap;
      margin-bottom: 3.5rem;
    }

    .hero-metrics {
      display: flex;
      align-items: center;
      gap: 2.5rem;
      flex-wrap: wrap;
      padding-top: 2rem;
      border-top: 1px solid rgba(255, 255, 255, 0.12);

      .metric-item {
        h3 {
          color: #ffffff;
          font-size: 2rem;
          margin-bottom: 0.2rem;
        }

        p {
          color: #94a3b8;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin: 0;
        }
      }

      .metric-divider {
        width: 1px;
        height: 40px;
        background: rgba(255, 255, 255, 0.12);
      }
    }

    @media (max-width: 600px) {
      .hero-metrics .metric-divider {
        display: none;
      }
    }

    .banner-strip {
      background: var(--dark);
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      padding: 1.75rem 0;

      .strip-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
      }

      @media (max-width: 850px) {
        .strip-grid {
          grid-template-columns: 1fr;
          gap: 1.2rem;
        }
      }

      .strip-item {
        display: flex;
        align-items: center;
        gap: 1.2rem;

        i {
          font-size: 2rem;
          color: var(--secondary);
        }

        h4 {
          color: #ffffff;
          font-size: 1.05rem;
          margin-bottom: 0.2rem;
        }

        p {
          color: #94a3b8;
          font-size: 0.88rem;
          margin: 0;
        }
      }
    }

    .about-grid {
      display: grid;
      grid-template-columns: 1fr 1.1fr;
      gap: 4rem;
      align-items: center;
    }

    @media (max-width: 900px) {
      .about-grid {
        grid-template-columns: 1fr;
        gap: 2.5rem;
      }
    }

    .image-wrapper {
      position: relative;
      border-radius: var(--radius-md);
      overflow: hidden;
      box-shadow: var(--shadow-lg);

      .main-img {
        width: 100%;
        height: 480px;
        object-fit: cover;
      }

      .exp-badge {
        position: absolute;
        bottom: 25px;
        right: 25px;
        background: var(--primary);
        color: #ffffff;
        padding: 1.5rem;
        border-radius: var(--radius-sm);
        border-left: 4px solid var(--secondary);
        box-shadow: var(--shadow-md);
        max-width: 200px;

        .exp-number {
          display: block;
          font-size: 2.2rem;
          font-weight: 700;
          color: var(--secondary);
          line-height: 1;
        }

        .exp-text {
          font-size: 0.85rem;
          line-height: 1.3;
          margin-top: 0.35rem;
          display: block;
        }
      }
    }

    .about-text-col {
      .lead-text {
        font-size: 1.15rem;
        color: var(--primary);
        font-weight: 500;
        margin-bottom: 1rem;
      }

      .features-list {
        margin: 2rem 0;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 0.8rem;
          font-size: 0.95rem;

          i {
            color: var(--secondary);
            font-size: 1.1rem;
            margin-top: 0.2rem;
          }

          strong {
            color: var(--primary);
          }
        }
      }

      .cta-row {
        display: flex;
        align-items: center;
        gap: 2rem;
        flex-wrap: wrap;

        .founder-info {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-style: italic;
          color: var(--text-muted);
          font-size: 0.92rem;

          .quote-icon {
            color: var(--secondary);
            font-size: 1.2rem;
          }
        }
      }
    }

    .bg-light {
      background-color: var(--bg-light);
    }

    .services-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
      margin-bottom: 3rem;
    }

    @media (max-width: 950px) {
      .services-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 650px) {
      .services-grid {
        grid-template-columns: 1fr;
      }
    }

    .service-card {
      background: #ffffff;
      padding: 2.5rem 2rem;
      border-radius: var(--radius-md);
      box-shadow: var(--shadow-sm);
      border: 1px solid var(--border-color);
      transition: var(--transition);
      display: flex;
      flex-direction: column;

      &:hover {
        transform: translateY(-5px);
        box-shadow: var(--shadow-md);
        border-color: var(--secondary);
      }

      .card-icon {
        width: 58px;
        height: 58px;
        background: var(--secondary-soft);
        color: var(--secondary);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.6rem;
        border-radius: var(--radius-sm);
        margin-bottom: 1.5rem;
      }

      h3 {
        font-size: 1.35rem;
        margin-bottom: 0.85rem;
      }

      p {
        font-size: 0.95rem;
        margin-bottom: 1.25rem;
        flex-grow: 1;
      }

      .service-bullets {
        list-style: none;
        margin-bottom: 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        li {
          font-size: 0.88rem;
          color: var(--text-main);
          display: flex;
          align-items: center;
          gap: 0.5rem;

          i {
            color: var(--secondary);
            font-size: 0.75rem;
          }
        }
      }

      .card-link {
        font-weight: 600;
        color: var(--secondary);
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 0.92rem;

        i {
          transition: transform 0.2s ease;
        }

        &:hover i {
          transform: translateX(4px);
        }
      }
    }

    .view-all-wrapper {
      text-align: center;
      margin-top: 1rem;
    }

    .testimonials-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
      margin-bottom: 3rem;
    }

    @media (max-width: 950px) {
      .testimonials-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 650px) {
      .testimonials-grid {
        grid-template-columns: 1fr;
      }
    }

    .testimonial-card {
      background: #ffffff;
      padding: 2.2rem;
      border-radius: var(--radius-md);
      box-shadow: var(--shadow-sm);
      border: 1px solid var(--border-color);
      display: flex;
      flex-direction: column;

      .stars {
        color: #f59e0b;
        margin-bottom: 1rem;
        font-size: 0.9rem;
      }

      .quote {
        font-size: 0.95rem;
        font-style: italic;
        line-height: 1.6;
        margin-bottom: 1.5rem;
        flex-grow: 1;
      }

      .client-meta {
        display: flex;
        align-items: center;
        gap: 1rem;

        .client-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--secondary-soft);
          color: var(--secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
        }

        .client-details {
          h4 {
            font-size: 1rem;
            margin-bottom: 0.15rem;
          }

          span {
            font-size: 0.8rem;
            color: var(--text-muted);
          }
        }
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
export class HomeComponent {
  featuredServices = [
    {
      title: 'Corporate & Commercial Law',
      icon: 'fa-solid fa-briefcase',
      description: 'End-to-end counsel for contracts, M&A structuring, shareholder agreements, and corporate restructuring.',
      bullets: ['Contract drafting & negotiation', 'Joint ventures & M&A', 'Due diligence audits']
    },
    {
      title: 'Taxation & Regulatory Advisory',
      icon: 'fa-solid fa-file-invoice-dollar',
      description: 'Strategic direct and indirect tax advisory, dispute representation, and GST/FEMA compliance frameworks.',
      bullets: ['Direct & Indirect Tax advisory', 'FEMA & cross-border tax', 'Appellate authority representation']
    },
    {
      title: 'Dispute Resolution & Litigation',
      icon: 'fa-solid fa-gavel',
      description: 'Tenacious advocacy across High Courts, NCLT, DRT, and domestic/international commercial arbitrations.',
      bullets: ['Commercial disputes & recovery', 'Insolvency & bankruptcy (IBC)', 'Arbitration & mediation']
    },
    {
      title: 'Intellectual Property Protection',
      icon: 'fa-solid fa-copyright',
      description: 'Securing trademarks, patents, copyrights, and guarding enterprise assets against infringement.',
      bullets: ['Trademark & patent filings', 'IP portfolio management', 'Infringement litigation']
    },
    {
      title: 'Banking & Financial Regulations',
      icon: 'fa-solid fa-building-columns',
      description: 'Guidance on lending documentation, regulatory licensing, RBI compliances, and project financing.',
      bullets: ['Fintech & NBFC licensing', 'Loan structuring & security', 'RBI regulatory audits']
    },
    {
      title: 'Real Estate & Property Law',
      icon: 'fa-solid fa-city',
      description: 'Clear title verifications, RERA registrations, joint development agreements, and land litigation.',
      bullets: ['RERA advisory & compliance', 'Title clearance & search reports', 'Commercial leases & deeds']
    }
  ];

  topTestimonials = [
    {
      quote: 'Reva & Associates guided our cross-border joint venture with extraordinary precision. Their turnaround time and deep regulatory insight saved us months of deliberation.',
      name: 'Vikramaditya Shah',
      role: 'Managing Director',
      company: 'Zenith Logistics Ltd.'
    },
    {
      quote: 'Their litigation team represented us in a high-stakes NCLT dispute and delivered a seamless outcome. Highly dependable, ethical, and strategic.',
      name: 'Sunita Mehra',
      role: 'Chief Financial Officer',
      company: 'Apex Infra Projects'
    },
    {
      quote: 'Handling intellectual property and trademark protection across four continents was made effortlessly smooth by Reva & Associates. An indispensable legal partner.',
      name: 'Rohan Deshmukh',
      role: 'Founder & CEO',
      company: 'Krypton Technologies'
    }
  ];
}
