import { bootstrapApplication } from '@angular/platform-browser';


import { TaskListComponent } from './app/componente-ciclo-de-vida/task-list/task-list.component';
import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(TaskListComponent, config);

export default bootstrap;
