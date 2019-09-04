import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { MatNativeDateModule } from '@angular/material/';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { LoginModule } from './login/login.module';
import { RouterModule } from '@angular/router';
import { ExamListModule } from './examList/exam-list.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    RouterModule,
    AppRoutingModule,
    ExamListModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
