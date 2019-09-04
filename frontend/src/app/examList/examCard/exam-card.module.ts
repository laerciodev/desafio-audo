import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { ExamCardComponent } from './exam-card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ExamCardComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    HttpClientModule,
    AngularSvgIconModule
  ],
  exports: [
    ExamCardComponent
  ]
})
export class ExamCardModule {}
