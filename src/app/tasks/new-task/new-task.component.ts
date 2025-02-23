import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
@Input()UserId!:string
@Output()closeNewTask=new EventEmitter<void>()
//@Output()addTask=new EventEmitter<newTaskData>();
enteredTitle: string='';
enteredDate: string="";
enteredSummary: string="";

constructor(private tasksService:TasksService){}

  closeAddTaxModel(){
this.closeNewTask.emit();
  }
  onSubmit() {
 this.tasksService.addTask({
  title:this.enteredTitle,
  summary:this.enteredSummary,
  date:this.enteredDate

},this.UserId)
    
this.closeAddTaxModel()

    }
}

export type newTaskData={
  title: string;
  summary: string;
  date: string;
}
