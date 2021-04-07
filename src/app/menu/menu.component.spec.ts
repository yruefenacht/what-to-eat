import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';

import { MenuService } from '../services/menu/menu.service';
import { MenuService as MenuMockService } from '../services/menu/menu.service.mock';
import { AuthService } from '../services/auth/auth.service';
import { AuthService as AuthServiceMock } from '../services/auth/auth.service.mock';

import { MenuComponent } from './menu.component';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuComponent ],
      imports: [
        MatIconModule,
        MatMenuModule,
        MatDialogModule,
        MatSnackBarModule,
        RouterTestingModule
      ],
      providers: [
        { provide: MenuService, useClass: MenuMockService },
        { provide: AuthService, useClass: AuthServiceMock }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    component.menu = {
      id: 'fakeid',
      title: 'Spaghetti',
      image: 'src/to/img',
      imageBucket: 'filepath',
      ingredients: ['Nudeln', 'Sauce'],
      duration: 60,
      tags: ['Vegan']
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
