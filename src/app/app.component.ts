import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private afAuth: AngularFireAuth
  ) {}


  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.afAuth.authState
      .subscribe(user => {
        console.log(user);
      });
  }

}
