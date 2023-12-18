import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CreateStudentComponent } from './create-student/create-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { ListStudentsComponent } from './list-students/list-students.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentService } from './student.service';

@NgModule({
  declarations: [
    AppComponent,
    CreateStudentComponent,
    EditStudentComponent,
    ListStudentsComponent,
    StudentDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    StudentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
