import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { NotFound } from './pages/not-found/not-found';
import { Products } from './pages/products/products';
import { Product } from './pages/product/product';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: Home},
    {path: 'about', component: About},
    {path: 'contact', component: Contact},
    {path: 'products', component: Products},
    {path: 'products/:id', component: Product},
    {path: '**', component: NotFound }
];
