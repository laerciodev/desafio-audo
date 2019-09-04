import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ExamListComponent } from './exam-list.component';
import { ExamCardModule } from './examCard/exam-card.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { MatSortModule} from '@angular/material/sort';

@NgModule({
  declarations: [
    ExamListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ExamCardModule,
    NgbModule.forRoot(),
    MatSortModule
  ]
})
export class ExamListModule {}
