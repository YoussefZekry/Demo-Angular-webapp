import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewStudentComponent } from './components/new-student/new-student.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { StudentComponent } from './components/student/student.component';

const routes: Routes = [
  {path:'home',component:StudentComponent},
  {path:'addstudent',component:NewStudentComponent},
  {path:'studentdetails/:id',component:StudentDetailsComponent},
  {path:'',component:StudentComponent},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
