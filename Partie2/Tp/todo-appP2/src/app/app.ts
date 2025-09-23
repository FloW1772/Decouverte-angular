import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { TodoList } from './todo-list/todo-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, DatePipe, TodoList],
  template: `
    <h1>Bienvenue dans l'application Todo!</h1>
    <p>Aujourd'hui nous sommes le {{ today | date:'fullDate' }}</p>
    <app-todo-list></app-todo-list>
  `
})
export class AppComponent {
  today: Date = new Date();
}
