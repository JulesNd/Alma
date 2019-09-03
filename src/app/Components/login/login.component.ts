import { Component, OnInit, HostBinding } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService) { }
  authError: any;
  ngOnInit() {




    this.auth.eventAuthError$.subscribe(data => {
      this.authError = data;
    });
  }
  login(frm) {
    // tslint:disable-next-line:no-unused-expression
    this.auth.login(frm.value.email, frm.value.password);
  }


}
