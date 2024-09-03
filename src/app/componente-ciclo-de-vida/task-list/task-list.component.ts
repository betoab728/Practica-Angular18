import { Component,OnInit } from '@angular/core';
import { TaskCounterComponent } from '../task-counter/task-counter.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TaskCounterComponent,CommonModule,FormsModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
 
})
export class TaskListComponent implements OnInit {

 tasks: { name: string, completed: boolean }[] = [];
  newTask: string = '';

  constructor() {}

  ngOnInit(): void {
    // Inicializar con algunas tareas predeterminadas
    this.tasks = [
      { name: 'Aprender Angular', completed: false },
      { name: 'Leer un libro', completed: false }
    ];
  }

  addTask(): void {
    if (this.newTask.trim()) {
      this.tasks.push({ name: this.newTask, completed: false });
      this.newTask = '';
    }
  }

  toggleTaskCompletion(task: { name: string, completed: boolean }): void {
    task.completed = !task.completed;
  }


}
