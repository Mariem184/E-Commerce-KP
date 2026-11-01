import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  employees = [
    { name: 'أحمد الإداري', email: 'admin@store.com', role: 'مدير المتجر (Admin)', branch: 'الفرع الرئيسي', shift: 'كاملة', avatar: '👨‍💼' },
    { name: 'فهد المطيري', email: 'fahad@store.com', role: 'كاشير مبيعات (Cashier)', branch: 'الفرع الرئيسي', shift: 'صباحية', avatar: '🧑‍💻' },
    { name: 'خالد العمري', email: 'khaled@store.com', role: 'مسؤول مستودع (Inventory)', branch: 'المستودع الرئيسي', shift: 'مسائية', avatar: '📦' }
  ];
}
