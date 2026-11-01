import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CurrencyFormatPipe } from '../../../../shared/pipes/currency-format.pipe';

interface ProductItem {
  id: string;
  name: string;
  category: string;
  barcode: string;
  costPrice: number;
  salePrice: number;
  stock: number;
  status: 'IN_STOCK' | 'LOW_STOCK' | 'OUT_OF_STOCK';
}

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterModule, CurrencyFormatPipe],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products = signal<ProductItem[]>([
    { id: '1', name: 'سماعة رأس لاسلكية Sony WH-1000XM5', barcode: '62810023412', category: 'إلكترونيات', costPrice: 950, salePrice: 1299, stock: 14, status: 'IN_STOCK' },
    { id: '2', name: 'شاحن جداري Anker 65W GaN', barcode: '62810023413', category: 'شواحن', costPrice: 90, salePrice: 149, stock: 4, status: 'LOW_STOCK' },
    { id: '3', name: 'كابل شحن نايلون Type-C إلى Lightning', barcode: '62810023414', category: 'كابلات', costPrice: 20, salePrice: 45, stock: 0, status: 'OUT_OF_STOCK' },
    { id: '4', name: 'قاعدة شحن لاسلكية 3 في 1', barcode: '62810023415', category: 'إكسسوارات', costPrice: 110, salePrice: 189, stock: 22, status: 'IN_STOCK' }
  ]);
}
