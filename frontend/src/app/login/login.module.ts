import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login.component';
import { ErroLoginModule } from './erro-login/erro-login.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    ErroLoginModule
  ]
})

export class LoginModule {}
