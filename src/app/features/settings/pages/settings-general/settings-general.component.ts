import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings-general',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './settings-general.component.html',
  styleUrl: './settings-general.component.css'
})
export class SettingsGeneralComponent {
  storeName = 'سوق بلس للمنتجات الإلكترونية';
  taxNumber = '310123456700003';
  currency = 'SAR';
  taxRate = 15;
  storeAddress = 'المملكة العربية السعودية - الرياض - طريق الملك فهد';
  footerNote = 'البضاعة المباعة ترد خلال 3 أيام وتستبدل خلال 7 أيام بشرط سلامة العبوة الأصلية.';
}
