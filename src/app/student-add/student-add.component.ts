import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {
  addForm !: FormGroup ;
  

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      name: ['', Validators.required],
      rollno: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      marks: ['', Validators.required]
    });
  }

  onSubmit() {
    // Handle form submission here
    console.log(this.addForm.value);
  }
}
