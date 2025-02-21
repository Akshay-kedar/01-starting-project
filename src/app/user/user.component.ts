import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';
const randomIndex=Math.floor(Math.random()*DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  //using angular signale to check the changed value and update the data everywhere
selectedUsers= signal(DUMMY_USERS[randomIndex])

//effecient way to recompute the property if property changes
imagepath= computed(()=>'assets/users/'+ this.selectedUsers().avatar)

//get values always act as property we need not to use it as method
// get imagepath(){
//   return 'assets/users/'+ this.selectedUsers().avatar

// }

onSelectUser(){
  const randomIndex=Math.floor(Math.random()*DUMMY_USERS.length);
  this.selectedUsers.set(DUMMY_USERS[randomIndex])
}
}
