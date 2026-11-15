import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactComponent, FormsModule],
      providers: [provideRouter([])]
    }).compileComponents();
  });

  it('should create the contact component', () => {
    const fixture = TestBed.createComponent(ContactComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
    expect(component.submitted()).toBe(false);
  });

  it('should render contact details and address', () => {
    const fixture = TestBed.createComponent(ContactComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('15/Patrakar Sadan');
    expect(compiled.textContent).toContain('8879 146 502');
    expect(compiled.textContent).toContain('revaassociates22@gmail.com');
  });

  it('should handle form submission and success state in DOM', () => {
    const fixture = TestBed.createComponent(ContactComponent);
    fixture.detectChanges();
    const component = fixture.componentInstance;

    component.formData.fullName = 'Ramesh Shah';
    component.formData.phone = '9876543210';
    component.formData.email = 'ramesh@example.com';
    component.formData.clientType = 'Trader / Shopkeeper / Retailer';
    component.formData.serviceInterest = 'Tax Filing Services';
    component.formData.message = 'Need GST and ITR assistance';

    component.onSubmit();
    fixture.detectChanges();

    expect(component.submitted()).toBe(true);
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.alert-success')?.textContent).toContain('Thank you, Ramesh Shah!');

    const resetBtn = compiled.querySelector('.reset-btn') as HTMLButtonElement;
    expect(resetBtn).toBeTruthy();
    resetBtn.click();
    fixture.detectChanges();

    expect(component.submitted()).toBe(false);
    expect(compiled.querySelector('form')).toBeTruthy();
  });

  it('should bind inputs, select options, and submit directly via form event', async () => {
    const fixture = TestBed.createComponent(ContactComponent);
    fixture.detectChanges();
    await fixture.whenStable();

    const nameInput = fixture.nativeElement.querySelector('#fullName') as HTMLInputElement;
    const phoneInput = fixture.nativeElement.querySelector('#phone') as HTMLInputElement;
    const emailInput = fixture.nativeElement.querySelector('#email') as HTMLInputElement;
    const clientSelect = fixture.nativeElement.querySelector('#clientType') as HTMLSelectElement;
    const serviceSelect = fixture.nativeElement.querySelector('#serviceInterest') as HTMLSelectElement;
    const msgInput = fixture.nativeElement.querySelector('#message') as HTMLTextAreaElement;
    const form = fixture.nativeElement.querySelector('form') as HTMLFormElement;

    expect(nameInput).toBeTruthy();
    expect(phoneInput).toBeTruthy();
    expect(emailInput).toBeTruthy();
    expect(clientSelect).toBeTruthy();
    expect(serviceSelect).toBeTruthy();
    expect(msgInput).toBeTruthy();

    nameInput.value = 'Sunita Patel';
    nameInput.dispatchEvent(new Event('input'));

    phoneInput.value = '9876543210';
    phoneInput.dispatchEvent(new Event('input'));

    emailInput.value = 'sunita@example.com';
    emailInput.dispatchEvent(new Event('input'));

    clientSelect.value = 'Salaried Professional / NRI';
    clientSelect.dispatchEvent(new Event('change'));

    serviceSelect.value = 'Accounting Services';
    serviceSelect.dispatchEvent(new Event('change'));

    msgInput.value = 'Need accounting consultation';
    msgInput.dispatchEvent(new Event('input'));

    fixture.detectChanges();
    await fixture.whenStable();

    expect(fixture.componentInstance.formData.fullName).toBe('Sunita Patel');
    expect(fixture.componentInstance.formData.phone).toBe('9876543210');
    expect(fixture.componentInstance.formData.email).toBe('sunita@example.com');
    expect(fixture.componentInstance.formData.clientType).toBe('Salaried Professional / NRI');
    expect(fixture.componentInstance.formData.serviceInterest).toBe('Accounting Services');
    expect(fixture.componentInstance.formData.message).toBe('Need accounting consultation');

    form.dispatchEvent(new Event('submit'));
    fixture.detectChanges();
    expect(fixture.componentInstance.submitted()).toBe(true);
  });
});
