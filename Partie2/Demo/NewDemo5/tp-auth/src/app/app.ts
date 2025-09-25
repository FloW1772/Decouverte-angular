import { Component, signal, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './shared/navbar/navbar';
import { Auth } from './services/auth';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tp-auth');

  currentUserEmail = computed(() => {
    const user = this.authService.currentUser();
    return user ? user.email : null;
  });

  constructor(private readonly authService: Auth) {}
}
