import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router, UrlTree} from '@angular/router';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {auth} from 'firebase';
import {AngularFirestore} from '@angular/fire/firestore';
import {FormsModule} from '@angular/forms';
import {observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {User} from '../user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private eventAuthError = new BehaviorSubject<string>('');
  eventAuthError$ = this.eventAuthError.asObservable();
  newUser: any;
  user: Observable<User>;

  isLoggedIn: Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree;
  // tslint:disable-next-line:variable-name
  private _userCredential: firebase.auth.UserCredential;

  constructor(private afAuth: AngularFireAuth,
              private db: AngularFirestore,
              private router: Router) {
    // @ts-ignore
    this.user = this.afAuth.authState.pipe(
      switchMap(user => {if (user) {
        return this.db.doc<User>(`users/${user.uid}`).valueChanges();
      }  else {
        return of (null); }
      })
    );
  }
  getUserState() {
    return this.afAuth.authState;
  }

  private updateUserData(user) {
    const userRef = this.db.collection('users').doc(user.uid);
    const data: { uid: any; displayName: any; email: any } = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
    };
    return userRef.set(data, {merge: true});
  }


  login(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .catch(error => {
        this.eventAuthError.next(error);
      })
      .then(userCredential => {
        if (userCredential) {

          this.router.navigate(['/EspacePro']);
        }
      });
  }
  createUser(user) {
    this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
      .then(userCredential => {
        this.newUser = user;
        console.log(userCredential);
        userCredential.user.updateProfile({
          displayName: user.firstName + '' + user.lastName,
        });

        this.insertUserData(userCredential)
          .then(() => {
            this.router.navigate(['/EspacePro']);
          }).catch(error => {
          this.eventAuthError.next(error);
        });

      }); }


  insertUserData(userCredential: firebase.auth.UserCredential) {
    this._userCredential = userCredential;
    return this.db.doc('Users/${userCredential.user.uid}').set({
      email: this.newUser.email,
      firstname: this.newUser.firstName,
      lastname: this.newUser.lastName,
      role: 'network user'
    });
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/Login']);
    return this.afAuth.auth.signOut();
  }




}
