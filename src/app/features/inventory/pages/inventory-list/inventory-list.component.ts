import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-inventory-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './inventory-list.component.html',
  styleUrl: './inventory-list.component.css'
})
export class InventoryListComponent {
  inventoryItems = [
    { warehouse: 'المستودع الرئيسي - الرياض', productName: 'شاشة حماية زجاجية آيفون 15', quantity: 24, reserved: 4, minLimit: 10 },
    { warehouse: 'المستودع الرئيسي - الرياض', productName: 'سماعة بلوتوث لاسلكية Pro', quantity: 5, reserved: 2, minLimit: 5 },
    { warehouse: 'مستودع فرع جدة', productName: 'شاحن جداري Anker 65W GaN', quantity: 18, reserved: 0, minLimit: 5 },
    { warehouse: 'المستودع الرئيسي - الرياض', productName: 'باور بانك Anker 20,000mAh', quantity: 42, reserved: 6, minLimit: 8 }
  ];
}
