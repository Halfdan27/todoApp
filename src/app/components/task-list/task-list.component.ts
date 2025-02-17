import { Component } from '@angular/core';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-list',
  standalone: false,
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  constructor(private taskService: TaskService) {}

  get tasks(): Task[] {
    return this.taskService.getTasks();
  }
  

   get pendingTasksCount(): number {
    return this.tasks.filter(t => !t.completed).length;
  }

  toggleCompletion(id: number): void {
    this.taskService.toggleTaskCompletion(id);
  }

  deleteTask(id: number): void {
    this.taskService.deleteTask(id);
  }
  
}