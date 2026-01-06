import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service.ts.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin(): void {
    this.authService.login({ email: this.email, password: this.password }).subscribe(
      (response) => {
        this.authService.saveToken(response.token);
        this.router.navigate(['/']);
      },
      (error) => {
        console.error('Login falhou', error);
      }
    );
  }
}

