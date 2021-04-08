import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isLoading = false;
  private redirectUrl = '';
  private errorMsgDuration = 5000;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.email,
      ]],
      password: ['', [
        Validators.required
      ]]
    });

    this.route.queryParams.subscribe(params => {
      if (params.redirect) {
        this.redirectUrl = params.redirect;
      }
    });
  }

  submitHandler(): void {
    this.isLoading = true;
    const { email, password } = this.loginForm.value;
    this.authService.doLogin(email, password)
      .then(() => {
        this.router.navigate([this.redirectUrl]);
      })
      .catch(err => {
        this.snackbar.open(err.message, '', { duration: this.errorMsgDuration });
      })
      .finally(() => {
        this.isLoading = false;
      });
  }

  get email(): AbstractControl {
    return this.loginForm.get('email');
  }

  get password(): AbstractControl {
    return this.loginForm.get('password');
  }

}
