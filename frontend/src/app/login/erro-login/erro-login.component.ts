import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'message-erro-login',
  templateUrl: './erro-login.component.html'
})
export class ErroLoginComponent implements OnInit {

  @Input() text = '';

  constructor() {}

  ngOnInit() {
  }

}
