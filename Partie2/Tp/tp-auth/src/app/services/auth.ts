import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private usersKey = 'users';
  private currentKey = 'currentUser';
  private users = signal<{ email: string, password: string }[]>(this.loadUsers());
  private current = signal<{ email: string } | null>(this.loadCurrent());

  private loadUsers() {
    return JSON.parse(localStorage.getItem(this.usersKey) || '[]');
  }

  private loadCurrent() {
    return JSON.parse(sessionStorage.getItem(this.currentKey) || 'null');
  }

  register(email: string, password: string): boolean {
    if (this.users().find(u => u.email === email)) return false;
    const updated = [...this.users(), { email, password }];
    this.users.set(updated);
    localStorage.setItem(this.usersKey, JSON.stringify(updated));
    return true;
  }

  login(email: string, password: string): boolean {
    const found = this.users().find(u => u.email === email && u.password === password);
    if (!found) return false;
    this.current.set({ email });
    sessionStorage.setItem(this.currentKey, JSON.stringify({ email }));
    return true;
  }

  logout() {
    this.current.set(null);
    sessionStorage.removeItem(this.currentKey);
  }

  currentUser() {
    return this.current();
  }
}
