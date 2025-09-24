// src/app/todo-list/todo-list.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from '../highlight.directive';
import { TaskPipe } from '../task.pipe';
import { TodoService, Task } from '../todo';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, FormsModule, HighlightDirective, TaskPipe],
  template: `
    <div>
      <h2>Liste des tâches</h2>
      <ul>
        <!-- utilisation directe du signal avec () -->
        <li *ngFor="let task of todoService.tasks()"
            appHighlight>
          {{ task.title | taskPipe }}
          <button (click)="editTask(task)">Modifier</button>
          <button (click)="deleteTask(task.id)">Supprimer</button>
        </li>
      </ul>

      <input type="text"
             [(ngModel)]="newTaskTitle"
             placeholder="Nouvelle tâche">
      <button (click)="addTask()">Ajouter une tâche</button>

      <div *ngIf="taskToEdit">
        <h3>Modifier la tâche</h3>
        <input type="text" [(ngModel)]="taskToEdit!.title">
        <button (click)="updateTask()">Mettre à jour</button>
        <button (click)="cancelEdit()">Annuler</button>
      </div>
    </div>
  `
})
export class TodoList {
  newTaskTitle: string = '';
  taskToEdit: Task | null = null;

  // ✅ On garde le service en public pour utiliser tasks() dans le template
  constructor(public todoService: TodoService) {}

  addTask(): void {
    if (this.newTaskTitle.trim()) {
      this.todoService.addTask(this.newTaskTitle);
      this.newTaskTitle = '';
    }
  }

  deleteTask(id: number): void {
    this.todoService.deleteTask(id);
  }

  editTask(task: Task): void {
    this.taskToEdit = { ...task };
  }

  updateTask(): void {
    if (this.taskToEdit) {
      this.todoService.updateTask(this.taskToEdit);
      this.taskToEdit = null;
    }
  }

  cancelEdit(): void {
    this.taskToEdit = null;
  }
}
