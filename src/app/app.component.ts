import { Component } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AlmaStage';
  constructor() {
    const config = {
      apiKey: 'AIzaSyDEpywVwYr8fYyIjuGJwi-9OvHpk8One70',
      authDomain: 'almadatabase.firebaseapp.com',
      databaseURL: 'https://almadatabase.firebaseio.com',
      projectId: 'almadatabase',
      storageBucket: '',
      messagingSenderId: '616749970294',
      appId: '1:616749970294:web:3f0e6de14a04050d'
    };
    firebase.initializeApp(config);
  }
}
