import { Injectable } from '@angular/core';
import { newTaskData } from './new-task/new-task.component';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() {
const tasks=localStorage.getItem('tasks')
if(tasks){
  this.tasks=JSON.parse(tasks);
}

   }
private  tasks = [
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

  private saveTasks(){
    localStorage.setItem('tasks',JSON.stringify(this.tasks));
  }
  getUserTasks(userId:string){
    console.log("getUserTasks",userId)
    return this.tasks.filter((task)=>{return task.userId ===userId})
  }

  addTask(taskData:newTaskData,userId:string){
    this.tasks.push({
      id:new Date().getTime().toString(),
      userId:userId,
      title:taskData.title,
      summary:taskData.summary,
      dueDate:taskData.date
    })
    this.saveTasks();
  }
  removeTask(id:string){
   this.tasks= this.tasks.filter((task)=>{return task.id !==id})
   this.saveTasks()
  }

  
}
