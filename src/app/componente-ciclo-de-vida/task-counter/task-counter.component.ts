import { Component, Input } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-counter',
  templateUrl: './task-counter.component.html',
  styleUrls: ['./task-counter.component.css'],
  standalone: true
})
export class TaskCounterComponent {
  @Input() tasks: Task[] = [];

  get totalTasks(): number {
    return this.tasks.length;
  }

  get completedTasks(): number {
    return this.tasks.filter(task => task.completed).length;
  }
}
