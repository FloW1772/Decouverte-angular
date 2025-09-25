import { Injectable } from '@angular/core';

export interface User {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _currentUser: User | null = null;

  constructor() {
    if (this.isBrowser()) {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        this._currentUser = JSON.parse(storedUser);
      }
    }
  }

  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }

  login(email: string, password: string): boolean {
    if (this.isBrowser()) {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        const user: User = JSON.parse(storedUser);
        if (user.email === email && user.password === password) {
          this._currentUser = user;
          return true;
        }
      }
    }
    return false;
  }

  register(email: string, password: string): boolean {
    const user: User = { email, password };
    if (this.isBrowser()) {
      localStorage.setItem('user', JSON.stringify(user));
    }
    this._currentUser = user;
    return true;
  }

  logout(): void {
    this._currentUser = null;
    if (this.isBrowser()) {
      localStorage.removeItem('user');
    }
  }

  currentUser(): User | null {
    return this._currentUser;
  }

  isLoggedIn(): boolean {
    return this._currentUser !== null;
  }
}
