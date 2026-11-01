import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  email = 'admin@store.com';
  password = 'password123';
  rememberMe = true;

  onSubmit(): void {
    this.authService.login({ email: this.email, password: this.password });
    this.router.navigate(['/dashboard']);
  }
}
