import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent, newTaskData } from "./new-task/new-task.component";
import { TasksService } from './tasks.service';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {


  @Input() name!:string|undefined;
  @Input()userId!:string;

  constructor(private tasksService:TasksService){}

isAddingTask=false;
  
  get SelectedUserTask(){
     return this.tasksService.getUserTasks(this.userId)
  }
  

  CloseNeWTaskPopup(){
    this.isAddingTask=false
  }
  
  onStartAddTask() {
    this.isAddingTask=true;
    }

   

}
