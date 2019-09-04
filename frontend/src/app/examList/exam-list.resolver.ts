import { ExamService } from './exam.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Exam } from './exam';

@Injectable({ providedIn: 'root' })
export class ExamListResolver implements Resolve<Observable<Exam[]>> {

  constructor(private service : ExamService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.service.listExams();
  }
}
