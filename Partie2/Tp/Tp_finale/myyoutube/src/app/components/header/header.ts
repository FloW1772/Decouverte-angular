import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';
import { Observable } from 'rxjs';
import { User } from '../../models/user';

@Component({
  selector: 'app-header',
  standalone: true,        // Déclare ce composant comme standalone
  imports: [CommonModule],  // Pour *ngIf et ng-template
  templateUrl: './header.html',
  styleUrls: ['./header.css']  // Assure-toi que ce fichier existe
})
export class HeaderComponent {
  user$!: Observable<User | null>; // Initialisation dans le constructeur

  constructor(public authService: AuthService, private router: Router) {
    this.user$ = this.authService.currentUser$; // authService injecté maintenant
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  goHome() {
    this.router.navigate(['/']); // Méthode pour naviguer vers l'accueil
  }
}
