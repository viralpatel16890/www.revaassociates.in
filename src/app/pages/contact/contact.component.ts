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
        <span class="badge-tag">Connect With Us</span>
        <h1>Get in Touch with Our Legal Team</h1>
        <p>Schedule a confidential consultation or reach out to our practice chairs.</p>
      </div>
    </div>

    <section class="section">
      <div class="container contact-layout">
        <!-- CONTACT INFO COLUMN -->
        <div class="info-column">
          <span class="badge-tag">Reach Us Directly</span>
          <h2>We Are Here to Assist Your Business</h2>
          <p>
            Whether you require an immediate legal assessment, ongoing retainer representation, or assistance with transactional structuring, our partners are ready to respond promptly.
          </p>

          <div class="info-cards">
            <div class="info-card">
              <div class="icon-circle"><i class="fa-solid fa-location-dot"></i></div>
              <div>
                <h4>Principal Office</h4>
                <p>402, Prestige Tower, Bandra Kurla Complex (BKC), Mumbai, Maharashtra 400051, India</p>
              </div>
            </div>

            <div class="info-card">
              <div class="icon-circle"><i class="fa-solid fa-phone"></i></div>
              <div>
                <h4>Direct Phone Lines</h4>
                <p>+91 (022) 2890-1234 (Office Board)</p>
                <p>+91 98765 43210 (Direct Counsel Cell)</p>
              </div>
            </div>

            <div class="info-card">
              <div class="icon-circle"><i class="fa-solid fa-envelope"></i></div>
              <div>
                <h4>Email Inquiries</h4>
                <p>General: contact&#64;revaassociates.in</p>
                <p>Consultations: counsel&#64;revaassociates.in</p>
              </div>
            </div>

            <div class="info-card">
              <div class="icon-circle"><i class="fa-solid fa-clock"></i></div>
              <div>
                <h4>Working Hours</h4>
                <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM (By Prior Appointment)</p>
              </div>
            </div>
          </div>

          <div class="confidentiality-notice">
            <i class="fa-solid fa-lock"></i>
            <div>
              <strong>Confidentiality Assurance</strong>
              <p>All information transmitted via this contact portal is protected by attorney-client privilege and strict non-disclosure obligations.</p>
            </div>
          </div>
        </div>

        <!-- FORM COLUMN -->
        <div class="form-column">
          <div class="form-wrapper">
            <h3>Schedule a Consultation</h3>
            <p class="form-sub">Fill out the details below and an associate partner will connect within 4 business hours.</p>

            <div *ngIf="submitted()" class="alert-success">
              <i class="fa-solid fa-circle-check"></i>
              <div>
                <strong>Thank you, {{ formData.fullName }}!</strong>
                <p>Your inquiry regarding <em>"{{ formData.practiceArea }}"</em> has been received. Our team will review the brief and contact you at {{ formData.email }} or {{ formData.phone }}.</p>
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
                    placeholder="Adv. / Mr. / Ms. John Doe" />
                </div>
                <div class="form-group">
                  <label for="companyName">Company / Organization</label>
                  <input 
                    type="text" 
                    id="companyName" 
                    name="companyName" 
                    [(ngModel)]="formData.companyName" 
                    placeholder="Acme Corp Pvt. Ltd." />
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="email">Corporate Email *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    [(ngModel)]="formData.email" 
                    required 
                    placeholder="john@example.com" />
                </div>
                <div class="form-group">
                  <label for="phone">Contact Number *</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    [(ngModel)]="formData.phone" 
                    required 
                    placeholder="+91 98765 43210" />
                </div>
              </div>

              <div class="form-group">
                <label for="practiceArea">Practice Area of Interest *</label>
                <select 
                  id="practiceArea" 
                  name="practiceArea" 
                  [(ngModel)]="formData.practiceArea" 
                  required>
                  <option value="" disabled selected>Select a relevant practice area</option>
                  <option value="Corporate & M&A">Corporate &amp; M&amp;A Advisory</option>
                  <option value="Commercial Dispute & Litigation">Commercial Dispute &amp; Litigation</option>
                  <option value="Direct / Indirect Taxation">Direct / Indirect Taxation &amp; GST</option>
                  <option value="Insolvency & Bankruptcy (NCLT)">Insolvency &amp; Bankruptcy (NCLT)</option>
                  <option value="Intellectual Property Rights">Intellectual Property &amp; Trademarks</option>
                  <option value="Real Estate & RERA">Real Estate &amp; RERA Advisory</option>
                  <option value="Other Commercial Matter">Other Commercial / Regulatory Matter</option>
                </select>
              </div>

              <div class="form-group">
                <label for="message">Summary of the Matter *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  [(ngModel)]="formData.message" 
                  required 
                  placeholder="Please provide a brief background of the situation or advisory required..."></textarea>
              </div>

              <div class="form-check">
                <input 
                  type="checkbox" 
                  id="agreement" 
                  name="agreement" 
                  [(ngModel)]="formData.agreement" 
                  required />
                <label for="agreement">
                  I agree that this submission does not automatically establish an advocate-client relationship until mutually agreed upon in writing.
                </label>
              </div>

              <button 
                type="submit" 
                class="btn btn-primary submit-btn" 
                [disabled]="!contactForm.form.valid">
                <i class="fa-solid fa-paper-plane"></i>
                <span>Submit Confidential Inquiry</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- MAP PLACEHOLDER -->
    <section class="map-section">
      <div class="container">
        <div class="map-placeholder">
          <i class="fa-solid fa-map-location-dot"></i>
          <h3>Located at the Heart of Mumbai's Financial District</h3>
          <p>Bandra Kurla Complex (BKC) • 10 minutes from Western Express Highway • Valet parking available on-site.</p>
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
        font-size: 2.2rem;
        margin: 0.8rem 0 1rem 0;
      }

      p {
        margin-bottom: 2rem;
        font-size: 1.02rem;
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
            font-size: 1.05rem;
            margin-bottom: 0.25rem;
          }

          p {
            font-size: 0.92rem;
            margin: 0;
            line-height: 1.5;
          }
        }
      }

      .confidentiality-notice {
        display: flex;
        align-items: flex-start;
        gap: 1rem;
        padding: 1.25rem;
        background: var(--bg-light);
        border-radius: var(--radius-sm);
        border-left: 3px solid var(--secondary);

        i {
          color: var(--secondary);
          font-size: 1.3rem;
          margin-top: 0.2rem;
        }

        strong {
          display: block;
          color: var(--primary);
          font-size: 0.92rem;
          margin-bottom: 0.25rem;
        }

        p {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin: 0;
          line-height: 1.45;
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
      }

      .form-sub {
        font-size: 0.92rem;
        margin-bottom: 2rem;
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

      .form-check {
        display: flex;
        align-items: flex-start;
        gap: 0.75rem;
        margin-bottom: 1.75rem;

        input[type="checkbox"] {
          margin-top: 0.3rem;
          cursor: pointer;
        }

        label {
          font-size: 0.82rem;
          color: var(--text-muted);
          line-height: 1.4;
          cursor: pointer;
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

      .map-placeholder {
        background: var(--bg-light);
        border: 2px dashed var(--border-color);
        border-radius: var(--radius-md);
        padding: 3.5rem 1.5rem;
        text-align: center;

        i {
          font-size: 3rem;
          color: var(--secondary);
          margin-bottom: 1rem;
        }

        h3 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }

        p {
          font-size: 0.95rem;
          margin: 0;
        }
      }
    }
  `]
})
export class ContactComponent {
  formData = {
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    practiceArea: '',
    message: '',
    agreement: false
  };

  submitted = signal(false);

  onSubmit() {
    this.submitted.set(true);
  }

  resetForm() {
    this.formData = {
      fullName: '',
      companyName: '',
      email: '',
      phone: '',
      practiceArea: '',
      message: '',
      agreement: false
    };
    this.submitted.set(false);
  }
}
