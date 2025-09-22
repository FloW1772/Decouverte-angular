import { Routes } from '@angular/router';
import {PersonListComponent} from './pages/person-list/person-list.component';
import {ArticleListComponent} from './pages/article-list/article-list.component';

export const routes: Routes = [
  {path: 'persons', component: PersonListComponent},
  {path: 'articles', component: ArticleListComponent},

];
