import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CurrencyFormatPipe } from '../../../../shared/pipes/currency-format.pipe';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [CommonModule, RouterModule, CurrencyFormatPipe],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent {
  customers = [
    { name: 'عبدالله السعيد', phone: '+966 50 123 4567', city: 'الرياض', totalOrders: 28, balance: 0, points: 450 },
    { name: 'مؤسسة الأفق للتجارة', phone: '+966 55 987 6543', city: 'جدة', totalOrders: 14, balance: 1850, points: 1200 },
    { name: 'سارة المنصور', phone: '+966 54 321 0987', city: 'الدمام', totalOrders: 7, balance: 0, points: 95 }
  ];
}
