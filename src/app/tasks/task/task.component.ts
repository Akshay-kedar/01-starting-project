import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent,DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
@Input()task!:Task;

constructor(private taskService:TasksService){}


onTaskComplete(){
  this.taskService.removeTask(this.task.id)

}

}

export interface Task {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string; // Consider using Date type if handling dates
}