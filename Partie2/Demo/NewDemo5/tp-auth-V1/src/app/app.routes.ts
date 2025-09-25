import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Register } from './pages/register/register';
import { Login } from './pages/login/login';
import { Profil } from './pages/profil/profil';
import { Contact } from './pages/contact/contact';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home},
    { path: 'contact', component: Contact},
    { path: 'register', component: Register},
    { path: 'login', component: Login},
    { path: 'profil', component: Profil},
    { path: '**', component: NotFound }
];
