import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrl: './list-students.component.css'
})
export class ListStudentsComponent implements OnInit {

  student = new Student();

  id: any;

  students: Student[] = [];

  constructor(private studentService:StudentService, private router: Router, private activatedRoute: ActivatedRoute){}
  

  ngOnInit(): void {
   this.getStudents();
  }

  gotToEditStudent(id: any){
      this.router.navigate(['editstudent', id]);
  }


  goToAddStudent(){
      this.router.navigate(['addstudent']);
  }


  getStudents(){
      this.studentService.getAllStudents().subscribe(
          (data) => {
              this.students = data;
              // console.log(data);
          }
      );
  }




}
