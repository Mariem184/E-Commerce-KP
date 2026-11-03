import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface RecentInvoice {
  id: string;
  customer: string;
  total: string;
  statusText: string;
  statusClass: string;
}

interface LowStockItem {
  name: string;
  sku: string;
  qty: number;
}

@Component({
  selector: 'app-dashboard-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard-home.component.html',
  styleUrl: './dashboard-home.component.css'
})
export class DashboardHomeComponent {
  timeFilters = ['اليوم', 'الأسبوع', 'الشهر'];
  selectedFilter = signal<string>('اليوم');

  recentInvoices: RecentInvoice[] = [
    { id: 'INV-2041', customer: 'اسم العميل', total: '430 ج.م', statusText: 'مرتجعة', statusClass: 'returned' },
    { id: 'INV-2041', customer: 'اسم العميل', total: '430 ج.م', statusText: 'مدفوعة', statusClass: 'paid' },
    { id: 'INV-2041', customer: 'اسم العميل', total: '430 ج.م', statusText: 'مؤجلة', statusClass: 'postponed' },
    { id: 'INV-2041', customer: 'اسم العميل', total: '430 ج.م', statusText: 'مرتجعة', statusClass: 'returned' },
    { id: 'INV-2041', customer: 'اسم العميل', total: '430 ج.م', statusText: 'مرتجعة', statusClass: 'returned' }
  ];

  lowStockList: LowStockItem[] = [
    { name: 'قميص قطني ازرق - M', sku: 'SKU-12401', qty: 3 },
    { name: 'قميص قطني ازرق - M', sku: 'SKU-12401', qty: 3 },
    { name: 'قميص قطني ازرق - M', sku: 'SKU-12401', qty: 3 },
    { name: 'قميص قطني ازرق - M', sku: 'SKU-12401', qty: 3 },
    { name: 'قميص قطني ازرق - M', sku: 'SKU-12401', qty: 3 }
  ];

  resendTaxInvoices(): void {
    alert('تم إعادة إرسال جميع الإيصالات الضريبية بنجاح إلى منظومة الفاتورة الإلكترونية.');
  }
}
