import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students !: Student[];
  
  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(): void {
    this.studentService.getStudents().subscribe(
      students => this.students = students
    );
  }

  deleteStudent(student: Student): void {
    if(confirm(`Are you sure you want to delete ${student.name}?`)) {
      this.studentService.deleteStudent(student.id).subscribe(
        () => {
          this.students = this.students.filter(s => s !== student);
        }
      );
    }
  }
}
