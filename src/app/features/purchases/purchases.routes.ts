import { Routes } from '@angular/router';
import { PurchasesListComponent } from './pages/purchases-list/purchases-list.component';

export const PURCHASES_ROUTES: Routes = [
  {
    path: '',
    component: PurchasesListComponent
  }
];
