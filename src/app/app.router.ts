import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from './contact/contact.list.component';
import { ContactDetailsComponent } from './contact/contact.details.component';

export const routes: Routes = [
  { path: 'contact-list', component: ContactListComponent },
  { path: 'contact-details', component: ContactDetailsComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
