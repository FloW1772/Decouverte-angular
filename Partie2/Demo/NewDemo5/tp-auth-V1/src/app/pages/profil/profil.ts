import { Component, computed } from '@angular/core';
import { Auth } from '../../services/auth';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-profil',
  imports: [RouterLink],
  templateUrl: './profil.html',
  styleUrl: './profil.css'
})
export class Profil {
  currentUser = computed(() => this.authService.currentUser());
  userEmail = computed(() => this.currentUser()?.email || null);

  constructor(
    private readonly authService: Auth,
    private readonly router: Router
  ) {
    if (!this.authService.isLoggedIn) {
      this.router.navigate(['/login']);
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/home']);
  }
}
