import { Injectable, NgZone } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { User } from 'src/app/core/interfaces/user';
import { LocalStorageKey } from 'src/app/core/enums/local-storage-key';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any;

  constructor(
    public aFirestore: AngularFirestore,
    public aFireAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone,
    public localStorageService: LocalStorageService,
  ) {
    this.aFireAuth.authState.subscribe((user) => {
      if (user) {
        localStorageService.setItem(LocalStorageKey.User, user);
      } else {
        localStorageService.setItem(LocalStorageKey.User,  null);
      }
    })
  }

  SignUp(user: User) {
    return this.aFireAuth
      .createUserWithEmailAndPassword(user.email, user.password ?? "")
      .then((result) => {
        user.uid = result.user?.uid;
        delete user.password;
        this.SetUserData(user);
      })
  }

  SetUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.aFirestore.doc(
      `users/${user.uid}`
    );
    return userRef.set(user, {
      merge: true,
    });
  }

  get isLoggedIn(): boolean {
    const user = this.localStorageService.getItem<any>(LocalStorageKey.User);
    return user !== null && user.emailVerified !== false ? true : false;
  }
}
