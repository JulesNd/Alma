import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import {AuthService} from './auth.service';
import * as firebase from 'firebase/app';
import {User} from '../user';
// @ts-ignore
import firestore from 'firebase';

export interface Star {
  userId: firestore.User;
  photoId: any;
  value: number;

}

@Injectable({
  providedIn: 'root'
})
export class StarService {

  constructor(private afs: AngularFirestore) { }

  getuserStars(userId) {
    const starsRef = this.afs.collection('stars', ref => ref.where('userId', '==', userId));
    return starsRef.valueChanges();
  }
  getphotoStars(photoId) {
    const starsRef = this.afs.collection('stars', ref => ref.where('photoId', '==', photoId));
    return starsRef.valueChanges();
  }
  setStar(userId, photoId, value) {
    const star: Star = {userId, photoId, value};
    const starPath = `stars/${star.userId}_${star.photoId}`;
    return this.afs.doc(starPath).set(star);
  }


}
