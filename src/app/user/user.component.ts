import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // @Input({required:true}) avatar!:string;
  // @Input({required:true})name!:string;
  // @Input({required:true})id!:string;
  @Input({required:true})user!:User
@Input({required:true})selected!:boolean
@Output()  select=new EventEmitter();
  get imagepath(){
      return 'assets/users/'+ this.user.avatar
    
    }

onSelectUser(){
 this.select.emit(this.user.id);
}
}

export type User={
  id:string;
  avatar:string;
  name:string
}

