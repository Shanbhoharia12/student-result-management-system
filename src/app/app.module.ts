import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { StudentAddComponent } from './student-add/student-add.component';
// import { StudentListComponent } from './student-list/student-list.component';
import { StudentDeleteComponent } from './student-delete/student-delete.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    StudentLoginComponent,
    StudentAddComponent,
    // StudentListComponent,
    StudentDeleteComponent,
    AdminLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }





