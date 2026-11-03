import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface FormStep {
  number: number;
  title: string;
}

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {
  currentStep = 1;

  steps: FormStep[] = [
    { number: 1, title: 'المعلومات الأساسية' },
    { number: 2, title: 'الخصائص' },
    { number: 3, title: 'الخيارات والمتغيرات' },
    { number: 4, title: 'الإضافات' },
    { number: 5, title: 'الوحدات' },
    { number: 6, title: 'التسعير' },
    { number: 7, title: 'المخزون' },
    { number: 8, title: 'الصور' }
  ];

  productName = 'قميص قطني';
  category = 'ملابس رجالي';
  sku = 'SKU - 23131';
  barcode = '12234534634';
  trackInventory = true;
  isActive = true;

  goNext(): void {
    if (this.currentStep < 8) {
      this.currentStep++;
    } else {
      alert('تم حفظ المنتج بنجاح!');
    }
  }
}
