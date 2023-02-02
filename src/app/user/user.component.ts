import { Component } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  users: User[] = [];



  AddUserValidation(newFirstName: string ,newLastName: string,newAge:number): void{

     let user = new User();
      user.firstName = newFirstName;
      user.lastName = newLastName;
      user.age = newAge;
      let isDuplicateFlag= false;
      
  
      this.users.forEach(element => {
        if (element.firstName===user.firstName && element.lastName===user.lastName && element.age===user.age) {
          isDuplicateFlag = true;
          console.log("duplicate");
          alert("User Already Exists")
         }
      });

      if(isDuplicateFlag) 
        return;
      else{
        console.log("not duplicate"); 
        this.users.push(user);
        console.log(this.users)
      }
      
    // }
  }
  
  delete(index:number):void
  {
   this.users.splice(index,1);
  }

}
