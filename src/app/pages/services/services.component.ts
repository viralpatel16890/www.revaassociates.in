import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

interface ServiceDetail {
  id: string;
  category: string;
  title: string;
  icon: string;
  badge?: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <!-- PAGE HERO -->
    <div class="page-hero">
      <div class="container">
        <span class="badge-tag">Our Core Offerings</span>
        <h1>Comprehensive Financial &amp; Taxation Services</h1>
        <p>Simplifying Accounting, Taxation, Loans, Insurance, Investments &amp; Portfolio Management for Individuals and Businesses across India.</p>
      </div>
    </div>

    <!-- FILTER BAR -->
    <section class="section">
      <div class="container">
        <div class="category-tabs">
          <button 
            [class.active]="selectedCategory() === 'ALL'" 
            (click)="setCategory('ALL')">
            All Services ({{ allServices.length }})
          </button>
          <button 
            *ngFor="let cat of categories" 
            [class.active]="selectedCategory() === cat" 
            (click)="setCategory(cat)">
            {{ cat }}
          </button>
        </div>

        <div class="services-list-grid">
          <div class="service-detail-card" *ngFor="let s of filteredServices()">
            <div class="card-head">
              <div class="icon-box"><i [class]="s.icon"></i></div>
              <div class="pills-wrap">
                <span class="core-pill" *ngIf="s.badge">{{ s.badge }}</span>
                <span class="category-pill">{{ s.category }}</span>
              </div>
            </div>
            <h3>{{ s.title }}</h3>
            <p class="desc">{{ s.fullDesc }}</p>
            
            <div class="deliverables-block">
              <h5>Key Offerings &amp; Scope:</h5>
              <ul>
                <li *ngFor="let d of s.deliverables">
                  <i class="fa-solid fa-circle-check"></i>
                  <span>{{ d }}</span>
                </li>
              </ul>
            </div>

