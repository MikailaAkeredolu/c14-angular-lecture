import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient:HttpClient) { }

      getAllStudents(): Observable<Student[]>{
          return this.httpClient.get<Student[]>(`http://localhost:8080/students`);
      }

      addStudent(student: Student){
          return this.httpClient.post<Student>(`http://localhost:8080/students`, student );
      }


      updateStudent(id:any, student:Student): Observable<any>{
        return this.httpClient.put<Student>(`http://localhost:8080/students/${id}`, student);
      }


      getStudentById(id: number): Observable<any>{
          return this.httpClient.get<Student>(`http://localhost:8080/students/${id}`);
      }




}
