import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMatFileInputModule } from '@angular-material-components/file-input';
import { MenuService } from '../services/menu.service';
import { MenuService as MenuMockService } from '../services/menu.service.mock';
import { AddMenuComponent } from './addmenu.component';
import { Router } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

describe('AddMenuComponent', () => {
  let component: AddMenuComponent;
  let fixture: ComponentFixture<AddMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMenuComponent ],
      imports: [
        MatButtonModule,
        MatInputModule,
        MatSelectModule,
        MatChipsModule,
        MatProgressSpinnerModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        NgxMatFileInputModule,
      ],
      providers: [
        { provide: MenuService, useClass: MenuMockService },
        { provide: Router, useClass: class { navigate = jasmine.createSpy('navigate'); } },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
