import { Component } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrl: './create-student.component.css'
})
export class CreateStudentComponent {

  student = new Student();

  constructor(private studentService:StudentService, private router: Router){}

  submitStudentButton(){
    this.studentService.addStudent(this.student).subscribe(
       (data) => {
         this.router.navigate(['students']);
       }
    );
  }







}
