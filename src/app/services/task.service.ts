import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [];

  constructor() {
    // Cargar las tareas desde localStorage al iniciar el servicio
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks);
    }
  }

  // Obtener todas las tareas
  getTasks(): Task[] {
    return this.tasks;
  }

  // Agregar una nueva tarea
  addTask(title: string): void {
    const newTask: Task = {
      id: this.tasks.length + 1,
      title,
      completed: false,
    };
    this.tasks.push(newTask);
    this.saveTasks(); 
  }

  // Eliminar una tarea por su ID
  deleteTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
    this.saveTasks(); 
  }

  // Alternar el estado de completado de una tarea
  toggleTaskCompletion(id: number): void {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.completed = !task.completed;
      this.saveTasks(); 
    }
  }

  // Guardar las tareas en localStorage
  private saveTasks(): void {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
