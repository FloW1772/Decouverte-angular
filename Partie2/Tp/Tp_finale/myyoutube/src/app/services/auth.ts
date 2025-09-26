import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { BehaviorSubject } from 'rxjs';


const USERS_KEY = 'myyoutube_users';
const SESSION_KEY = 'myyoutube_session';


@Injectable({ providedIn: 'root' })
export class AuthService {
private _currentUser$ = new BehaviorSubject<User | null>(this.getSession());
currentUser$ = this._currentUser$.asObservable();


constructor() {}


private allUsers(): User[] {
return JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
}


private saveAll(users: User[]) {
localStorage.setItem(USERS_KEY, JSON.stringify(users));
}


register(user: Omit<User, 'id'>): User {
const users = this.allUsers();
if (users.find(u => u.username === user.username || u.email === user.email)) {
throw new Error('Nom d\'utilisateur ou email déjà utilisé');
}
const newUser: User = { id: crypto.randomUUID(), ...user } as User;
users.push(newUser);
this.saveAll(users);
this.setSession(newUser);
return newUser;
}


login(username: string, password: string): User {
const users = this.allUsers();
const found = users.find(u => u.username === username && u.password === password);
if (!found) throw new Error('Identifiants invalides');
this.setSession(found);
return found;
}


logout() {
localStorage.removeItem(SESSION_KEY);
this._currentUser$.next(null);
}


private setSession(user: User) {
localStorage.setItem(SESSION_KEY, JSON.stringify(user));
this._currentUser$.next(user);
}


private getSession(): User | null {
return JSON.parse(localStorage.getItem(SESSION_KEY) || 'null');
}
}