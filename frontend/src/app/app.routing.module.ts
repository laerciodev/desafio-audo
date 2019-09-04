import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ExamListComponent } from './examList/exam-list.component';
import { ExamListResolver } from './examList/exam-list.resolver';

const routes: Routes = [
  {
      path: '',
      component: LoginComponent
  },
  {
    path: 'usuario/exames',
    component: ExamListComponent,
    resolve: {
      exams: ExamListResolver
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
   RouterModule
  ]
})

export class AppRoutingModule {}
