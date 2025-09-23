import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from '../highlight.directive';
import { TaskPipe } from '../task.pipe';
import { TodoService, Task } from '../todo'; // ✅ import du service et de Task

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
  tasks: Task[] = [];           // ✅ plus d'initialisation manuelle ici
  newTaskTitle: string = '';
  taskToEdit: Task | null = null;

  constructor(private todoService: TodoService) {
    // ✅ récupération initiale des tâches depuis le service
    this.tasks = this.todoService.getTasks();
  }

  addTask() {
    if (this.newTaskTitle.trim()) {
      this.todoService.addTask(this.newTaskTitle); // ✅ passe par le service
      this.newTaskTitle = '';
      this.tasks = this.todoService.getTasks();    // rafraîchit l'affichage
    }
  }

  deleteTask(id: number) {
    this.todoService.deleteTask(id);               // ✅ passe par le service
    this.tasks = this.todoService.getTasks();
  }

  editTask(task: Task) {
    this.taskToEdit = { ...task };
  }

  updateTask() {
    if (this.taskToEdit) {
      this.todoService.updateTask(this.taskToEdit); // ✅ passe par le service
      this.taskToEdit = null;
      this.tasks = this.todoService.getTasks();
    }
  }

  cancelEdit() {
    this.taskToEdit = null;
  }
}
