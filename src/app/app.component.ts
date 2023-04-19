import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'student-result-management-system';
  results: any[] = [
    { studentName: 'John', subject: 'Math', result: 'A+' },
    { studentName: 'Mary', subject: 'Science', result: 'B' },
    { studentName: 'Peter', subject: 'English', result: 'A' }
  ];
}
