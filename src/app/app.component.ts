import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './user/dummy-users';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,TasksComponent,UserComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users=DUMMY_USERS
selectedUserId=''

get SelectedUser(){
  return this.users.find((user)=>{
    return user.id===this.selectedUserId
  })
}

  onSelectUser(id:string){
   
this.selectedUserId=id
  }
  trackByFn(index: number, user: any) {
    return user.id; // Ensure 'id' is a unique identifier
  }
}
