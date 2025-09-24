// fichier : c:\Demos\nav-project\src\app\header\header.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  standalone: true,  // mark component as standalone
  imports: [CommonModule]  // add the CommonModule for *ngIf
})
export class HeaderComponent {
  isLoggedIn = false;

  toggleLogin(): void {
    this.isLoggedIn = !this.isLoggedIn;
  }
}