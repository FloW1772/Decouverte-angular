import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from '../highlight.directive';
import { TaskPipe } from '../task.pipe';

interface Task {
  id: number;
  title: string;
}

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, FormsModule, HighlightDirective, TaskPipe],
  template: `
    <div>
      <h2>Liste des tâches</h2>
      <ul>
        <li *ngFor="let task of tasks" appHighlight>
          {{ task.title | taskPipe }}
          <button (click)="editTask(task)">Modifier</button>
          <button (click)="deleteTask(task.id)">Supprimer</button>
        </li>
      </ul>
      <input type="text" [(ngModel)]="newTaskTitle" placeholder="Nouvelle tâche">
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
  tasks: Task[] = [
    { id: 1, title: 'exemple de tâche' }
  ];
  newTaskTitle: string = '';
  taskToEdit: Task | null = null;

  addTask() {
    if (this.newTaskTitle.trim()) {
      const newTask: Task = { id: Date.now(), title: this.newTaskTitle };
      this.tasks.push(newTask);
      this.newTaskTitle = '';
    }
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  editTask(task: Task) {
    this.taskToEdit = { ...task };
  }

  updateTask() {
    if (this.taskToEdit) {
      const index = this.tasks.findIndex(task => task.id === this.taskToEdit!.id);
      if (index > -1) {
        this.tasks[index] = this.taskToEdit;
      }
      this.taskToEdit = null;
    }
  }

  cancelEdit() {
    this.taskToEdit = null;
  }
}
