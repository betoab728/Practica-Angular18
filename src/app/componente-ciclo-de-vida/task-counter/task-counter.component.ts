import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-task-counter',
  standalone: true,
  imports: [],
  templateUrl: './task-counter.component.html',
  styleUrl: './task-counter.component.css'
})
export class TaskCounterComponent implements OnChanges {

  @Input() tasks: { name: string, completed: boolean }[] = [];
  activeTasksCount: number = 0;

  ngOnChanges(): void {
    this.activeTasksCount = this.tasks.filter(task => !task.completed).length;
  }

}
