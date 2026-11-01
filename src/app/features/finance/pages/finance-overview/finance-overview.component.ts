import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CurrencyFormatPipe } from '../../../../shared/pipes/currency-format.pipe';

@Component({
  selector: 'app-finance-overview',
  standalone: true,
  imports: [CommonModule, RouterModule, CurrencyFormatPipe],
  templateUrl: './finance-overview.component.html',
  styleUrl: './finance-overview.component.css'
})
export class FinanceOverviewComponent {
  transactions = [
    { id: '401', type: 'قبض', description: 'إيراد مبيعات وردية الصباح', account: 'خزينة الفرع الرئيسي', amount: 8450, date: '2026-11-01 14:00' },
    { id: '400', type: 'صرف', description: 'شراء أدوات نظافة ومطبوعات للمتجر', account: 'العهدة النثرية', amount: 220, date: '2026-11-01 11:30' },
    { id: '399', type: 'صرف', description: 'دفعة سداد فاتورة المورد #PO-8820', account: 'حساب مصرف الراجحي', amount: 6000, date: '2026-10-31 16:45' }
  ];
}
