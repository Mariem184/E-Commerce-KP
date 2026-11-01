import { Injectable, signal, computed } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Current user signal state
  private currentUserSignal = signal<User | null>({
    id: 'u-101',
    name: 'أحمد الإداري',
    email: 'admin@store.com',
    role: 'ADMIN',
    storeName: 'متجر التميز الحديث',
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&auto=format&fit=crop&q=80'
  });

  readonly currentUser = this.currentUserSignal.asReadonly();
  readonly isAuthenticated = computed(() => !!this.currentUserSignal());

  constructor(private router: Router) {}

  login(credentials: { email: string; password: string }): boolean {
    if (credentials.email && credentials.password) {
      this.currentUserSignal.set({
        id: 'u-101',
        name: 'أحمد الإداري',
        email: credentials.email,
        role: 'ADMIN',
        storeName: 'متجر التميز الحديث',
        avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&auto=format&fit=crop&q=80'
      });
      return true;
    }
    return false;
  }

  logout(): void {
    this.currentUserSignal.set(null);
    this.router.navigate(['/auth/login']);
  }

  getToken(): string | null {
    return this.isAuthenticated() ? 'mock-jwt-store-token-xyz' : null;
  }
}
