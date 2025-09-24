// src/app/todo.service.ts
import { Injectable, signal } from '@angular/core';

export interface Task {
  id: number;
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  // Signal qui contient le tableau des tâches
  private tasksSignal = signal<Task[]>([]);

  // Getter du signal (les composants vont s’y abonner implicitement)
  tasks = this.tasksSignal.asReadonly();

  addTask(title: string): void {
    if (title.trim()) {
      const newTask: Task = { id: Date.now(), title };
      this.tasksSignal.update(tasks => [...tasks, newTask]);
    }
  }

  deleteTask(id: number): void {
    this.tasksSignal.update(tasks => tasks.filter(task => task.id !== id));
  }

  updateTask(updatedTask: Task): void {
    this.tasksSignal.update(tasks =>
      tasks.map(task => task.id === updatedTask.id ? updatedTask : task)
    );
  }
}
