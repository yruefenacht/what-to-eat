import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<User | null>;

  constructor(
    private fireauth: AngularFireAuth,
    private firestore: AngularFirestore,
    private router: Router
  ) {
    this.user$ = this.fireauth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.firestore.doc<User>(`User/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  async doLogin(email: string, password: string): Promise<void> {
    const credential = await this.fireauth.signInWithEmailAndPassword(email, password);
    return this.updateUser(credential.user);
  }

  async doLogout(): Promise<boolean> {
    await this.fireauth.signOut();
    return this.router.navigate(['/']);
  }

  private updateUser(user: User): Promise<void> {
    const userRef = this.firestore.doc(`User/${user.uid}`);
    const userData = {
      email: user.email,
      uid: user.uid
    };
    return userRef.set(userData, { merge: true });
  }
}
