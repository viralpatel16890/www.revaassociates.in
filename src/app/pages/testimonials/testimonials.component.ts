import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Testimonial {
  id: number;
  author: string;
  designation: string;
  company: string;
  industry: string;
  rating: number;
  highlight: string;
  content: string;
  date: string;
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
        <h1>Client Testimonials &amp; Success Stories</h1>
        <p>Real-world perspectives from founders, managing directors, and enterprise counsel we represent.</p>
      </div>
    </div>

    <!-- STATS OVERVIEW -->
    <section class="section rating-summary">
      <div class="container">
        <div class="summary-card">
          <div class="score-col">
            <span class="big-score">4.9</span>
            <div class="stars">
              <i class="fa-solid fa-star" *ngFor="let i of [1,2,3,4,5]"></i>
            </div>
            <span class="rating-count">Based on 180+ verified reviews</span>
          </div>

          <div class="breakdown-col">
            <div class="stat-bar-item">
              <span>Legal Acumen &amp; Strategy</span>
              <div class="progress-bar"><div class="progress-fill" style="width: 98%;"></div></div>
              <span>98%</span>
            </div>
            <div class="stat-bar-item">
              <span>Turnaround &amp; Responsiveness</span>
              <div class="progress-bar"><div class="progress-fill" style="width: 96%;"></div></div>
              <span>96%</span>
            </div>
            <div class="stat-bar-item">
              <span>Commercial Understanding</span>
              <div class="progress-bar"><div class="progress-fill" style="width: 99%;"></div></div>
              <span>99%</span>
            </div>
          </div>

          <div class="cta-col">
            <h4>Work With Us</h4>
            <p>Experience the same commitment and strategic rigor on your next legal matter.</p>
            <a routerLink="/contact" class="btn btn-primary">Book Consultation</a>
          </div>
        </div>
      </div>
    </section>

    <!-- TESTIMONIALS CARDS -->
    <section class="section pt-0">
      <div class="container">
        <div class="filters">
          <button 
            [class.active]="activeIndustry() === 'ALL'" 
            (click)="setIndustry('ALL')">All Industries</button>
          <button 
            *ngFor="let ind of industries" 
            [class.active]="activeIndustry() === ind" 
            (click)="setIndustry(ind)">{{ ind }}</button>
        </div>

        <div class="testimonials-wall">
          <div class="testimonial-bubble" *ngFor="let t of filteredTestimonials()">
            <div class="bubble-header">
              <div class="stars">
                <i class="fa-solid fa-star" *ngFor="let s of [1,2,3,4,5]"></i>
              </div>
              <span class="industry-badge">{{ t.industry }}</span>
            </div>

            <h4 class="highlight">"{{ t.highlight }}"</h4>
            <p class="body-text">{{ t.content }}</p>

            <div class="author-block">
              <div class="avatar-icon">
                <i class="fa-solid fa-user-tie"></i>
              </div>
              <div class="author-details">
                <strong>{{ t.author }}</strong>
                <span>{{ t.designation }}</span>
                <span class="company">{{ t.company }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SUBMIT REVIEW CTA -->
    <section class="section bg-light">
      <div class="container text-center">
        <span class="badge-tag">Share Your Feedback</span>
        <h2>Are You a Current or Former Client?</h2>
        <p class="cta-sub">We continually strive to uphold the highest benchmarks of advocacy. We welcome your thoughts.</p>
        <a routerLink="/contact" class="btn btn-outline">Submit Your Feedback</a>
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
        max-width: 650px;
        margin: 0 auto;
      }
    }

    .rating-summary {
      padding-top: 3.5rem;
      padding-bottom: 2rem;
    }

    .summary-card {
      background: #ffffff;
      border: 1px solid var(--border-color);
      border-radius: var(--radius-md);
      padding: 2.5rem;
      box-shadow: var(--shadow-sm);
      display: grid;
      grid-template-columns: 1fr 1.5fr 1fr;
      gap: 3rem;
      align-items: center;
    }

    @media (max-width: 950px) {
      .summary-card {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
    }

    .score-col {
      text-align: center;
      border-right: 1px solid var(--border-color);
      padding-right: 2rem;

      .big-score {
        font-size: 4rem;
        font-weight: 800;
        color: var(--primary);
        line-height: 1;
        font-family: var(--font-heading);
      }

      .stars {
        color: #f59e0b;
        margin: 0.5rem 0;
        font-size: 1.1rem;
      }

      .rating-count {
        font-size: 0.85rem;
        color: var(--text-muted);
      }
    }

    @media (max-width: 950px) {
      .score-col {
        border-right: none;
        padding-right: 0;
        border-bottom: 1px solid var(--border-color);
        padding-bottom: 1.5rem;
      }
    }

    .breakdown-col {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      .stat-bar-item {
        display: flex;
        align-items: center;
        gap: 1rem;
        font-size: 0.88rem;

        span:first-child {
          width: 190px;
          color: var(--primary);
          font-weight: 600;
        }

        .progress-bar {
          flex-grow: 1;
          height: 8px;
          background: #e2e8f0;
          border-radius: 10px;
          overflow: hidden;

          .progress-fill {
            height: 100%;
            background: var(--secondary);
            border-radius: 10px;
          }
        }

        span:last-child {
          width: 35px;
          font-weight: 700;
          color: var(--secondary);
        }
      }
    }

    .cta-col {
      h4 {
        font-size: 1.25rem;
        margin-bottom: 0.5rem;
      }

      p {
        font-size: 0.9rem;
        margin-bottom: 1.25rem;
      }

      .btn {
        width: 100%;
      }
    }

    .filters {
      display: flex;
      justify-content: center;
      gap: 0.65rem;
      margin: 2.5rem 0 3.5rem 0;
      flex-wrap: wrap;

      button {
        padding: 0.6rem 1.25rem;
        border-radius: 50px;
        background: #ffffff;
        border: 1px solid var(--border-color);
        font-size: 0.88rem;
        font-weight: 600;
        color: var(--primary);
        cursor: pointer;
        transition: var(--transition);

        &:hover {
          border-color: var(--secondary);
          color: var(--secondary);
        }

        &.active {
          background: var(--primary);
          color: #ffffff;
          border-color: var(--primary);
        }
      }
    }

    .testimonials-wall {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
    }

    @media (max-width: 950px) {
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
      border: 1px solid var(--border-color);
      border-radius: var(--radius-md);
      padding: 2.2rem;
      box-shadow: var(--shadow-sm);
      display: flex;
      flex-direction: column;
      transition: var(--transition);

      &:hover {
        transform: translateY(-5px);
        box-shadow: var(--shadow-md);
        border-color: var(--secondary);
      }

      .bubble-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.25rem;

        .stars {
          color: #f59e0b;
          font-size: 0.85rem;
        }

        .industry-badge {
          font-size: 0.72rem;
          background: var(--secondary-soft);
          color: var(--secondary);
          font-weight: 700;
          padding: 0.25rem 0.65rem;
          border-radius: 50px;
        }
      }

      .highlight {
        font-size: 1.15rem;
        color: var(--primary);
        margin-bottom: 0.75rem;
        line-height: 1.4;
      }

      .body-text {
        font-size: 0.94rem;
        line-height: 1.6;
        margin-bottom: 1.8rem;
        flex-grow: 1;
      }

      .author-block {
        display: flex;
        align-items: center;
        gap: 0.85rem;
        border-top: 1px solid #f1f5f9;
        padding-top: 1.2rem;

        .avatar-icon {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--bg-light);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
        }

        .author-details {
          display: flex;
          flex-direction: column;

          strong {
            font-size: 0.95rem;
            color: var(--primary);
          }

          span {
            font-size: 0.8rem;
            color: var(--text-muted);
          }

          .company {
            font-weight: 600;
            color: var(--secondary);
          }
        }
      }
    }

    .cta-sub {
      max-width: 600px;
      margin: 0.5rem auto 1.8rem auto;
      font-size: 1.05rem;
    }
  `]
})
export class TestimonialsComponent {
  activeIndustry = signal<string>('ALL');

  industries = [
    'Technology & SaaS',
    'Manufacturing',
    'Real Estate & Infra',
    'Financial Services',
    'Healthcare'
  ];

  testimonials: Testimonial[] = [
    {
      id: 1,
      author: 'Vikramaditya Shah',
      designation: 'Managing Director',
      company: 'Zenith Logistics Ltd.',
      industry: 'Manufacturing',
      rating: 5,
      highlight: 'Navigated our cross-border joint venture with remarkable finesse',
      content: 'Reva & Associates handled our multi-jurisdiction supply chain contracts and JV formation. Their strategic perspective saved us both tax leakage and potential operational liabilities.',
      date: 'October 2025'
    },
    {
      id: 2,
      author: 'Sunita Mehra',
      designation: 'Chief Financial Officer',
      company: 'Apex Infra Projects',
      industry: 'Real Estate & Infra',
      rating: 5,
      highlight: 'Decisive victory in our high-stakes arbitration',
      content: 'We engaged their dispute resolution team on a ₹45 Crore dispute with a state contractor. Their preparation of documentary evidence and courtroom articulation were truly unmatched.',
      date: 'December 2025'
    },
    {
      id: 3,
      author: 'Rohan Deshmukh',
      designation: 'Founder & CEO',
      company: 'Krypton Technologies',
      industry: 'Technology & SaaS',
      rating: 5,
      highlight: 'Flawless execution during our Series B equity round',
      content: 'From drafting SHA amendments to navigating foreign investor condition precedents, the partners worked round the clock. They are our permanent legal wing now.',
      date: 'January 2026'
    },
    {
      id: 4,
      author: 'Dr. Ananya Singhal',
      designation: 'Executive Director',
      company: 'CarePlus Diagnostics',
      industry: 'Healthcare',
      rating: 5,
      highlight: 'Comprehensive regulatory and data compliance guidance',
      content: 'Medical data governance, health-tech regulatory audits, and hospital land lease negotiations were all completed seamlessly under their watchful counsel.',
      date: 'August 2025'
    },
    {
      id: 5,
      author: 'Arjun Varma',
      designation: 'Principal Partner',
      company: 'Ascend Capital Advisors',
      industry: 'Financial Services',
      rating: 5,
      highlight: 'Deep understanding of RBI regulations and SEBI frameworks',
      content: 'Their insights into alternative investment funds (AIF) licensing and regulatory compounding procedures have repeatedly proven invaluable to our fund structuring.',
      date: 'November 2025'
    },
    {
      id: 6,
      author: 'Priya Nambiar',
      designation: 'Chief Legal Officer',
      company: 'OmniTrade Retail India',
      industry: 'Technology & SaaS',
      rating: 5,
      highlight: 'Prompt, commercially-grounded legal advice on ongoing contracts',
      content: 'What sets Reva & Associates apart is their pragmatism. They do not just spot legal risks; they suggest workable commercial alternatives that keep deals moving forward.',
      date: 'February 2026'
    }
  ];

  filteredTestimonials() {
    const ind = this.activeIndustry();
    if (ind === 'ALL') {
      return this.testimonials;
    }
    return this.testimonials.filter(t => t.industry === ind);
  }

  setIndustry(ind: string) {
    this.activeIndustry.set(ind);
  }
}
