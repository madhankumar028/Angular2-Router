import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from './contact/contact-list/contact.list.component';
import { ContactDetailsComponent } from './contact/contact-details/contact.details.component';

export const routes: Routes = [
  { path: 'app-contact-list', component: ContactListComponent },
  { path: 'app-contact-details', component: ContactDetailsComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
