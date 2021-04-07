import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  snackBarDuration = 3000;

  constructor(private authService: AuthService, private snackbar: MatSnackBar) { }

  ngOnInit(): void { }

  async logoutClick(): Promise<void> {
    await this.authService.doLogout();
    this.snackbar.open('Bye!', '', { duration: this.snackBarDuration });
  }

  get auth(): Observable<User | null> {
    return this.authService.user$;
  }

}
