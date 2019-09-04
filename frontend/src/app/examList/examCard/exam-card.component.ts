import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'card-exam',
  templateUrl: './exam-card.component.html',
  styleUrls: ['./exam-card.component.css']
})

export class ExamCardComponent implements OnInit {

  @Input() name : string = '';
  @Input() date : string = '';
  @Input() doctor : string = '';

  public isCollapsed : boolean = true;

  constructor() {}

  ngOnInit(): void {}

}

