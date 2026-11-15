import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <!-- PAGE HERO -->
    <div class="page-hero">
      <div class="container">
        <span class="badge-tag">Get in Touch</span>
        <h1>Contact Reva Associates</h1>
        <p>Book a free consultation or connect directly with Pooja Patel for personalized financial &amp; taxation advice.</p>
      </div>
    </div>

    <section class="section">
      <div class="container contact-layout">
        <!-- CONTACT INFO COLUMN -->
        <div class="info-column">
          <span class="badge-tag">Reach Us Directly</span>
          <h2>Your Trusted Financial Partner in Mumbai</h2>
          <p>
            Simplifying Accounting, Taxation, Loans &amp; Investments for Individuals and Businesses across India.
          </p>

          <div class="info-cards">
            <div class="info-card">
              <div class="icon-circle"><i class="fa-solid fa-location-dot"></i></div>
              <div>
                <h4>Office Address</h4>
                <p><strong>Reva Associates</strong></p>
                <p>15/Patrakar Sadan, Near Rationing Office, Rajendra Nagar, Borivali East, Mumbai - 400066</p>
              </div>
            </div>

            <div class="info-card">
              <div class="icon-circle"><i class="fa-solid fa-user-tie"></i></div>
              <div>
                <h4>Contact Person</h4>
                <p><strong>Pooja Patel</strong> (Founder &amp; Financial Consultant)</p>
              </div>
            </div>

            <div class="info-card">
              <div class="icon-circle"><i class="fa-solid fa-phone"></i></div>
              <div>
                <h4>Phone / WhatsApp</h4>
                <p><a href="tel:8879146502" class="contact-link"><strong>8879 146 502</strong></a></p>
                <p><a href="https://wa.me/918879146502" target="_blank" class="contact-link whatsapp-link"><i class="fa-brands fa-whatsapp"></i> Chat on WhatsApp</a></p>
              </div>
            </div>

            <div class="info-card">
              <div class="icon-circle"><i class="fa-solid fa-envelope"></i></div>
              <div>
                <h4>Email Address</h4>
                <p><a href="mailto:revaassociates22@gmail.com" class="contact-link">revaassociates22&#64;gmail.com</a></p>
              </div>
            </div>

            <div class="info-card">
              <div class="icon-circle"><i class="fa-solid fa-clock"></i></div>
              <div>
                <h4>Office Timings</h4>
                <p>Mon - Sat, 10:00 AM - 7:00 PM</p>
                <p class="text-muted-small">Sunday: Closed</p>
              </div>
            </div>
          </div>

          <div class="direct-actions">
            <a href="https://wa.me/918879146502" target="_blank" class="btn btn-whatsapp">
              <i class="fa-brands fa-whatsapp"></i>
              <span>WhatsApp Us</span>
            </a>
            <a href="https://maps.google.com/?q=15+Patrakar+Sadan+Rajendra+Nagar+Borivali+East+Mumbai+400066" target="_blank" class="btn btn-maps">
              <i class="fa-solid fa-map-location-dot"></i>
              <span>Get Directions on Google Maps</span>
            </a>
          </div>
        </div>

        <!-- FORM COLUMN -->
        <div class="form-column">
          <div class="form-wrapper">
            <h3>Book Free Consultation</h3>
            <p class="form-sub">Leave your details below and Pooja Patel will connect with you shortly.</p>

            <div *ngIf="submitted()" class="alert-success">
              <i class="fa-solid fa-circle-check"></i>
              <div>
                <strong>Thank you, {{ formData.fullName }}!</strong>
                <p>Your request regarding <em>"{{ formData.serviceInterest }}"</em> has been received. We will contact you at {{ formData.phone }} or {{ formData.email }} during business hours.</p>
              </div>
              <button class="btn btn-outline reset-btn" (click)="resetForm()">Send Another Inquiry</button>
            </div>

            <form *ngIf="!submitted()" (ngSubmit)="onSubmit()" #contactForm="ngForm">
              <div class="form-row">
                <div class="form-group">
                  <label for="fullName">Full Name *</label>
                  <input 
                    type="text" 
                    id="fullName" 
                    name="fullName" 
                    [(ngModel)]="formData.fullName" 
                    required 
                    placeholder="e.g. Ramesh Shah" />
                </div>
                <div class="form-group">
                  <label for="phone">Mobile / WhatsApp Number *</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    [(ngModel)]="formData.phone" 
                    required 
                    placeholder="e.g. 98765 43210" />
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="email">Email Address *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    [(ngModel)]="formData.email" 
                    required 
                    placeholder="e.g. name@example.com" />
                </div>
                <div class="form-group">
                  <label for="clientType">I Am A *</label>
                  <select 
                    id="clientType" 
                    name="clientType" 
                    [(ngModel)]="formData.clientType" 
                    required>
                    <option value="" disabled selected>Select category</option>
                    <option value="Salaried Professional / NRI">Salaried Professional / NRI</option>
                    <option value="Trader / Shopkeeper / Retailer">Trader / Shopkeeper / Retailer</option>
                    <option value="Startup / MSME / Pvt Ltd">Startup / MSME / Pvt Ltd</option>
                    <option value="Doctor / CA / Lawyer / Freelancer">Doctor / CA / Lawyer / Freelancer</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div class="form-group">
                <label for="serviceInterest">Service Required *</label>
                <select 
                  id="serviceInterest" 
                  name="serviceInterest" 
                  [(ngModel)]="formData.serviceInterest" 
                  required>
                  <option value="" disabled selected>Select service</option>
                  <option value="Accounting Services">Accounting &amp; Bookkeeping</option>
                  <option value="Tax Filing Services">Tax Filing (ITR, GST, TDS, Notice Handling)</option>
                  <option value="Loan Services">Loan Advisory (Home, Business, MSME, LAP, CC/OD)</option>
                  <option value="Insurance Services">Insurance (Life, Health, Motor, Business)</option>
                  <option value="Investment Services">Investment Planning (Mutual Funds, SIP, PPF, NPS)</option>
                  <option value="Portfolio Management">Portfolio Management (HNI Wealth)</option>
                  <option value="Other Financial Inquiry">General Financial Consultation</option>
                </select>
              </div>

              <div class="form-group">
                <label for="message">Your Query / Message *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="4" 
                  [(ngModel)]="formData.message" 
                  required 
                  placeholder="Tell us briefly about your accounting, taxation, or financial query..."></textarea>
              </div>

              <button 
                type="submit" 
                class="btn btn-primary submit-btn" 
                [disabled]="!contactForm.form.valid">
                <i class="fa-solid fa-paper-plane"></i>
                <span>Submit Free Consultation Request</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- GOOGLE MAPS SECTION -->
    <section class="map-section">
      <div class="container">
        <div class="map-card">
          <div class="map-info">
            <i class="fa-solid fa-map-pin"></i>
            <div>
              <h3>Visit Us in Borivali East</h3>
              <p>15/Patrakar Sadan, Near Rationing Office, Rajendra Nagar, Borivali East, Mumbai - 400066</p>
              <p class="timing-badge"><i class="fa-solid fa-clock"></i> Mon-Sat, 10 AM - 7 PM</p>
            </div>
          </div>
          <div class="map-actions">
            <a href="https://maps.google.com/?q=15+Patrakar+Sadan+Rajendra+Nagar+Borivali+East+Mumbai+400066" target="_blank" class="btn btn-outline">
              <i class="fa-solid fa-location-arrow"></i>
              <span>Get Directions</span>
            </a>
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
        max-width: 650px;
        margin: 0 auto;
      }
    }

    .contact-layout {
      display: grid;
      grid-template-columns: 1fr 1.25fr;
      gap: 4rem;
      align-items: start;
    }

    @media (max-width: 950px) {
      .contact-layout {
        grid-template-columns: 1fr;
        gap: 3rem;
      }
    }

    .info-column {
      h2 {
        font-size: 2.1rem;
        margin: 0.8rem 0 1rem 0;
        color: var(--dark);
      }

      p {
        margin-bottom: 2rem;
        font-size: 1.02rem;
        color: var(--text-dark);
      }

      .info-cards {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        margin-bottom: 2.5rem;

        .info-card {
          display: flex;
          align-items: flex-start;
          gap: 1.25rem;

          .icon-circle {
            width: 48px;
            height: 48px;
            min-width: 48px;
            border-radius: var(--radius-sm);
            background: var(--secondary-soft);
            color: var(--secondary);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
          }

          h4 {
            font-size: 1rem;
            margin-bottom: 0.25rem;
            color: var(--dark);
          }

          p {
            font-size: 0.92rem;
            margin: 0;
            line-height: 1.5;
            color: var(--text-muted);
          }

          .contact-link {
            color: var(--primary);
            font-weight: 600;

            &:hover {
              color: var(--secondary);
            }
          }

          .whatsapp-link {
            display: inline-flex;
            align-items: center;
            gap: 0.4rem;
            color: #16a34a;
            margin-top: 0.25rem;
          }

          .text-muted-small {
            font-size: 0.82rem;
            color: #94a3b8;
          }
        }
      }

      .direct-actions {
        display: flex;
        flex-direction: column;
        gap: 0.85rem;

        .btn-whatsapp {
          background-color: #25d366;
          color: #ffffff;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          padding: 0.85rem 1.5rem;
          border-radius: var(--radius-sm);
          font-weight: 700;

          &:hover {
            background-color: #20ba5a;
          }
        }

        .btn-maps {
          background-color: var(--primary);
          color: #ffffff;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          padding: 0.85rem 1.5rem;
          border-radius: var(--radius-sm);
          font-weight: 600;

          &:hover {
            background-color: var(--dark);
          }
        }
      }
    }

    .form-wrapper {
      background: #ffffff;
      padding: 3rem;
      border-radius: var(--radius-md);
      box-shadow: var(--shadow-md);
      border: 1px solid var(--border-color);

      h3 {
        font-size: 1.8rem;
        margin-bottom: 0.5rem;
        color: var(--dark);
      }

      .form-sub {
        font-size: 0.92rem;
        margin-bottom: 2rem;
        color: var(--text-muted);
      }

      .form-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.25rem;
      }

      @media (max-width: 600px) {
        .form-row {
          grid-template-columns: 1fr;
        }
      }

      .form-group {
        margin-bottom: 1.4rem;

        label {
          display: block;
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--primary);
          margin-bottom: 0.4rem;
        }

        input, select, textarea {
          width: 100%;
          padding: 0.8rem 1rem;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-color);
          font-family: var(--font-body);
          font-size: 0.95rem;
          color: var(--text-main);
          outline: none;
          transition: var(--transition);

          &:focus {
            border-color: var(--secondary);
            box-shadow: 0 0 0 3px rgba(197, 160, 89, 0.15);
          }
        }
      }

      .submit-btn {
        width: 100%;
        padding: 0.95rem;
        font-size: 1rem;

        &:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
      }

      .alert-success {
        background: #f0fdf4;
        border: 1px solid #bbf7d0;
        padding: 2rem;
        border-radius: var(--radius-sm);
        display: flex;
        flex-direction: column;
        gap: 1.25rem;

        i {
          font-size: 2.5rem;
          color: #16a34a;
        }

        strong {
          font-size: 1.2rem;
          color: #166534;
        }

        p {
          font-size: 0.95rem;
          color: #15803d;
          margin: 0.5rem 0 0 0;
        }

        .reset-btn {
          align-self: flex-start;
          margin-top: 0.5rem;
        }
      }
    }

    .map-section {
      padding-bottom: 5rem;

      .map-card {
        background: var(--bg-light);
        border: 1px solid var(--border-color);
        border-radius: var(--radius-md);
        padding: 2.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 2rem;
        flex-wrap: wrap;

        .map-info {
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;

          i {
            font-size: 2.5rem;
            color: var(--secondary);
            margin-top: 0.2rem;
          }

          h3 {
            font-size: 1.35rem;
            margin-bottom: 0.35rem;
            color: var(--dark);
          }

          p {
            font-size: 0.95rem;
            color: var(--text-muted);
            margin: 0;
          }

          .timing-badge {
            display: inline-flex;
            align-items: center;
            gap: 0.4rem;
            margin-top: 0.5rem;
            font-size: 0.85rem;
            font-weight: 600;
            color: var(--primary);

            i {
              font-size: 0.9rem;
              color: var(--secondary);
            }
          }
        }
      }
    }
  `]
})
export class ContactComponent {
  formData = {
    fullName: '',
    phone: '',
    email: '',
    clientType: '',
    serviceInterest: '',
    message: ''
  };

  submitted = signal(false);

  onSubmit() {
    this.submitted.set(true);
  }

  resetForm() {
    this.formData = {
      fullName: '',
      phone: '',
      email: '',
      clientType: '',
      serviceInterest: '',
      message: ''
    };
    this.submitted.set(false);
  }
}
