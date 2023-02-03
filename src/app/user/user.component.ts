import { Component } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  users: User[] = [];
  
  add(newFirstName: string ,newLastName: string,newAge:number): void{

    let user = new User(newFirstName,newLastName,newAge);
    if(this.isDuplicate(user))
      alert("User Already Exists")
    else
    this.users.push(user);
  }


  isDuplicate(user:User): boolean{
    // let isDuplicateFlag =true;
    // this.users.forEach(element => {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].firstName===user.firstName && this.users[i].lastName===user.lastName && this.users[i].age===user.age) {
        console.log("duplicate");
        return true;
        }
      }
      // });
        console.log("not duplicate"); 
        return false;
  }
  
  // sayed(newFirstName: string ,newLastName: string,newAge:number){
  //   let user = new User(newFirstName,newLastName,newAge);
  
  //   console.log("duplicate");
  //     return this.users.some(function(e){
  //       return e.firstName===user.firstName && e.lastName===user.lastName && e.age===user.age;
  //     },user);
      
  // }


  delete(index:number):void
  {
   this.users.splice(index,1);
  }
  // sort():void{

  // }

}
