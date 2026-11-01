import { Injectable, signal } from '@angular/core';

export interface ToastMessage {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private toastsSignal = signal<ToastMessage[]>([]);
  readonly toasts = this.toastsSignal.asReadonly();

  show(message: string, type: 'success' | 'error' | 'warning' | 'info' = 'info'): void {
    const id = Math.random().toString(36).substring(2, 9);
    const toast: ToastMessage = { id, type, message };
    this.toastsSignal.update(toasts => [...toasts, toast]);

    setTimeout(() => {
      this.remove(id);
    }, 4000);
  }

  success(message: string): void {
    this.show(message, 'success');
  }

  error(message: string): void {
    this.show(message, 'error');
  }

  remove(id: string): void {
    this.toastsSignal.update(toasts => toasts.filter(t => t.id !== id));
  }
}
