import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from './contact/contact-list/contact.list.component';
import { ContactDetailsComponent } from './contact/contact-details/contact.details.component';
import { PageNotFoundComponent } from './app.pagenotfound.component';

export const routes: Routes = [
  {
    path: 'app-contact-list',
    component: ContactListComponent
  },
  {
    path: 'app-contact-details',
    component: ContactDetailsComponent
  },
  {
    path: '',
    redirectTo: '/app-contact-list',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
