import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface FeedbackItem {
  id: number;
  author: string;
  category: string;
  rating: number;
  highlight: string;
  content: string;
  location: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <!-- PAGE HERO -->
    <div class="page-hero">
      <div class="container">
        <span class="badge-tag">Client Feedback</span>
        <h1>Trusted by 50+ Clients Across Mumbai</h1>
        <p>Real experiences from salaried professionals, retail shopkeepers, and SME business owners.</p>
      </div>
    </div>

    <!-- STATS OVERVIEW -->
    <section class="section rating-summary">
      <div class="container">
        <div class="summary-card">
          <div class="score-col">
            <span class="big-score">50+</span>
            <span class="rating-count">Happy Clients Across Mumbai</span>
            <div class="stars">
              <i class="fa-solid fa-star" *ngFor="let i of [1,2,3,4,5]"></i>
            </div>
            <span class="sub-label">100% Timely Compliance &amp; Satisfaction</span>
          </div>

          <div class="breakdown-col">
            <div class="stat-bar-item">
              <span>GST &amp; Income Tax Compliance</span>
              <div class="progress-bar"><div class="progress-fill" style="width: 100%;"></div></div>
              <span>100%</span>
            </div>
            <div class="stat-bar-item">
              <span>Loan &amp; Banking Assistance</span>
              <div class="progress-bar"><div class="progress-fill" style="width: 98%;"></div></div>
              <span>30+ Banks</span>
            </div>
            <div class="stat-bar-item">
              <span>Personalized Financial Planning</span>
              <div class="progress-bar"><div class="progress-fill" style="width: 100%;"></div></div>
              <span>Customized</span>
            </div>
          </div>

          <div class="cta-col">
            <h4>Work With Us</h4>
            <p>Experience hassle-free tax filing, transparent accounting, and practical financial guidance.</p>
            <a routerLink="/contact" class="btn btn-primary">Book Free Consultation</a>
          </div>
        </div>
      </div>
    </section>

    <!-- TESTIMONIALS CARDS -->
    <section class="section pt-0">
      <div class="container">
        <div class="section-header">
          <span class="badge-tag">Who We Serve</span>
          <h2>Client Feedback from Mumbai</h2>
          <p>Read what our clients have to say about working with Pooja Patel at Reva Associates.</p>
        </div>

        <div class="testimonials-wall">
          <div class="testimonial-bubble" *ngFor="let t of testimonials">
            <div class="bubble-header">
              <div class="stars">
                <i class="fa-solid fa-star" *ngFor="let s of [1,2,3,4,5]"></i>
              </div>
              <span class="industry-badge">{{ t.category }}</span>
            </div>

            <h4 class="highlight">"{{ t.highlight }}"</h4>
            <p class="body-text">{{ t.content }}</p>

            <div class="author-block">
              <div class="avatar-icon">
                <i class="fa-solid fa-user"></i>
              </div>
              <div class="author-details">
                <strong>{{ t.author }}</strong>
                <span>{{ t.location }}</span>
              </div>
            </div>
          </div>
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
        font-size: 2.8rem;
        color: #ffffff;
        margin: 0.8rem 0;
      }

      p {
        color: #cbd5e1;
        font-size: 1.15rem;
        max-width: 650px;
        margin: 0 auto;
      }
    }

    .rating-summary {
      padding: 3rem 0;
    }

    .summary-card {
      background: #ffffff;
      border-radius: var(--radius-md);
      box-shadow: var(--shadow-sm);
      border: 1px solid var(--border-color);
      padding: 2.5rem;
      display: grid;
      grid-template-columns: 1fr 1.5fr 1fr;
      gap: 3rem;
      align-items: center;
    }

    @media (max-width: 900px) {
      .summary-card {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
    }

    .score-col {
      text-align: center;

      .big-score {
        display: block;
        font-size: 3.5rem;
        font-weight: 800;
        color: var(--secondary);
        line-height: 1;
        margin-bottom: 0.35rem;
      }

      .rating-count {
        font-weight: 700;
        font-size: 1.05rem;
        color: var(--dark);
        display: block;
        margin-bottom: 0.5rem;
      }

      .stars {
        color: #f59e0b;
        margin-bottom: 0.4rem;
        font-size: 1.1rem;
      }

      .sub-label {
        font-size: 0.85rem;
        color: var(--text-muted);
      }
    }

    .breakdown-col {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;

      .stat-bar-item {
        display: flex;
        align-items: center;
        gap: 1rem;
        font-size: 0.88rem;

        span:first-child {
          width: 200px;
          color: var(--text-main);
          font-weight: 500;
        }

        .progress-bar {
          flex-grow: 1;
          height: 8px;
          background: #e2e8f0;
          border-radius: 4px;
          overflow: hidden;

          .progress-fill {
            height: 100%;
            background: var(--secondary);
            border-radius: 4px;
          }
        }

        span:last-child {
          width: 80px;
          text-align: right;
          font-weight: 700;
          color: var(--primary);
        }
      }
    }

    @media (max-width: 600px) {
      .breakdown-col .stat-bar-item {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.35rem;

        span:first-child {
          width: auto;
        }
        .progress-bar {
          width: 100%;
        }
        span:last-child {
          text-align: left;
        }
      }
    }

    .cta-col {
      text-align: center;
      padding-left: 2rem;
      border-left: 1px solid var(--border-color);

      h4 {
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
      }

      p {
        font-size: 0.88rem;
        color: var(--text-muted);
        margin-bottom: 1.25rem;
        line-height: 1.5;
      }
    }

    @media (max-width: 900px) {
      .cta-col {
        padding-left: 0;
        border-left: none;
        border-top: 1px solid var(--border-color);
        padding-top: 1.5rem;
      }
    }

    .testimonials-wall {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
    }

    @media (max-width: 992px) {
      .testimonials-wall {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 650px) {
      .testimonials-wall {
        grid-template-columns: 1fr;
      }
    }

    .testimonial-bubble {
      background: #ffffff;
      border-radius: var(--radius-md);
      padding: 2rem;
      border: 1px solid var(--border-color);
      box-shadow: var(--shadow-sm);
      display: flex;
      flex-direction: column;
      transition: var(--transition);

      &:hover {
        transform: translateY(-4px);
        box-shadow: var(--shadow-md);
        border-color: var(--secondary);
      }

      .bubble-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;

        .stars {
          color: #f59e0b;
          font-size: 0.85rem;
        }

        .industry-badge {
          font-size: 0.75rem;
          background: var(--secondary-soft);
          color: var(--secondary);
          padding: 0.25rem 0.65rem;
          border-radius: 50px;
          font-weight: 700;
        }
      }

      .highlight {
        font-size: 1.1rem;
        margin-bottom: 0.75rem;
        color: var(--dark);
      }

      .body-text {
        font-size: 0.92rem;
        line-height: 1.6;
        color: var(--text-muted);
        margin-bottom: 1.5rem;
        flex-grow: 1;
      }

      .author-block {
        display: flex;
        align-items: center;
        gap: 0.85rem;
        border-top: 1px solid #f1f5f9;
        padding-top: 1rem;

        .avatar-icon {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: var(--bg-light);
          color: var(--secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
        }

        .author-details {
          strong {
            display: block;
            font-size: 0.92rem;
            color: var(--dark);
          }

          span {
            font-size: 0.8rem;
            color: var(--text-muted);
          }
        }
      }
    }
  `]
})
export class TestimonialsComponent {
  testimonials: FeedbackItem[] = [
    {
      id: 1,
      author: 'Salaried IT Professional',
      category: 'Salaried Professionals',
      rating: 5,
      highlight: 'Clear Old vs New Tax Regime Calculation',
      content: 'Pooja Patel analyzed both tax regimes and identified deductions that saved me over ₹45,000 in income tax. Filing was completed accurately and quickly without any stress.',
      location: 'Borivali, Mumbai'
    },
    {
      id: 2,
      author: 'Retail Store Owner',
      category: 'Traders & Retailers',
      rating: 5,
      highlight: 'Zero GST Notice Worries',
      content: 'Managing monthly GSTR-1 and GSTR-3B filings has been completely smooth with Reva Associates. When we received a clarification notice, they handled the drafting and resolved it seamlessly.',
      location: 'Kandivali, Mumbai'
    },
    {
      id: 3,
      author: 'MSME Business Founder',
      category: 'Startups & MSMEs',
      rating: 5,
      highlight: 'End-to-End Bookkeeping & Loan Support',
      content: 'From monthly ledger reconciliation to preparing our Balance Sheet and securing an MSME business loan across 30+ lenders, Reva Associates has been a truly dependable one-stop solution.',
      location: 'Malad, Mumbai'
    }
  ];
}
