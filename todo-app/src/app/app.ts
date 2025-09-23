import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoList } from './todo-list/todo-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TodoList],
  template: `
    <h1>Bienvenue dans l'application Todo!</h1>
    <p>Aujourd'hui nous sommes le {{ today | date:'fullDate' }}</p>
    <app-todo-list></app-todo-list>
  `
})
export class App {
  today: Date = new Date();
}
