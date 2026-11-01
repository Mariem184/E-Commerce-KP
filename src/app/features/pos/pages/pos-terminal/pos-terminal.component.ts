import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CurrencyFormatPipe } from '../../../../shared/pipes/currency-format.pipe';

interface PosProduct {
  id: string;
  name: string;
  price: number;
  category: string;
  icon: string;
}

interface CartItem {
  product: PosProduct;
  quantity: number;
}

@Component({
  selector: 'app-pos-terminal',
  standalone: true,
  imports: [CommonModule, FormsModule, CurrencyFormatPipe],
  templateUrl: './pos-terminal.component.html',
  styleUrl: './pos-terminal.component.css'
})
export class PosTerminalComponent {
  searchQuery = '';
  selectedCategory = signal<string>('الكل');

  categories = ['الكل', 'هواتف', 'سماعات', 'شواحن', 'كابلات', 'إكسسوارات'];

  allProducts: PosProduct[] = [
    { id: '1', name: 'سماعة Sony XM5', price: 1299, category: 'سماعات', icon: '🎧' },
    { id: '2', name: 'شاحن أنكر 65W GaN', price: 149, category: 'شواحن', icon: '🔌' },
    { id: '3', name: 'كابل Type-C فائق', price: 45, category: 'كابلات', icon: '🔋' },
    { id: '4', name: 'كفر حماية مغناطيسي', price: 65, category: 'إكسسوارات', icon: '📱' },
    { id: '5', name: 'ستاند مكتب للأجهزة', price: 85, category: 'إكسسوارات', icon: '📐' },
    { id: '6', name: 'سماعات AirPods Pro 2', price: 899, category: 'سماعات', icon: '🎵' },
  ];

  cart = signal<CartItem[]>([
    { product: { id: '2', name: 'شاحن أنكر 65W GaN', price: 149, category: 'شواحن', icon: '🔌' }, quantity: 1 }
  ]);

  filteredProducts = computed(() => {
    const cat = this.selectedCategory();
    if (cat === 'الكل') return this.allProducts;
    return this.allProducts.filter(p => p.category === cat);
  });

  subtotal = computed(() => {
    const totalWithTax = this.cart().reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
    return totalWithTax / 1.15;
  });

  tax = computed(() => {
    const totalWithTax = this.cart().reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
    return totalWithTax - this.subtotal();
  });

  total = computed(() => {
    return this.cart().reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  });

  addToCart(product: PosProduct): void {
    this.cart.update(items => {
      const existing = items.find(i => i.product.id === product.id);
      if (existing) {
        return items.map(i => i.product.id === product.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...items, { product, quantity: 1 }];
    });
  }

  changeQty(item: CartItem, delta: number): void {
    this.cart.update(items => {
      return items
        .map(i => i.product.id === item.product.id ? { ...i, quantity: i.quantity + delta } : i)
        .filter(i => i.quantity > 0);
    });
  }

  removeItem(item: CartItem): void {
    this.cart.update(items => items.filter(i => i.product.id !== item.product.id));
  }

  clearCart(): void {
    this.cart.set([]);
  }

  checkout(method: string): void {
    if (this.cart().length === 0) return;
    alert(`تم إتمام الفاتورة بنجاح عبر (${method}) بمبلغ ${this.total().toFixed(2)} ر.س`);
    this.clearCart();
  }
}
