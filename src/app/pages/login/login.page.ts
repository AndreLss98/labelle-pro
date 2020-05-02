import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  // variaveis
  loginForm: FormGroup;

  constructor(
    private route: Router,
    private builder: FormBuilder
  ) { }

  ngOnInit() {

    /* Reactive Form */
    this.loginForm = this.builder.group(
      {
        email: ['', Validators.required],
        senha: ['', Validators.required]
      },
      {}
    );
  }

  onLogin() {
    if (this.loginForm.get('email').value == 'victor@email.com' && this.loginForm.get('senha').value == '12345') {
      this.route.navigateByUrl('/agenda');
    } else {
      alert('Email ou senha incorreto!')
    }
  }

}
