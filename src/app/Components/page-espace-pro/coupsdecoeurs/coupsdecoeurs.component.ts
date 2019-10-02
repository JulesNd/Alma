import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../Services/auth.service';
import {Router} from '@angular/router';

import * as firebase from 'firebase';

@Component({
  selector: 'app-coupsdecoeurs',
  templateUrl: './coupsdecoeurs.component.html',
  styleUrls: ['./coupsdecoeurs.component.css']
})
export class CoupsdecoeursComponent implements OnInit {
  email: string;

  password: string;

  user: firebase.User;

  constructor(public auth: AuthService,
              private router: Router,
              ) { }

  ngOnInit() {
    this.auth.getUserState().subscribe(user => {this.user = user; });
  }

  login() {
    this.router.navigate(['/Accueil']);
  }
  logout() {
    this.auth.logout();
  }
  register() {
    this.router.navigate(['/Fille']);
  }


}
