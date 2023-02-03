import { Component } from '@angular/core';
import { Student } from '../models/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent {
  students: Student[] = [];
  
  add(newFirstName: string ,newLastName: string,newAge:number): void{

    let student = new Student(newFirstName,newLastName,newAge);
    if(this.isDuplicate(student))
      alert("Student Already Exists")
    else
    this.students.push(student);
    this.sort();
  }


  isDuplicate(student:Student): boolean{
    // let isDuplicateFlag =true;
    // this.students.forEach(element => {
    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i].firstName===student.firstName && this.students[i].lastName===student.lastName && this.students[i].age===student.age) {
        console.log("duplicate");
        return true;
        }
      }
      // });
        console.log("not duplicate"); 
        return false;
  }
  
  // sayed(newFirstName: string ,newLastName: string,newAge:number){
  //   let student = new Student(newFirstName,newLastName,newAge);
  
  //   console.log("duplicate");
  //     return this.students.some(function(e){
  //       return e.firstName===student.firstName && e.lastName===student.lastName && e.age===student.age;
  //     },student);
      
  // }


  delete(index:number):void
  {
   this.students.splice(index,1);
  }

  
  sort():void{
    this.students.sort((e1,e2)=> e1.age - e2.age);
  }

}
