import { Injectable } from '@angular/core';

export interface Task {
  id: number;
  title: string;
}

@Injectable({
  providedIn: 'root' // singleton
})
export class TodoService {
  private tasks: Task[] = [];

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(title: string): void {
    if (title.trim()) {
      const newTask: Task = { id: Date.now(), title };
      this.tasks.push(newTask);
    }
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  updateTask(updatedTask: Task): void {
    const index = this.tasks.findIndex(task => task.id === updatedTask.id);
    if (index > -1) {
      this.tasks[index] = updatedTask;
    }
  }
}