            <div class="card-footer">
              <a routerLink="/contact" class="btn btn-primary">
                <span>Book Free Consultation</span>
                <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CONSULTATION CALLOUT -->
    <section class="section bg-light">
      <div class="container text-center">
        <div class="need-help-box">
          <i class="fa-solid fa-phone-volume scale-icon"></i>
          <h2>Have Questions About Taxes, Loans, or Investments?</h2>
          <p>
            Connect with <strong>Pooja Patel</strong> at Reva Associates for free initial advice. We explain complex financial rules in simple language.
          </p>
          <div class="btn-group">
            <a routerLink="/contact" class="btn btn-primary">Book Free Consultation</a>
            <a href="tel:8879146502" class="btn btn-outline"><i class="fa-solid fa-phone"></i> Call 8879 146 502</a>
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
        max-width: 750px;
        margin: 0 auto;
        line-height: 1.6;
      }
    }

    .category-tabs {
      display: flex;
      justify-content: center;
      gap: 0.75rem;
      margin-bottom: 3.5rem;
      flex-wrap: wrap;

      button {
        padding: 0.65rem 1.4rem;
        border-radius: 50px;
        background: #ffffff;
        border: 1px solid var(--border-color);
        font-size: 0.9rem;
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

    .services-list-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2.5rem;
    }

    @media (max-width: 850px) {
      .services-list-grid {
        grid-template-columns: 1fr;
      }
    }

    .service-detail-card {
      background: #ffffff;
      border: 1px solid var(--border-color);
      border-radius: var(--radius-md);
      padding: 2.5rem;
      box-shadow: var(--shadow-sm);
      display: flex;
      flex-direction: column;
      transition: var(--transition);

      &:hover {
        transform: translateY(-4px);
        box-shadow: var(--shadow-md);
        border-color: var(--secondary);
      }

      .card-head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.5rem;

        .icon-box {
          width: 55px;
          height: 55px;
          border-radius: var(--radius-sm);
          background: var(--secondary-soft);
          color: var(--secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
        }

        .pills-wrap {
          display: flex;
          gap: 0.5rem;
          align-items: center;
        }

        .core-pill {
          background: #fef3c7;
          color: #b45309;
          font-weight: 700;
          font-size: 0.78rem;
          padding: 0.3rem 0.75rem;
          border-radius: 50px;
          border: 1px solid #fde68a;
        }

        .category-pill {
          background: var(--bg-light);
          padding: 0.3rem 0.85rem;
          border-radius: 50px;
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--primary);
          letter-spacing: 0.5px;
        }
      }

      h3 {
        font-size: 1.45rem;
        margin-bottom: 1rem;
        color: var(--dark);
      }

      .desc {
        font-size: 0.98rem;
        line-height: 1.65;
        margin-bottom: 1.5rem;
        color: var(--text-muted);
      }

      .deliverables-block {
        background: var(--bg-light);
        padding: 1.25rem 1.5rem;
        border-radius: var(--radius-sm);
        margin-bottom: 2rem;
        flex-grow: 1;

        h5 {
          font-family: var(--font-body);
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: var(--primary);
          margin-bottom: 0.8rem;
          font-weight: 700;
        }

        ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          padding: 0;
          margin: 0;

          li {
            font-size: 0.9rem;
            color: var(--text-dark);
            display: flex;
            align-items: flex-start;
            gap: 0.6rem;

            i {
              color: var(--secondary);
              margin-top: 0.2rem;
              font-size: 0.85rem;
            }
          }
        }
      }

      .card-footer {
        a {
          width: 100%;
          justify-content: center;
        }
      }
    }

    .need-help-box {
      max-width: 700px;
      margin: 0 auto;
      padding: 3rem 1.5rem;

      .scale-icon {
        font-size: 3rem;
        color: var(--secondary);
        margin-bottom: 1.5rem;
      }

      h2 {
        font-size: 2.2rem;
        margin-bottom: 1rem;
      }

      p {
        font-size: 1.05rem;
        margin-bottom: 2rem;
      }

      .btn-group {
        display: flex;
        justify-content: center;
        gap: 1rem;
        flex-wrap: wrap;
      }
    }
  `]
})
export class ServicesComponent {
  selectedCategory = signal<string>('ALL');

  categories = [
    'Accounting',
    'Tax Filing',
    'Loans',
    'Insurance',
    'Investments',
    'Portfolio Management'
  ];

  allServices: ServiceDetail[] = [
    {
      id: 'accounting-services',
      category: 'Accounting',
      title: 'Accounting Services',
      icon: 'fa-solid fa-book-bookmark',
      shortDesc: 'Complete bookkeeping and financial reporting as per Indian GAAP.',
      fullDesc: 'Complete bookkeeping and financial reporting as per Indian GAAP. Monthly ledger maintenance, Bank reconciliation, Profit & Loss, Balance Sheet, MIS reports for business decisions.',
      deliverables: [
        'Complete bookkeeping as per Indian GAAP',
        'Monthly ledger maintenance & journal entries',
        'Bank reconciliation statements (BRS)',
        'Profit & Loss statement and Balance Sheet preparation',
        'Management Information System (MIS) reports for informed business decisions'
      ]
    },
    {
      id: 'tax-filing-services',
      category: 'Tax Filing',
      badge: 'Our Core',
      title: 'Tax Filing Services - Our Core',
      icon: 'fa-solid fa-file-invoice-dollar',
      shortDesc: 'Comprehensive ITR, GST, TDS compliance and strategic tax planning.',
      fullDesc: 'Full-spectrum Indian taxation advisory and filing services designed to keep individuals, businesses, and professionals 100% compliant and tax-efficient.',
      deliverables: [
        'Income Tax Return (ITR): For Salaried, Business, Professionals (ITR-1 to ITR-7), Belated & Revised Returns',
        'GST: Registration, Monthly/Quarterly GSTR-1, GSTR-3B filing, Annual Return GSTR-9, LUT, E-way Bill, GST Notice Handling',
        'TDS/TCS: Calculation, Return filing (24Q, 26Q, 27Q), Form 16/16A, Lower deduction certificate',
        'Tax Planning: Old vs New regime analysis, 80C, 80D, Capital Gains, Advance Tax planning'
      ]
    },
    {
      id: 'loan-services',
      category: 'Loans',
      title: 'Loan Services',
      icon: 'fa-solid fa-landmark',
      shortDesc: 'We help you get the best loan with minimal paperwork across 30+ banks and NBFCs.',
      fullDesc: 'We help you get the best loan with minimal paperwork: Home Loan, Business Loan, MSME Loan, Mudra Loan, Personal Loan, Loan Against Property, Overdraft & CC Facility. We compare across 30+ banks and NBFCs.',
      deliverables: [
        'Home Loan & Loan Against Property (LAP)',
        'Business Loan & MSME Loan facilitation',
        'Mudra Loan & Personal Loan advisory',
        'Overdraft (OD) & Cash Credit (CC) facilities',
        'Interest rate and tenure comparison across 30+ leading banks & NBFCs'
      ]
    },
    {
      id: 'insurance-services',
      category: 'Insurance',
      title: 'Insurance Services',
      icon: 'fa-solid fa-shield-halved',
      shortDesc: 'Life, Health, Term, Motor & Business Insurance with claim assistance.',
      fullDesc: 'Life, Health, Term, Motor & Business Insurance. IRDA-compliant advisory to protect what matters. Claim assistance included.',
      deliverables: [
        'Life & Term Insurance for complete family financial protection',
        'Health & Medical Insurance (Individual & Family Floater)',
        'Motor Insurance (Two-wheeler, Car & Commercial Vehicle)',
        'Business & Commercial Asset Insurance',
        'IRDA-compliant advisory with dedicated claim assistance support'
      ]
    },
    {
      id: 'investment-services',
      category: 'Investments',
      title: 'Investment Services',
      icon: 'fa-solid fa-chart-pie',
      shortDesc: 'Goal-based investment planning: Mutual Funds, SIP, FD, PPF, NPS & ELSS.',
      fullDesc: 'Goal-based investment planning: Mutual Funds, SIP, Fixed Deposits, PPF, NPS, ELSS for tax saving, Retirement & Child education planning.',
      deliverables: [
        'Mutual Funds & Systematic Investment Plans (SIP)',
        'Tax saving ELSS schemes under Section 80C',
        'Fixed Deposits (FD), Public Provident Fund (PPF) & National Pension Scheme (NPS)',
        'Retirement planning & wealth accumulation strategies',
        'Child higher education & milestone planning'
      ]
    },
    {
      id: 'portfolio-management',
      category: 'Portfolio Management',
      title: 'Portfolio Management',
      icon: 'fa-solid fa-arrow-trend-up',
      shortDesc: 'For HNI clients: Equity portfolio tracking, Asset allocation & rebalancing.',
      fullDesc: 'For HNI clients: Equity portfolio tracking, Asset allocation, Risk profiling, Quarterly rebalancing to maximize post-tax returns.',
      deliverables: [
        'Equity portfolio tracking & performance monitoring',
        'Comprehensive asset allocation aligned with financial goals',
        'In-depth risk profiling and volatility hedging',
        'Quarterly portfolio rebalancing to maximize post-tax returns'
      ]
    }
  ];

  filteredServices() {
    const cat = this.selectedCategory();
    if (cat === 'ALL') {
      return this.allServices;
    }
    return this.allServices.filter(s => s.category === cat);
  }

  setCategory(category: string) {
    this.selectedCategory.set(category);
  }
}
