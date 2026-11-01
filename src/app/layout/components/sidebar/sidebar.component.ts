import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

interface NavItem {
  labelAr: string;
  labelEn: string;
  path: string;
  icon: string;
  badge?: string;
  badgeColor?: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  authService = inject(AuthService);

  readonly navItems: NavItem[] = [
    { labelAr: 'الرئيسية', labelEn: 'Dashboard', path: '/dashboard', icon: '📊' },
    { labelAr: 'المنتجات', labelEn: 'Products', path: '/products', icon: '📦' },
    { labelAr: 'المخزون', labelEn: 'Inventory', path: '/inventory', icon: '🏬', badge: '5 تنبيهات', badgeColor: '#eab308' },
    { labelAr: 'المبيعات', labelEn: 'Sales', path: '/sales', icon: '📈' },
    { labelAr: 'نقطة البيع (POS)', labelEn: 'Point of Sale', path: '/pos', icon: '💻', badge: 'سريع', badgeColor: '#10b981' },
    { labelAr: 'المشتريات', labelEn: 'Purchases', path: '/purchases', icon: '🛒' },
    { labelAr: 'العملاء', labelEn: 'Customers', path: '/customers', icon: '👥' },
    { labelAr: 'الموظفون', labelEn: 'Employees', path: '/employees', icon: '🧑‍💼' },
    { labelAr: 'المالية', labelEn: 'Finance', path: '/finance', icon: '💰' },
    { labelAr: 'التقارير', labelEn: 'Reports', path: '/reports', icon: '📑' },
    { labelAr: 'الإعدادات', labelEn: 'Settings', path: '/settings', icon: '⚙️' },
  ];

  logout(): void {
    this.authService.logout();
  }
}
