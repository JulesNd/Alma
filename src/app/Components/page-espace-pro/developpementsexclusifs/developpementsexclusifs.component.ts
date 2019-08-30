import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../Services/auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-developpementsexclusifs',
  templateUrl: './developpementsexclusifs.component.html',
  styleUrls: ['./developpementsexclusifs.component.css']
})
export class DeveloppementsexclusifsComponent implements OnInit {



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
  register() {
    this.router.navigate(['/Fille']);
  }

}
