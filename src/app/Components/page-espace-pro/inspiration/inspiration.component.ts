import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../Services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-inspiration',
  templateUrl: './inspiration.component.html',
  styleUrls: ['./inspiration.component.css']
})
export class InspirationComponent implements OnInit {
  user: firebase.User;
  email: string;

  password: string;

  constructor(public auth: AuthService,  private router: Router) {
  }

  ngOnInit() {
    this.auth.getUserState().subscribe(user => {
      this.user = user;
    });
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
