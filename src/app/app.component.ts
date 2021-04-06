import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // TODO: 1. Make header separate
  // TODO: 2. Display logged out message
  // TODO: 3. Add login button
  // TODO: 4. Guard delete button
  constructor(public authService: AuthService) { }

}
