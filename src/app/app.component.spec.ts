import { TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header/header.component';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthService } from './services/auth/auth.service';
import { AuthService as AuthServiceMock } from './services/auth/auth.service.mock';

import { AppComponent } from './app.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent
      ],
      imports: [
        MatSnackBarModule,
        RouterTestingModule
      ],
      providers: [
        { provide: AuthService, useClass: AuthServiceMock }
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
