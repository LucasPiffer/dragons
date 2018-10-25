import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  templateUrl: './auth.component.html'
})

export class AuthComponent implements OnInit  {
  public pageTitle = 'Login';
  feedback: any = null;

  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit() {
    if(this.auth.isAuthenticated) {
      this.router.navigate(['/dragons'])
    }
  }

  logarButton(frm) {
    if(frm.invalid) {
      return 'btn btn-default float-right';
    } else {
      return "btn btn-success float-right";
    }
  }

  logar(frm, event) {
    event.preventDefault();
    let usuario = frm.value;
    if(usuario.email == 'teste@teste.com.br' && usuario.password == 'p@ssw0rd') {
      localStorage.setItem('token', '1234');
      this.router.navigate(['/dragons'])
    } else {
      this.feedback = { msg: "Invalid user", status: false }
    }
  }

}
