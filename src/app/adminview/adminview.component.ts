import { Component, OnInit } from '@angular/core';
// tslint:disable-next-line:import-spacing
// @ts-ignore
// tslint:disable-next-line:import-spacing
import  firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
import {AngularFireDatabase, AngularFireObject} from '@angular/fire/database';
import {FirebaseObjectObservable} from '@angular/fire/database-deprecated';

import {User} from '../user';


@Component({
  selector: 'app-adminview',
  templateUrl: './adminview.component.html',
  styleUrls: ['./adminview.component.css']
})
export class AdminviewComponent implements OnInit {
  user: any;



  constructor() {
}

  ngOnInit(): void {
  }


}
