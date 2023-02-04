import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ResponseViewModel } from 'src/app/models/response-view-model';
import { Student } from '../../models/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {

  students: Student[] = [];

  constructor(private _http:HttpClient){}
  ngOnInit(): void {
    this._http.get<ResponseViewModel>('https://api.mohamed-sadek.com/Student/Get')
    .subscribe(
      response=>{
        this.students = response.Data;
      },
      error=>{
        alert('error occured');
      }
      );
  }

  add(newFirstName:string,newLastName:string,newMobile:string,newEmail:string,newNationalID:string,newAge:number): void{

    let student = new Student(newFirstName,newLastName,newMobile,newEmail,newNationalID,newAge);

      this._http.post<ResponseViewModel>('https://api.mohamed-sadek.com/Student/POST',student)
      .subscribe(
        response=>{
          if(response.Success)
            this.students.push(student);
          else
            alert(response.Message);
        }
      );
      // this.sort();
  }

  // update(newFirstName:string,newLastName:string,newMobile:string,newEmail:string,newNationalID:string,newAge:number,newNameArabic:string):void{
  //   let student = new Student(newFirstName,newLastName,newMobile,newEmail,newNationalID,newAge,newNameArabic);

  //   this._http.put<ResponseViewModel>('https://api.mohamed-sadek.com/Student/PUT?id='+student.ID,student)
  //   .subscribe(
  //     response=>{
  //       if(response.Success)
  //         this.students.push(student);
  //       else
  //         alert(response.Message);
  //     }
  //   );
  // }


  delete(index:number):void{
    let student = this.students[index];
   this._http.delete<ResponseViewModel>('https://api.mohamed-sadek.com/Student/delete?id='+student.ID)
    .subscribe(
      response=>{
        this.students.splice(index,1);
      }
    );
  }

  
  // sort():void{
  //   this.students.sort((e1,e2)=> e1.age - e2.age);
  // }

}
