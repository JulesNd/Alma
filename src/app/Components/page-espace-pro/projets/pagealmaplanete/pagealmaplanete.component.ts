import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../../Services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pagealmaplanete',
  templateUrl: './pagealmaplanete.component.html',
  styleUrls: ['./pagealmaplanete.component.css']
})
export class PagealmaplaneteComponent implements OnInit {

  email: string;

  password: string;

  user: firebase.User;

  constructor(public auth: AuthService,
              private router: Router) {
  }

  ngOnInit() {
    this.auth.getUserState().subscribe(user => {this.user = user; });
  }

  login() {
    this.router.navigate(['/Accueil']);
  }
  logout() {
    this.auth.logout();
  }

}
