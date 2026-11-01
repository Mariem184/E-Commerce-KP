import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CurrencyFormatPipe } from '../../../../shared/pipes/currency-format.pipe';

@Component({
  selector: 'app-sales-list',
  standalone: true,
  imports: [CommonModule, RouterModule, CurrencyFormatPipe],
  templateUrl: './sales-list.component.html',
  styleUrl: './sales-list.component.css'
})
export class SalesListComponent {
  sales = [
    { invoiceNumber: '2026-0041', date: '2026-11-01 19:42', customer: 'عبدالله السعيد', cashier: 'فهد المطيري', subtotal: 300.00, tax: 45.00, total: 345.00 },
    { invoiceNumber: '2026-0040', date: '2026-11-01 18:15', customer: 'عميل نقدي', cashier: 'أحمد الإداري', subtotal: 80.00, tax: 12.00, total: 92.00 },
    { invoiceNumber: '2026-0039', date: '2026-11-01 16:30', customer: 'مؤسسة الشروق', cashier: 'أحمد الإداري', subtotal: 1250.00, tax: 187.50, total: 1437.50 },
    { invoiceNumber: '2026-0038', date: '2026-11-01 14:10', customer: 'سارة خالد', cashier: 'فهد المطيري', subtotal: 420.00, tax: 63.00, total: 483.00 }
  ];
}
