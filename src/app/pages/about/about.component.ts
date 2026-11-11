import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- PAGE HEADER -->
    <div class="page-hero">
      <div class="container">
        <span class="badge-tag">Who We Are</span>
        <h1>About Reva &amp; Associates</h1>
        <p>A benchmark of integrity, legal excellence, and modern strategic counsel since 2004.</p>
      </div>
    </div>

    <!-- MISSION & VISION -->
    <section class="section">
      <div class="container">
        <div class="mission-grid">
          <div class="mission-card">
            <div class="icon-circle"><i class="fa-solid fa-compass"></i></div>
            <h3>Our Mission</h3>
            <p>
              To deliver uncompromising legal, commercial, and regulatory counsel that protects enterprise value, resolves intricate disputes swiftly, and empowers our clients to operate with total confidence in dynamic markets.
            </p>
          </div>
          <div class="mission-card">
            <div class="icon-circle"><i class="fa-solid fa-eye"></i></div>
            <h3>Our Vision</h3>
            <p>
              To be recognized as India’s most trusted multidisciplinary advisory firm, combining deep jurisprudence with visionary business acumen to establish new standards for client success and ethical legal practice.
            </p>
          </div>
          <div class="mission-card">
            <div class="icon-circle"><i class="fa-solid fa-gem"></i></div>
            <h3>Core Values</h3>
            <p>
              Absolute confidentiality, transparent pricing, intellectual honesty, relentless diligence, and unshakeable loyalty to the legal rights and commercial objectives of every entity we represent.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- DETAILED STORY SECTION -->
    <section class="section story-section bg-light">
      <div class="container story-grid">
        <div class="story-content">
          <span class="badge-tag">Our Legacy</span>
          <h2>Two Decades of Championing Client Interests</h2>
          <p class="lead-text">
            Founded with a conviction that client success demands more than conventional legal opinions, Reva &amp; Associates has grown into a premier full-service practice.
          </p>
          <p>
            Whether advising on multinational corporate mergers, resolving contested board disputes, structuring private equity investments, or safeguarding intellectual property, our partners bring direct, hands-on attention to every matter.
          </p>
          <p>
            We believe that modern enterprise operates at unprecedented speed. Therefore, our legal advisory is designed to be proactive, practical, and aligned with your operational roadmap.
          </p>

          <div class="milestones">
            <div class="milestone-box">
              <span class="number">2004</span>
              <span class="desc">Founded in Mumbai</span>
            </div>
            <div class="milestone-box">
              <span class="number">1,500+</span>
              <span class="desc">Retained Clients</span>
            </div>
            <div class="milestone-box">
              <span class="number">₹12,000+ Cr</span>
              <span class="desc">Deals Advised</span>
            </div>
          </div>
        </div>

        <div class="story-image">
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80" alt="Law firm office building" class="firm-img" />
        </div>
      </div>
    </section>

    <!-- LEADERSHIP TEAM -->
    <section class="section team-section">
      <div class="container">
        <div class="section-header">
          <span class="badge-tag">Our Leadership</span>
          <h2>Meet Our Senior Partners</h2>
          <p>Guided by distinguished legal minds, former judicial counsels, and veteran corporate strategists.</p>
        </div>

        <div class="team-grid">
          <div class="team-card" *ngFor="let member of team">
            <div class="avatar-wrap">
              <img [src]="member.image" [alt]="member.name" />
            </div>
            <div class="team-info">
              <h3>{{ member.name }}</h3>
              <span class="role">{{ member.designation }}</span>
              <p class="qual">{{ member.qualification }}</p>
              <p class="bio">{{ member.bio }}</p>
              <div class="team-social">
                <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                <a href="#"><i class="fa-solid fa-envelope"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- WHY CHOOSE US -->
    <section class="section bg-light">
      <div class="container">
        <div class="section-header">
          <span class="badge-tag">The Reva Edge</span>
          <h2>Why Industry Leaders Choose Reva &amp; Associates</h2>
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
            font-size: 1.8rem;
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

    .firm-img {
      width: 100%;
      height: 480px;
      object-fit: cover;
      border-radius: var(--radius-md);
      box-shadow: var(--shadow-lg);
    }

    .team-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2.5rem;
    }

    @media (max-width: 950px) {
      .team-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 650px) {
      .team-grid {
        grid-template-columns: 1fr;
      }
    }

    .team-card {
      background: #ffffff;
      border-radius: var(--radius-md);
      overflow: hidden;
      border: 1px solid var(--border-color);
      box-shadow: var(--shadow-sm);
      transition: var(--transition);

      &:hover {
        transform: translateY(-6px);
        box-shadow: var(--shadow-md);
      }

      .avatar-wrap {
        height: 280px;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        &:hover img {
          transform: scale(1.04);
        }
      }

      .team-info {
        padding: 1.75rem;

        h3 {
          font-size: 1.25rem;
          margin-bottom: 0.2rem;
        }

        .role {
          display: block;
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--secondary);
          margin-bottom: 0.15rem;
        }

        .qual {
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-bottom: 0.85rem;
        }

        .bio {
          font-size: 0.9rem;
          margin-bottom: 1.25rem;
          line-height: 1.55;
        }

        .team-social {
          display: flex;
          gap: 0.75rem;

          a {
            width: 34px;
            height: 34px;
            border-radius: 50%;
            background: var(--bg-light);
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--primary);
            font-size: 0.85rem;

            &:hover {
              background: var(--secondary);
              color: #ffffff;
            }
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
      }
    }
  `]
})
export class AboutComponent {
  team = [
    {
      name: 'Adv. Rajeshwar Sharma',
      designation: 'Managing Partner',
      qualification: 'B.A. LL.B (Hons.), LL.M (Commercial Law)',
      bio: 'Over 24 years of experience appearing before the Supreme Court of India, High Courts, and NCLAT with a specialization in corporate restructurings.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Meenakshi Iyer',
      designation: 'Senior Partner & Head of Tax',
      qualification: 'FCA, LLB, DISA (ICAI)',
      bio: 'Leading direct tax disputes, transfer pricing audits, international taxation structures, and FEMA compliance strategies for cross-border operations.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Kavita Sengupta',
      designation: 'Partner – Dispute Resolution',
      qualification: 'LL.B, MCIArb (UK)',
      bio: 'Specialist in commercial arbitration, shareholder contract litigations, debt resolution, and domestic institutional arbitrations.',
      image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=600&q=80'
    }
  ];

  edges = [
    {
      icon: 'fa-solid fa-award',
      title: 'Peerless Legal Caliber',
      desc: 'Our partners average 18+ years of courtroom experience and boardroom counsel across tier-one sectors.'
    },
    {
      icon: 'fa-solid fa-clock-rotate-left',
      title: 'Rapid & Predictable Turnaround',
      desc: 'Dedicated matter managers guarantee timely brief preparation and constant status transparency.'
    },
    {
      icon: 'fa-solid fa-shield-virus',
      title: 'Confidentiality & Compliance',
      desc: 'Enterprise-grade NDAs, ISO-certified data security, and unwavering adherence to bar standards.'
    },
    {
      icon: 'fa-solid fa-sack-dollar',
      title: 'Clear Value Proposition',
      desc: 'Transparent pricing with no unexpected billable surprises, offering both retainer and milestone structures.'
    }
  ];
}
