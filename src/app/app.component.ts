import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],


})


export class AppComponent {
  constructor(
    public router: Router,
    public afAuth: AngularFireAuth,
  ) {}


  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.router.navigate(['Accueil']);
    this.afAuth.authState
      .subscribe(user => {
        console.log(user);
      });
  }

  onActivate($event: any) {
    window.scroll(0, 0);
  }
}
