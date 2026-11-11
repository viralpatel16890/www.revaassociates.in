import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home | Reva & Associates' },
  { path: 'about', component: AboutComponent, title: 'About Us | Reva & Associates' },
  { path: 'services', component: ServicesComponent, title: 'Practice Areas & Services | Reva & Associates' },
  { path: 'testimonials', component: TestimonialsComponent, title: 'Client Testimonials | Reva & Associates' },
  { path: 'contact', component: ContactComponent, title: 'Contact Us | Reva & Associates' },
  { path: '**', redirectTo: '' }
];
