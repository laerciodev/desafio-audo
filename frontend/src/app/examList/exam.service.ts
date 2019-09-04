import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Exam } from './exam';

@Injectable({ providedIn: 'root' })
export class ExamService {

  constructor(private http: HttpClient) {}

  listExams() {
    return this.http.get<Exam[]>('http://localhost:3000/exams')
  }

}
