import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MenuformComponent } from './menuform.component';

describe('MenuformComponent', () => {
  let component: MenuformComponent;
  let fixture: ComponentFixture<MenuformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuformComponent ],
      imports: [
        MatButtonModule,
        MatInputModule,
        MatSelectModule,
        MatIconModule,
        MatChipsModule,
        MatSnackBarModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
