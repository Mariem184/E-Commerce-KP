import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stat-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stat-card.component.html',
  styleUrl: './stat-card.component.css'
})
export class StatCardComponent {
  @Input() title: string = '';
  @Input() value: string | number = '';
  @Input() icon: string = '📊';
  @Input() iconBg: string = '#f1f5f9';
  @Input() change?: number;
  @Input() isPositive: boolean = true;
  @Input() subtitle: string = '';
  @Input() theme: string = '';

  protected readonly Math = Math;
}
