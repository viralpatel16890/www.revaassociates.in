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
          <span class="hero-badge"><i class="fa-solid fa-chart-line"></i> Accounting | Tax Filing | Loans | Insurance | Investments | Portfolio Management</span>
          <h1 class="hero-title">
            Reva Associates - <br/>
            <span>Your Trusted Financial Partner in Mumbai</span>
          </h1>
          <p class="hero-description">
            Simplifying Accounting, Taxation, Loans &amp; Investments for Individuals and Businesses across India.
          </p>
          <div class="hero-actions">
            <a routerLink="/contact" class="btn btn-primary">
              <span>Book Free Consultation</span>
              <i class="fa-solid fa-arrow-right"></i>
            </a>
            <a href="tel:8879146502" class="btn btn-outline-white">
              <i class="fa-solid fa-phone"></i>
              <span>Call Now</span>
            </a>
          </div>

          <div class="hero-metrics">
            <div class="metric-item">
              <h3>50+</h3>
              <p>Happy Clients</p>
            </div>
            <div class="metric-divider"></div>
            <div class="metric-item">
              <h3>30+</h3>
              <p>Banks &amp; NBFC Partners</p>
            </div>
            <div class="metric-divider"></div>
            <div class="metric-item">
              <h3>100%</h3>
              <p>Compliance &amp; Timely Filings</p>
            </div>
            <div class="metric-divider"></div>
            <div class="metric-item">
              <h3>1-Stop</h3>
              <p>Financial Solution</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- INTRO & WHY CHOOSE US -->
    <section class="section about-preview">
      <div class="container about-grid">
        <div class="about-image-col">
          <div class="image-wrapper">
            <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80" alt="Accounting & Financial Planning" class="main-img" />
            <div class="exp-badge">
              <span class="exp-number">50+</span>
              <span class="exp-text">Happy Clients Across Mumbai</span>
            </div>
          </div>
        </div>

        <div class="about-text-col">
          <span class="badge-tag">About Reva Associates</span>
          <h2>We Handle the Numbers, So You Can Focus on Growth</h2>
          <p class="lead-text">
            At Reva Associates, we help individuals, startups, and SMEs stay compliant, save taxes, and grow wealth.
          </p>
          <p>
            Based in Borivali East, Mumbai, we combine deep knowledge of Indian taxation laws with practical financial advice. From GST and Income Tax filing to loan advisory and investment planning — we handle the numbers, so you can focus on growth.
          </p>

          <div class="features-list">
            <div class="feature-item">
              <i class="fa-solid fa-circle-check"></i>
              <div>
                <strong>Local Expertise with 50+ Happy Clients:</strong> In-depth knowledge of Indian accounting standards, Income Tax Act, and GST laws, trusted by 50+ clients across Mumbai.
              </div>
            </div>
            <div class="feature-item">
              <i class="fa-solid fa-circle-check"></i>
              <div>
                <strong>One-Stop Solution:</strong> From bookkeeping to portfolio management — all financial services under one roof.
              </div>
            </div>
            <div class="feature-item">
              <i class="fa-solid fa-circle-check"></i>
              <div>
                <strong>Transparent &amp; Timely:</strong> No hidden charges. We ensure 100% compliance and on-time filings.
              </div>
            </div>
            <div class="feature-item">
              <i class="fa-solid fa-circle-check"></i>
              <div>
                <strong>Personalized for You:</strong> Custom plans for salaried individuals, traders, professionals, and SMEs.
              </div>
            </div>
          </div>

          <div class="cta-row">
            <a routerLink="/about" class="btn btn-primary">More About Us</a>
            <div class="founder-info">
              <i class="fa-solid fa-handshake quote-icon"></i>
              <span><strong>Our Promise:</strong> Compliance, Clarity, Growth.</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- OUR SERVICES OVERVIEW -->
    <section class="section services-section bg-light">
      <div class="container">
        <div class="section-header">
          <span class="badge-tag">Our Services</span>
          <h2>Comprehensive Financial &amp; Taxation Solutions</h2>
          <p>End-to-end accounting, tax compliance, loan syndication, insurance, and wealth advisory tailored to your unique goals.</p>
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
              <span>Explore Details</span>
              <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>

        <div class="view-all-wrapper">
          <a routerLink="/services" class="btn btn-primary">
            <span>View All Services</span>
            <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>

    <!-- WHO WE SERVE -->
    <section class="section who-we-serve-section">
      <div class="container">
        <div class="section-header">
          <span class="badge-tag">Who We Serve</span>
          <h2>Tailored Solutions for Every Client</h2>
          <p>We serve a diverse range of clients across Mumbai and India with personalized financial support.</p>
        </div>

        <div class="serve-grid">
          <div class="serve-card">
            <div class="serve-icon"><i class="fa-solid fa-user-tie"></i></div>
            <h4>Salaried Professionals &amp; NRI Clients</h4>
            <p>Optimal tax filing, Old vs New regime optimization, Capital gains calculation, and foreign remittance advisory.</p>
          </div>
          <div class="serve-card">
            <div class="serve-icon"><i class="fa-solid fa-shop"></i></div>
            <h4>Traders, Shopkeepers &amp; Retailers in Mumbai</h4>
            <p>Hassle-free monthly GST filings, input tax credit reconciliation, inventory bookkeeping, and working capital loans.</p>
          </div>
          <div class="serve-card">
            <div class="serve-icon"><i class="fa-solid fa-building"></i></div>
            <h4>Startups, MSMEs, Partnership Firms, Pvt Ltd Companies</h4>
            <p>End-to-end statutory compliance, Indian GAAP bookkeeping, TDS/TCS, advance tax, and balance sheet preparation.</p>
          </div>
          <div class="serve-card">
            <div class="serve-icon"><i class="fa-solid fa-user-doctor"></i></div>
            <h4>Doctors, CAs, Lawyers &amp; Freelancers</h4>
            <p>Presumptive taxation (Section 44ADA), professional expense optimization, investment planning, and wealth management.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- COMPLIANCE CALENDAR & FAQ -->
    <section class="section calendar-faq-section bg-light">
      <div class="container">
        <div class="two-col-grid">
          <!-- COMPLIANCE CALENDAR -->
          <div class="col-calendar">
            <span class="badge-tag">Compliance Calendar</span>
            <h2>Key Tax Deadlines</h2>
            <p>Stay ahead of statutory due dates and avoid late fees and interest penalties.</p>

            <div class="calendar-table-wrap">
              <table class="compliance-table">
                <thead>
                  <tr>
                    <th>Deadline</th>
                    <th>Compliance Requirement</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><span class="date-badge">July 31</span></td>
                    <td><strong>ITR Filing for Individuals</strong> (Salaried, Non-audit cases)</td>
                  </tr>
                  <tr>
                    <td><span class="date-badge">Oct 31</span></td>
                    <td><strong>Tax Audit Cases</strong> (Businesses &amp; eligible professionals)</td>
                  </tr>
                  <tr>
                    <td><span class="date-badge">Monthly</span></td>
                    <td><strong>GSTR-1 &amp; 3B</strong> (GST Returns &amp; Tax Payments)</td>
                  </tr>
                  <tr>
                    <td><span class="date-badge">Quarterly</span></td>
                    <td><strong>TDS Returns</strong> (24Q, 26Q, 27Q &amp; Form 16/16A generation)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- FAQ SECTION -->
          <div class="col-faq">
            <span class="badge-tag">Common Questions</span>
            <h2>Frequently Asked Questions</h2>
            <p>Quick answers to common queries regarding Indian taxation and regulatory compliance.</p>

            <div class="faq-list">
              <div class="faq-card">
                <h4><i class="fa-solid fa-circle-question"></i> What is the difference between old and new tax regime?</h4>
                <p>We explain and calculate which regime saves you more tax based on your deductions (80C, 80D, HRA) and income brackets.</p>
              </div>
              <div class="faq-card">
                <h4><i class="fa-solid fa-circle-question"></i> Do I need GST registration if turnover is below 40 lakhs?</h4>
                <p>Depends on service vs goods and interstate supply. We advise for free to ensure you stay fully compliant.</p>
              </div>
              <div class="faq-card">
                <h4><i class="fa-solid fa-circle-question"></i> Can you handle GST notices?</h4>
                <p>Yes, complete representation, scrutiny analysis, and reply drafting as per GST law guidelines.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA BANNER -->
    <section class="cta-banner">
      <div class="container cta-container">
        <div class="cta-text">
          <h2>Ready to Simplify Your Taxes &amp; Finances?</h2>
          <p>Book a free consultation with Pooja Patel at Reva Associates today.</p>
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
      max-width: 860px;
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
      flex-wrap: wrap;
    }

    .hero-title {
      font-size: 3.2rem;
      color: #ffffff;
      line-height: 1.2;
      margin-bottom: 1.5rem;

      span {
        color: var(--secondary);
      }
    }

    @media (max-width: 768px) {
      .hero-title {
        font-size: 2.2rem;
      }
    }

    .hero-description {
      font-size: 1.25rem;
      color: #cbd5e1;
      line-height: 1.7;
      margin-bottom: 2.5rem;
      max-width: 720px;
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
        max-width: 220px;

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
        gap: 1.1rem;

        .feature-item {
          display: flex;
          gap: 1rem;
          align-items: flex-start;

          i {
            color: var(--secondary);
            font-size: 1.1rem;
            margin-top: 0.2rem;
          }

          strong {
            color: var(--dark);
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
          gap: 0.75rem;
          color: var(--primary);
          font-size: 0.95rem;

          .quote-icon {
            color: var(--secondary);
            font-size: 1.2rem;
          }
        }
      }
    }

    .services-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
      margin-bottom: 3rem;
    }

    @media (max-width: 992px) {
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
      border: 1px solid #e2e8f0;
      transition: var(--transition);
      display: flex;
      flex-direction: column;

      &:hover {
        transform: translateY(-5px);
        box-shadow: var(--shadow-lg);
        border-color: var(--secondary);
      }

      .card-icon {
        width: 60px;
        height: 60px;
        border-radius: var(--radius-sm);
        background: var(--secondary-soft);
        color: var(--secondary);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        margin-bottom: 1.5rem;
      }

      h3 {
        font-size: 1.3rem;
        margin-bottom: 0.75rem;
        color: var(--dark);
      }

      p {
        color: var(--text-muted);
        font-size: 0.95rem;
        line-height: 1.6;
        margin-bottom: 1.25rem;
      }

      .service-bullets {
        list-style: none;
        padding: 0;
        margin: 0 0 1.5rem 0;

        li {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.88rem;
          color: var(--text-dark);
          margin-bottom: 0.45rem;

          i {
            color: var(--secondary);
            font-size: 0.8rem;
          }
        }
      }

      .card-link {
        margin-top: auto;
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        color: var(--secondary);
        font-weight: 600;
        font-size: 0.95rem;

        &:hover {
          gap: 0.8rem;
          color: var(--secondary-hover);
        }
      }
    }

    .view-all-wrapper {
      text-align: center;
      margin-top: 1rem;
    }

    .serve-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1.5rem;
    }

    @media (max-width: 992px) {
      .serve-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 576px) {
      .serve-grid {
        grid-template-columns: 1fr;
      }
    }

    .serve-card {
      background: #ffffff;
      padding: 2rem 1.5rem;
      border-radius: var(--radius-md);
      border: 1px solid #e2e8f0;
      text-align: center;
      transition: var(--transition);

      &:hover {
        border-color: var(--secondary);
        box-shadow: var(--shadow-md);
        transform: translateY(-4px);
      }

      .serve-icon {
        width: 60px;
        height: 60px;
        margin: 0 auto 1.25rem auto;
        background: var(--secondary-soft);
        color: var(--secondary);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.4rem;
      }

      h4 {
        font-size: 1.1rem;
        margin-bottom: 0.75rem;
        color: var(--dark);
      }

      p {
        font-size: 0.9rem;
        color: var(--text-muted);
        line-height: 1.5;
        margin: 0;
      }
    }

    .two-col-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3.5rem;
    }

    @media (max-width: 900px) {
      .two-col-grid {
        grid-template-columns: 1fr;
        gap: 3rem;
      }
    }

    .compliance-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 1.5rem;
      background: #ffffff;
      border-radius: var(--radius-sm);
      overflow: hidden;
      box-shadow: var(--shadow-sm);

      th, td {
        padding: 1.1rem 1.25rem;
        text-align: left;
        border-bottom: 1px solid #f1f5f9;
      }

      th {
        background: var(--dark);
        color: #ffffff;
        font-size: 0.9rem;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      td {
        font-size: 0.92rem;
        color: var(--text-dark);
      }

      .date-badge {
        display: inline-block;
        background: var(--secondary-soft);
        color: var(--secondary);
        font-weight: 700;
        padding: 0.25rem 0.65rem;
        border-radius: 4px;
        font-size: 0.85rem;
      }
    }

    .faq-list {
      margin-top: 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 1.25rem;

      .faq-card {
        background: #ffffff;
        padding: 1.5rem;
        border-radius: var(--radius-sm);
        border-left: 4px solid var(--secondary);
        box-shadow: var(--shadow-sm);

        h4 {
          font-size: 1.05rem;
          color: var(--dark);
          margin-bottom: 0.5rem;
          display: flex;
          align-items: center;
          gap: 0.6rem;

          i {
            color: var(--secondary);
            font-size: 1rem;
          }
        }

        p {
          font-size: 0.92rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin: 0;
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
      title: 'Accounting Services',
      icon: 'fa-solid fa-book-bookmark',
      description: 'Complete bookkeeping and financial reporting as per Indian GAAP.',
      bullets: ['Monthly ledger maintenance', 'Bank reconciliation', 'Profit & Loss & Balance Sheet', 'MIS reports for business decisions']
    },
    {
      title: 'Tax Filing Services - Our Core',
      icon: 'fa-solid fa-file-invoice-dollar',
      description: 'Full-suite ITR, GST, and TDS compliance with end-to-end notice handling.',
      bullets: ['ITR for Salaried, Business, Professionals', 'GST Registration, GSTR-1 & 3B, GSTR-9', 'TDS/TCS returns (24Q, 26Q, 27Q)', 'Tax Planning: Old vs New regime analysis']
    },
    {
      title: 'Loan Services',
      icon: 'fa-solid fa-landmark',
      description: 'We help you get the best loan with minimal paperwork across 30+ banks and NBFCs.',
      bullets: ['Home Loan, Business & MSME Loan', 'Mudra Loan & Personal Loan', 'Loan Against Property (LAP)', 'Overdraft & CC Facility']
    },
    {
      title: 'Insurance Services',
      icon: 'fa-solid fa-shield-halved',
      description: 'IRDA-compliant advisory to protect what matters most with full claim assistance.',
      bullets: ['Life & Term Insurance', 'Health Insurance', 'Motor Insurance', 'Business Insurance & Claim assistance']
    },
    {
      title: 'Investment Services',
      icon: 'fa-solid fa-chart-pie',
      description: 'Goal-based investment planning to grow long-term wealth securely.',
      bullets: ['Mutual Funds & SIP', 'Fixed Deposits & PPF', 'NPS & ELSS for tax saving', 'Retirement & Child education planning']
    },
    {
      title: 'Portfolio Management',
      icon: 'fa-solid fa-arrow-trend-up',
      description: 'For HNI clients seeking structured asset allocation and post-tax return maximization.',
      bullets: ['Equity portfolio tracking', 'Asset allocation & risk profiling', 'Quarterly rebalancing', 'Post-tax return optimization']
    }
  ];
}
