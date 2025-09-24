import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.html',
  styles: [`
    nav {
      display: flex;
      gap: 1rem;
      background: #333;
      padding: 1rem;
    }
    a, span, button {
      color: white;
      text-decoration: none;
      font-weight: bold;
      cursor: pointer;
    }
    button {
      background: transparent;
      border: none;
    }
  `]
})
export class Navbar {
  constructor(public auth: AuthService) {}

  logout() {
    this.auth.logout();
  }
}
