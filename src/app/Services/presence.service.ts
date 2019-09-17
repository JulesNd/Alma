import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFireDatabase} from '@angular/fire/database';
import * as firebase from 'firebase/app';
import {tap, map, switchMap, first} from 'rxjs/operators';
import {of} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PresenceService {

  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase) {
    console.log('presence');
    this.updateOnuser().subscribe();
    this.updateOnDisconnect().subscribe();
    this.updateOnAway();
  }
  getPresence(uid: string) {
    return this.db.object(`status/${uid}`).valueChanges();
  }

  getUser() {
    return this.afAuth.authState.pipe(first()).toPromise();
  }
  async setPresence(status: string) {
    // tslint:disable-next-line:no-shadowed-variable
    const user = await this.getUser();
    if (user) {
      return this.db.object(`status/${user.uid}`).update({status});
    }
  }
  updateOnuser() {
    const connection = this.db.object('.info/connected').valueChanges().pipe(
      map(connected => connected ? 'online' : 'offline')
    );
    return this.afAuth.authState.pipe(
// tslint:disable-next-line:no-shadowed-variable
switchMap(user => user ? connection : of('offline')),
      tap(status => this.setPresence(status))
    );
  }
  updateOnAway() {
    document.onvisibilitychange = (e) => {
if (document.visibilityState === 'hidden') {
  this.setPresence('Away');
} else {
  this.setPresence('online');
}
    };
  }
  async signOut() {
    await this.setPresence('Offline');
    await this.afAuth.auth.signOut();
  }
  updateOnDisconnect() {
    return this.afAuth.authState.pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap(user => {
        if (user) {
          this.db.object(`status/${user.uid}`).query.ref.onDisconnect()
            .update({
              status: 'offline',
            });
        }
      })

    );
  }
}
