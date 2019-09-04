import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material';
import { Exam } from './exam';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'exam-list',
  templateUrl: './exam-list.component.html',
  styleUrls: ['./exam-list.component.css']
})

export class ExamListComponent implements OnInit {

  exams : Exam[] = [];
  sortedData: Exam[] = [];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.exams = this.activatedRoute.snapshot.data.exams;
    this.sortedData = this.exams.slice();
  }

  sortData(sort: Sort) {
    const data = this.exams.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'examName': return compare(a.examName, b.examName, isAsc);
        case 'examDate': return compare(a.examDate, b.examDate, isAsc);
        case 'nameDoctor': return compare(a.nameDoctor, b.nameDoctor, isAsc);
        default: return 0;
      }
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
