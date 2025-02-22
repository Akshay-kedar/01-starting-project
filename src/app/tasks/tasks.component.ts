import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  @Input() name!:string|undefined;
  @Input()userId!:string



   tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Learn all the basic and advanced features of Angular',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Learn TypeScript',
      summary: 'Understand TypeScript fundamentals and advanced types',
      dueDate: '2025-11-30',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Build an Angular App',
      summary: 'Create a complete Angular project with state management',
      dueDate: '2025-10-15',
    },
    {
      id: 't4',
      userId: 'u4',
      title: 'Explore RxJS',
      summary: 'Master reactive programming with RxJS in Angular',
      dueDate: '2025-09-20',
    },
    {
      id: 't5',
      userId: 'u5',
      title: 'Learn NGRX',
      summary: 'Implement state management using NGRX in Angular',
      dueDate: '2025-08-10',
    }
  ];

  get SelectedUserTask(){
    return this.tasks.filter((task)=>task.userId===this.userId)
  }
  
  onCompleteTask(id:string){
    this.tasks=this.tasks.filter((task)=>{return task.id !==id})

  }
  
  

}
