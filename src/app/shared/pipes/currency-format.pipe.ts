import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormat',
  standalone: true
})
export class CurrencyFormatPipe implements PipeTransform {
  transform(value: number | string | null | undefined, currency: string = 'ر.س', decimals: number = 2): string {
    if (value === null || value === undefined || isNaN(Number(value))) {
      return `0.00 ${currency}`;
    }

    const num = Number(value);
    const formatted = num.toLocaleString('en-US', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    });

    return `${formatted} ${currency}`;
  }
}
