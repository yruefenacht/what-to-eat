import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  redirectUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.redirectUrl = params.redirectUrl;
    });
  }

  onSuccess(): void {
    console.log(this.redirectUrl);
    this.authService.user.subscribe(user => console.log(user));
    this.router.navigate([this.redirectUrl]);
  }

}
