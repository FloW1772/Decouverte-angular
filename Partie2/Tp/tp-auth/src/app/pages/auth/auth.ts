import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './auth.html'
})
export class Auth {
  regEmail = '';
  regPassword = '';
  logEmail = '';
  logPassword = '';
  regError = false;
  logError = false;

  constructor(public auth: AuthService) {}

  register() {
    const success = this.auth.register(this.regEmail, this.regPassword);
    this.regError = !success;
  }

  login() {
    const success = this.auth.login(this.logEmail, this.logPassword);
    this.logError = !success;
  }
}
