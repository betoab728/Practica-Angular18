import { Component } from '@angular/core';
import { Task } from '../task.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TaskCounterComponent } from '../task-counter/task-counter.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule, TaskCounterComponent]
})

export class TaskListComponent {
  tasks: Task[] = [];
  newTaskDescription: string = '';

  // Agregar una nueva tarea
  addTask() {
    if (this.newTaskDescription.trim() === '') return;
    
    const newTask: Task = {
      id: this.tasks.length + 1,
      description: this.newTaskDescription,
      completed: false
    };
    this.tasks.push(newTask);
    this.newTaskDescription = ''; // Limpiar input
  }

  // Marcar tarea como completada
  toggleTaskCompletion(task: Task) {
    task.completed = !task.completed;
  }

  // Eliminar una tarea
  deleteTask(taskId: number) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }
}
