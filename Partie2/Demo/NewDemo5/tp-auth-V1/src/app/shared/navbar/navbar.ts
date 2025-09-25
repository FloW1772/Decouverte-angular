import { Component, computed, input } from '@angular/core';
import { Auth } from '../../services/auth';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  userEmail = input<string | null>(null);

  isLoggedIn = computed(() => this.userEmail() !== null);
  currentUserEmail = computed(() => this.userEmail());

  constructor(private readonly authService: Auth, private readonly router: Router) { }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
