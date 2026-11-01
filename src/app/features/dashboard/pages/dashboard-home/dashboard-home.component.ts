import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StatCardComponent } from '../../../../shared/components/stat-card/stat-card.component';
import { CurrencyFormatPipe } from '../../../../shared/pipes/currency-format.pipe';

@Component({
  selector: 'app-dashboard-home',
  standalone: true,
  imports: [CommonModule, RouterModule, StatCardComponent, CurrencyFormatPipe],
  templateUrl: './dashboard-home.component.html',
  styleUrl: './dashboard-home.component.css'
})
export class DashboardHomeComponent {
  recentOrders = [
    { id: '10928', customer: 'عبدالله السعيد', paymentMethod: 'شبكة (مدى)', total: 345.50 },
    { id: '10927', customer: 'مؤسسة الأفق للتجارة', paymentMethod: 'تحويل بنكي', total: 4200.00 },
    { id: '10926', customer: 'عميل نقدي', paymentMethod: 'نقدي (Cash)', total: 85.00 },
    { id: '10925', customer: 'سارة المنصور', paymentMethod: 'Apple Pay', total: 640.25 }
  ];

  lowStockItems = [
    { name: 'شاشة حماية زجاجية آيفون 15', sku: 'PRD-GLS-15', remaining: 3 },
    { name: 'سماعة بلوتوث لاسلكية Pro', sku: 'PRD-EAR-PR', remaining: 2 },
    { name: 'شاحن سريع Type-C بقدرة 65W', sku: 'PRD-CHG-65', remaining: 4 },
    { name: 'كابل بيانات فائق السرعة 2M', sku: 'PRD-CBL-2M', remaining: 5 }
  ];
}
