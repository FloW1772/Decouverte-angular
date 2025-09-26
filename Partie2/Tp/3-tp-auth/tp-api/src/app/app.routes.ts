import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Contact } from './pages/contact/contact';
import { Profile } from './pages/profile/profile';
import { Auth } from './pages/auth/auth';
import { NotFound } from './pages/not-found/not-found';
import { AuthGuard } from './guards/auth-guard';
import { SuperheroListComponent } from './superhero-list/superhero-list';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'contact', component: Contact },
  {
    path: 'profile',
    component: Profile,
    canActivate: [AuthGuard]
  },
  { path: 'auth', component: Auth },

  // nouvelle route super-héros
  { path: 'heroes', component: SuperheroListComponent },

  { path: '**', component: NotFound }
];
