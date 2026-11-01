import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-reports-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './reports-dashboard.component.html',
  styleUrl: './reports-dashboard.component.css'
})
export class ReportsDashboardComponent {
  reportCards = [
    { title: 'تقرير إقرار ضريبة القيمة المضافة', description: 'ملخص شامل لضرائب المبيعات والمشتريات والضريبة المستحقة لهيئة الزكاة والضريبة والجمارك', icon: '🧾', tag: 'ضريبة الزكاة (ZATCA)' },
    { title: 'تقرير مبيعات الكاشير والورديات', description: 'تفصيل مبيعات كل موظف وكاشير والفرق بين المبيعات النقدية والشبكة', icon: '🧑‍💻', tag: 'الورديات اليومية' },
    { title: 'تقرير الأرباح والخسائر الشامل', description: 'حساب دقيق لصافي الدخل بعد خصم تكلفة البضاعة المباعة ومصروفات التشغيل', icon: '📊', tag: 'المركز المالي' },
    { title: 'تقرير حركة وركود الأصناف', description: 'معرفة الأصناف الأكثر مبيعاً والأصناف الراكدة في المستودعات', icon: '📦', tag: 'كفاءة المخزون' }
  ];
}
