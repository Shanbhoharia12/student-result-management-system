import { Component } from '@angular/core';

interface Student {
  id: number;
  name: string;
  rollno: string;
  email: string;
  marks: number;
}

@Component({
  selector: 'app-student-delete',
  templateUrl: './student-delete.component.html',
  styleUrls: ['./student-delete.component.css']
})
export class StudentDeleteComponent {
  students: Student[] = [
    { id: 1, name: 'John', rollno: '123', email: 'john@example.com', marks: 90 },
    { id: 2, name: 'Jane', rollno: '456', email: 'jane@example.com', marks: 85 },
    { id: 3, name: 'Bob', rollno: '789', email: 'bob@example.com', marks: 95 }
  ];

  deleteStudent(student: Student) {
    const index = this.students.indexOf(student);
    if (index > -1) {
      this.students.splice(index, 1);
    }
  }
}
