import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IAuthService } from './auth.service.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements IAuthService {

  user$: Observable<any>;

  constructor() {
    this.user$ = of(null);
  }

  doLogin(email: string, password: string): Promise<void> {
    return new Promise((resolve, reject) => {
      resolve();
    });
  }

  doLogout(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      resolve(true);
    });
  }
}
