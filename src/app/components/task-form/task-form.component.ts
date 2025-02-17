import { Component } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { TaskService } from "../../services/task.service";


@Component({
  selector: 'app-task-form',
  standalone: false,
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {
  taskForm: FormGroup;

  constructor(private fb: FormBuilder, private taskService: TaskService) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
    });
  }

  addTask(): void {
    if (this.taskForm.valid) {
      this.taskService.addTask(this.taskForm.value.title);
      this.taskForm.reset();
    }
  }
}