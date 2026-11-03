import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface ProductItem {
  id: string;
  name: string;
  variantsCount: number;
  category: string;
  stockQty: number;
  stockText: string;
  stockClass: string;
  isActive: boolean;
}

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: ProductItem[] = [
    { id: '1', name: 'قميص قطني ازرق', variantsCount: 5, category: 'ملابس رجالي', stockQty: 0, stockText: 'نفذ', stockClass: 'out', isActive: true },
    { id: '2', name: 'قميص قطني ازرق', variantsCount: 5, category: 'ملابس رجالي', stockQty: 6, stockText: 'منخفض', stockClass: 'low', isActive: true },
    { id: '3', name: 'قميص قطني ازرق', variantsCount: 5, category: 'ملابس رجالي', stockQty: 10, stockText: 'متوفر', stockClass: 'available', isActive: true },
    { id: '4', name: 'قميص قطني ازرق', variantsCount: 5, category: 'ملابس رجالي', stockQty: 6, stockText: 'نفذ', stockClass: 'out', isActive: true },
    { id: '5', name: 'قميص قطني ازرق', variantsCount: 5, category: 'ملابس رجالي', stockQty: 6, stockText: 'متوفر', stockClass: 'available', isActive: true },
    { id: '6', name: 'قميص قطني ازرق', variantsCount: 5, category: 'ملابس رجالي', stockQty: 6, stockText: 'متوفر', stockClass: 'available', isActive: true },
    { id: '7', name: 'قميص قطني ازرق', variantsCount: 5, category: 'ملابس رجالي', stockQty: 6, stockText: 'منخفض', stockClass: 'low', isActive: true },
    { id: '8', name: 'قميص قطني ازرق', variantsCount: 5, category: 'ملابس رجالي', stockQty: 6, stockText: 'منخفض', stockClass: 'low', isActive: true },
    { id: '9', name: 'قميص قطني ازرق', variantsCount: 5, category: 'ملابس رجالي', stockQty: 6, stockText: 'نفذ', stockClass: 'out', isActive: false },
    { id: '10', name: 'قميص قطني ازرق', variantsCount: 5, category: 'ملابس رجالي', stockQty: 6, stockText: 'نفذ', stockClass: 'out', isActive: true }
  ];
}
