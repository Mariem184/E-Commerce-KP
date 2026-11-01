import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  // 1. مسارات المصادقة وتسجيل الدخول (بدون القائمة الجانبية)
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./features/auth/auth.routes').then(m => m.AUTH_ROUTES)
      }
    ]
  },

  // 2. مسارات النظام الرئيسية (مع القائمة الجانبية والشريط العلوي ومحمية بـ AuthGuard)
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./features/dashboard/dashboard.routes').then(m => m.DASHBOARD_ROUTES)
      },
      {
        path: 'products',
        loadChildren: () => import('./features/products/products.routes').then(m => m.PRODUCTS_ROUTES)
      },
      {
        path: 'inventory',
        loadChildren: () => import('./features/inventory/inventory.routes').then(m => m.INVENTORY_ROUTES)
      },
      {
        path: 'sales',
        loadChildren: () => import('./features/sales/sales.routes').then(m => m.SALES_ROUTES)
      },
      {
        path: 'pos',
        loadChildren: () => import('./features/pos/pos.routes').then(m => m.POS_ROUTES)
      },
      {
        path: 'purchases',
        loadChildren: () => import('./features/purchases/purchases.routes').then(m => m.PURCHASES_ROUTES)
      },
      {
        path: 'customers',
        loadChildren: () => import('./features/customers/customers.routes').then(m => m.CUSTOMERS_ROUTES)
      },
      {
        path: 'employees',
        loadChildren: () => import('./features/employees/employees.routes').then(m => m.EMPLOYEES_ROUTES)
      },
      {
        path: 'finance',
        loadChildren: () => import('./features/finance/finance.routes').then(m => m.FINANCE_ROUTES)
      },
      {
        path: 'reports',
        loadChildren: () => import('./features/reports/reports.routes').then(m => m.REPORTS_ROUTES)
      },
      {
        path: 'settings',
        loadChildren: () => import('./features/settings/settings.routes').then(m => m.SETTINGS_ROUTES)
      }
    ]
  },

  // 3. إعادة التوجيه الافتراضية
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];
