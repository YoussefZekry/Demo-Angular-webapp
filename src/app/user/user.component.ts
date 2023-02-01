import { Component } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  users: User[] = [];



  AddUserValidation(newFirstName: string ,newLastName: string,newAge:string): void{

     let user = new User();
      user.firstName = newFirstName;
      user.lastName = newLastName;
      user.age = parseInt(newAge);
      this.users.push(user);
      console.log(this.users)
   
    // if (


    // )
    //   return false;

    // else return true;
  }

  
}
