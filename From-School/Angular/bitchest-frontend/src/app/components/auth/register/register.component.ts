import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  username = '';
  password = '';
  email = '';
  errorMessage = '';
  authService: any;
  successMessage!: string;
  router: any;

  constructor(private userService: UserService) {}

  register() {
    if (this.password.length < 8) {
      this.errorMessage = 'Password must be at least 8 characters long.';
      return;
    }
    if (!/\d/.test(this.password)) {
      this.errorMessage = 'Password must contain at least one number.';
      return;
    }

    this.authService.register(this.username, this.password, this.email).subscribe(
      () => {
        this.successMessage = 'Registration successful! Check your email.';
        setTimeout(() => this.router.navigate(['/login']), 2000);
      },
      (error: { error: string; }) => {
        this.errorMessage = error.error;
      }
    );
  }

}
