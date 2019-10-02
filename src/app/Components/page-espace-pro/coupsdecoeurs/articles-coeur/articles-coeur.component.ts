import { Component, OnInit, Input } from '@angular/core';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {AuthService} from '../../../../Services/auth.service';
import * as firebase from 'firebase/app';
import {User} from '../../../../user';
import {AngularFireDatabase} from '@angular/fire/database';

@Component({
  selector: 'app-articles-coeur',
  templateUrl: './articles-coeur.component.html',
  styleUrls: ['./articles-coeur.component.css']
})
export class ArticlesCoeurComponent implements OnInit {

  userDoc: AngularFirestoreDocument<any>;
  photoDoc: AngularFirestoreDocument<any>;

  user: Observable<any>;
  photo: Observable<any>;

  constructor(private afs: AngularFirestore) { }

  ngOnInit() {

    this.userDoc = this.afs.doc('Users/test-user-3');
    this.photoDoc = this.afs.doc('photo/photo1');
    this.photo = this.userDoc.valueChanges();
}

get photoId() {
   return this.photoDoc.ref.id;
}

get userId() {
    return this.userDoc.ref.id;
}




}
