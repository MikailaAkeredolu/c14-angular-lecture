import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrl: './edit-student.component.css'
})
export class EditStudentComponent implements OnInit{

  student = new Student();

  id:any;

  constructor(private studentService:StudentService, private router: Router, private activatedRoute: ActivatedRoute){}


  ngOnInit(): void {

    this.id = this.activatedRoute.snapshot.params[`id`];

    this.studentService.getStudentById(this.id).subscribe(
      (data)=>{
          this.student = data;
      }
    );
  }


  editStudentButton(){
    this.studentService.updateStudent(this.id, this.student).subscribe(
        ()=>{
          this.router.navigate(['students']);
        }
    );
  }

  goBackToList(){
    this.router.navigate(['students']);
  }


  

}
