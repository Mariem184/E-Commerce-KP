import { Routes } from '@angular/router';
import { CustomerListComponent } from './pages/customer-list/customer-list.component';

export const CUSTOMERS_ROUTES: Routes = [
  {
    path: '',
    component: CustomerListComponent
  }
];
