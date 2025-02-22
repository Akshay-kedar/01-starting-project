import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
@Input()task!:Task;
@Output()Complete=new EventEmitter<string>()



onTaskComplete(){
this.Complete.emit(this.task.id)
}

}

export interface Task {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string; // Consider using Date type if handling dates
}