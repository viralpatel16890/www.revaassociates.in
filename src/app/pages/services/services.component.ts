import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

interface ServiceDetail {
  id: string;
  category: string;
  title: string;
  icon: string;
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
        <span class="badge-tag">Areas of Expertise</span>
        <h1>Comprehensive Legal &amp; Corporate Solutions</h1>
        <p>Strategic, end-to-end guidance to protect your interests and drive corporate longevity.</p>
      </div>
    </div>

    <!-- FILTER BAR -->
    <section class="section">
      <div class="container">
        <div class="category-tabs">
          <button 
            [class.active]="selectedCategory() === 'ALL'" 
            (click)="setCategory('ALL')">
            All Practice Areas ({{ allServices.length }})
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
              <span class="category-pill">{{ s.category }}</span>
            </div>
            <h3>{{ s.title }}</h3>
            <p class="desc">{{ s.fullDesc }}</p>
            
            <div class="deliverables-block">
              <h5>Key Deliverables &amp; Advisory Scope:</h5>
              <ul>
                <li *ngFor="let d of s.deliverables">
                  <i class="fa-solid fa-circle-check"></i>
                  <span>{{ d }}</span>
                </li>
              </ul>
            </div>

            <div class="card-footer">
              <a routerLink="/contact" class="btn btn-outline">
                <span>Inquire About This Service</span>
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
          <i class="fa-solid fa-scale-balanced scale-icon"></i>
          <h2>Need Custom Advisory or Bespoke Retainers?</h2>
          <p>
            We structure specialized multi-practice retainers for startups, conglomerates, and family offices tailored to their ongoing transactional volume.
          </p>
          <a routerLink="/contact" class="btn btn-primary">Schedule a Confidential Discussion</a>
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
        max-width: 650px;
        margin: 0 auto;
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
      }

      .desc {
        font-size: 0.98rem;
        line-height: 1.65;
        margin-bottom: 1.5rem;
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

          li {
            font-size: 0.88rem;
            color: var(--text-main);
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
    }
  `]
})
export class ServicesComponent {
  selectedCategory = signal<string>('ALL');

  categories = [
    'Corporate & M&A',
    'Tax & Compliance',
    'Litigation & Arbitration',
    'Intellectual Property',
    'Real Estate'
  ];

  allServices: ServiceDetail[] = [
    {
      id: 'corporate-ma',
      category: 'Corporate & M&A',
      title: 'Mergers, Acquisitions & Corporate Structuring',
      icon: 'fa-solid fa-handshake-simple',
      shortDesc: 'Strategic M&A, cross-border deal structuring and joint ventures.',
      fullDesc: 'Comprehensive advisory for corporate transactions, restructuring, shareholder agreements, seed/series venture funding, and regulatory clearances under the Companies Act and SEBI.',
      deliverables: [
        'End-to-end legal due diligence reports',
        'Share Purchase & Shareholders Agreements (SPA/SHA)',
        'Cross-border investment structuring (FDI/ODI)',
        'Representation before ROC, RD, and NCLT approvals'
      ]
    },
    {
      id: 'commercial-contracts',
      category: 'Corporate & M&A',
      title: 'Commercial Contracts & Governance Advisory',
      icon: 'fa-solid fa-file-contract',
      shortDesc: 'Ironclad agreements protecting enterprise revenue streams and vendor relations.',
      fullDesc: 'Drafting, auditing, and negotiating domestic and international commercial agreements tailored to prevent ambiguities and mitigate counterparty liabilities.',
      deliverables: [
        'Vendor, Master Service Agreements (MSA) and SLAs',
        'Technology licensing and SaaS contracts',
        'Director fiduciary duty & board governance policies',
        'Confidentiality & Non-Compete covenants'
      ]
    },
    {
      id: 'taxation-fema',
      category: 'Tax & Compliance',
      title: 'Direct & Indirect Tax Representation',
      icon: 'fa-solid fa-file-invoice-dollar',
      shortDesc: 'Holistic corporate taxation, transfer pricing, and dispute advocacy.',
      fullDesc: 'Expert counsel on direct tax litigation, advance rulings, GST audits, transfer pricing documentation, and appellate advocacy before ITAT and High Courts.',
      deliverables: [
        'Corporate tax planning & restructuring analysis',
        'Transfer pricing benchmark studies',
        'GST assessments, notices & appellate representation',
        'Advance rulings and cross-border withholding strategies'
      ]
    },
    {
      id: 'fema-regulatory',
      category: 'Tax & Compliance',
      title: 'FEMA, Banking & Foreign Exchange Regulations',
      icon: 'fa-solid fa-building-columns',
      shortDesc: 'Inbound & outbound foreign exchange compliance and RBI approvals.',
      fullDesc: 'Guiding global enterprises and Indian corporations through RBI compliances, ECB borrowing guidelines, FDI reporting (FC-GPR, FC-TRS), and compounding procedures.',
      deliverables: [
        'RBI compounding applications & settlement',
        'External Commercial Borrowing (ECB) structuring',
        'FLA return reviews & overseas direct investment (ODI)',
        'Liaison and Branch Office setups in India'
      ]
    },
    {
      id: 'litigation-arbitration',
      category: 'Litigation & Arbitration',
      title: 'Commercial Litigation & Dispute Resolution',
      icon: 'fa-solid fa-gavel',
      shortDesc: 'Assertive advocacy across trial, appellate, and commercial benches.',
      fullDesc: 'High-stakes courtroom advocacy spanning original civil suits, recovery proceedings, injunctions, and writ petitions across the High Courts and Supreme Court.',
      deliverables: [
        'Filing and contestation of commercial summary suits',
        'Injunctions and urgent interim reliefs',
        'Writ petitions challenging arbitrary administrative actions',
        'Enforcement of foreign judgments and decrees'
      ]
    },
    {
      id: 'ibc-insolvency',
      category: 'Litigation & Arbitration',
      title: 'Insolvency & Bankruptcy (IBC) Practice',
      icon: 'fa-solid fa-scale-unbalanced-flip',
      shortDesc: 'Resolution process advisory for creditors, corporate debtors, and resolution applicants.',
      fullDesc: 'Advising financial and operational creditors, as well as distressed entities, in CIRP processes, Section 7/9/10 petitions before NCLT benches nationwide.',
      deliverables: [
        'Section 7 & Section 9 petition filings and defense',
        'Resolution Plan preparation & CoC representation',
        'Liquidation and voluntary winding-up compliance',
        'Advisory on avoidance and fraudulent transactions'
      ]
    },
    {
      id: 'intellectual-property',
      category: 'Intellectual Property',
      title: 'Intellectual Property Portfolio Protection',
      icon: 'fa-solid fa-shield-halved',
      shortDesc: 'Safeguarding patents, trademarks, brand identity, and proprietary assets.',
      fullDesc: 'End-to-end IP prosecution, trademark opposition hearings, copyright filings, trade secret agreements, and aggressive antipiracy enforcement.',
      deliverables: [
        'Comprehensive trademark clearance searches and filings',
        'Opposition and rectification proceedings',
        'Cease & desist notices and infringement litigation',
        'IP assignment and licensing agreements'
      ]
    },
    {
      id: 'real-estate-rera',
      category: 'Real Estate',
      title: 'Real Estate & Infrastructure Development',
      icon: 'fa-solid fa-city',
      shortDesc: 'Clear title searches, project registrations, and land acquisition legalities.',
      fullDesc: 'Advising developers, institutional funds, and landowners on real estate acquisitions, joint developments, RERA project compliance, and title certifications.',
      deliverables: [
        '30-year title verification and Search Reports',
        'Joint Development Agreements (JDA) & power of attorneys',
        'RERA dispute resolutions & project disclosures',
        'Commercial lease agreements & asset leasing'
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
