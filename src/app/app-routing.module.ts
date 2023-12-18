import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListStudentsComponent } from './list-students/list-students.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';

const routes: Routes = [

  {path: 'students', component: ListStudentsComponent},
  {path: 'addstudent', component: CreateStudentComponent },
  {path: '', redirectTo: 'students', pathMatch: 'full'},
  {path: 'editstudent/:id', component: EditStudentComponent},
  {path: 'studentdetail/:id', component: StudentDetailsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
