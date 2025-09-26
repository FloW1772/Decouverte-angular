import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth'; // <-- chemin corrigé

@Component({
  selector: 'app-register',
  templateUrl: './register.html',
  standalone: true,             // si tu veux un composant autonome
  imports: [CommonModule, ReactiveFormsModule]
})
export class RegisterComponent {
  form = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });

  error = '';

  constructor(private auth: AuthService, private router: Router) {}

  submit(): void {
    this.error = '';

    if (this.form.invalid) return;

    try {
      this.auth.register(this.form.value as any);
      this.router.navigate(['/']);
    } catch (e: any) {
      this.error = e.message || 'Erreur';
    }
  }
}
