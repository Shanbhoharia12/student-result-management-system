import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { StudentLoginComponent } from './student-login/student-login.component';
import { StudentDeleteComponent } from './student-delete/student-delete.component';
import { StudentListComponent } from './student-list/student-list.component';



const routes: Routes = [
  { path: '', redirectTo: 'student-login', pathMatch: 'full' },
  { path: 'student-login', component: StudentLoginComponent },
  { path: 'student-list', component: StudentListComponent },
];


@NgModule({
  declarations: [],

  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
