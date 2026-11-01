export type UserRole = 'ADMIN' | 'CASHIER' | 'MANAGER' | 'ACCOUNTANT';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  storeName?: string;
  avatarUrl?: string;
}

export interface AuthResponse {
  token: string;
  refreshToken: string;
  user: User;
}
