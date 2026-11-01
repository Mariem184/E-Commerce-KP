import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CurrencyFormatPipe } from '../../../../shared/pipes/currency-format.pipe';

@Component({
  selector: 'app-purchases-list',
  standalone: true,
  imports: [CommonModule, RouterModule, CurrencyFormatPipe],
  templateUrl: './purchases-list.component.html',
  styleUrl: './purchases-list.component.css'
})
export class PurchasesListComponent {
  purchases = [
    { orderNumber: '8821', supplier: 'شركة التقنية المتقدمة', date: '2026-10-28', total: 45000, paid: 45000, remaining: 0, status: 'تم الاستلام بالكامل' },
    { orderNumber: '8820', supplier: 'مؤسسة باصبرين للإلكترونيات', date: '2026-10-22', total: 12400, paid: 6000, remaining: 6400, status: 'تم الاستلام جزئياً' },
    { orderNumber: '8819', supplier: 'مورد كابلات الرياض الدولي', date: '2026-10-15', total: 3200, paid: 3200, remaining: 0, status: 'تم الاستلام بالكامل' }
  ];
}
