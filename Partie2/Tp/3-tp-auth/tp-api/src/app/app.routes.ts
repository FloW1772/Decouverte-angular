import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Contact } from './pages/contact/contact';
import { Profile } from './pages/profile/profile';
import { Auth } from './pages/auth/auth';
import { NotFound } from './pages/not-found/not-found';
import { AuthGuard } from './guards/auth-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'contact', component: Contact },
  {
    path: 'profile',
    component: Profile,
    canActivate: [AuthGuard]   // 🔒 protégé
  },
  { path: 'auth', component: Auth },
  { path: '**', component: NotFound }
];
