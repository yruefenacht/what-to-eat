import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { RouterTestingModule } from '@angular/router/testing';

import { MenuService } from '../services/menu/menu.service';
import { MenuService as MenuMockService } from '../services/menu/menu.service.mock';
import { AuthService } from '../services/auth/auth.service';
import { AuthService as AuthServiceMock } from '../services/auth/auth.service.mock';

import { MenulistComponent } from './menulist.component';
import { MenuComponent } from '../menu/menu.component';
import { SearchPipe } from '../services/pipe/search.pipe';

describe('MenulistComponent', () => {
  let component: MenulistComponent;
  let fixture: ComponentFixture<MenulistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MenulistComponent,
        MenuComponent,
        SearchPipe
      ],
      imports: [
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatIconModule,
        MatMenuModule,
        MatInputModule,
        MatSelectModule,
        MatDialogModule,
        MatSnackBarModule,
        MatCardModule,
        MatProgressSpinnerModule,
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
    fixture = TestBed.createComponent(MenulistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have menus', () => {
    component.menus.subscribe(result => {
      expect(result.length).toBeGreaterThan(0);
    });
  });
});
