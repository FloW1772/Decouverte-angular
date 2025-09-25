import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private usersKey = 'users';
  private currentKey = 'currentUser';

  // Signaux pour les utilisateurs et l'utilisateur courant
  private users = signal<{ email: string, password: string }[]>([]);
  private current = signal<{ email: string } | null>(null);

  constructor() {
    // On charge les données uniquement si on est dans le navigateur
    if (typeof window !== 'undefined') {
      this.users.set(this.loadUsers());
      this.current.set(this.loadCurrent());
    }
  }

  // Charge les utilisateurs depuis le localStorage
  private loadUsers() {
    if (typeof window !== 'undefined') {
      return JSON.parse(localStorage.getItem(this.usersKey) || '[]');
    }
    return [];
  }

  // Charge l'utilisateur courant depuis le sessionStorage
  private loadCurrent() {
    if (typeof window !== 'undefined') {
      return JSON.parse(sessionStorage.getItem(this.currentKey) || 'null');
    }
    return null;
  }

  // Inscription
  register(email: string, password: string): boolean {
    if (this.users().find(u => u.email === email)) return false;

    const updated = [...this.users(), { email, password }];
    this.users.set(updated);

    if (typeof window !== 'undefined') {
      localStorage.setItem(this.usersKey, JSON.stringify(updated));
    }

    return true;
  }

  // Connexion
  login(email: string, password: string): boolean {
    const found = this.users().find(u => u.email === email && u.password === password);
    if (!found) return false;

    this.current.set({ email });

    if (typeof window !== 'undefined') {
      sessionStorage.setItem(this.currentKey, JSON.stringify({ email }));
    }

    return true;
  }

  // Déconnexion
  logout() {
    this.current.set(null);

    if (typeof window !== 'undefined') {
      sessionStorage.removeItem(this.currentKey);
    }
  }

  // Récupérer l'utilisateur courant
  currentUser() {
    return this.current();
  }
}
