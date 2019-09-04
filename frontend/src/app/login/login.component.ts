import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() : void {
    this.loginForm = this.formBuilder.group({
      numeroExame: ['98765', Validators.required],
      senha: ['123456', Validators.required]
    });
  }

  login() {

    const numeroExame = this.loginForm.get('numeroExame').value;
    const senha = this.loginForm.get('senha').value;

    if (numeroExame == '98765' && senha == '123456') {
      this.router.navigateByUrl('usuario/exames');
    } else {
      console.log('usuário ou senha inválidos!')
    }

  }

}
