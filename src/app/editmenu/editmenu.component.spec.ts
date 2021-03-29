import { NgxMatFileInputModule } from '@angular-material-components/file-input';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuformComponent } from '../menuform/menuform.component';
import { MenuService } from '../services/menu.service';
import { MenuService as MenuMockService } from '../services/menu.service.mock';

import { EditmenuComponent } from './editmenu.component';

describe('EditmenuComponent', () => {
  let component: EditmenuComponent;
  let fixture: ComponentFixture<EditmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        EditmenuComponent,
        MenuformComponent,
      ],
      imports: [
        MatProgressSpinnerModule,
        MatButtonModule,
        MatInputModule,
        MatSelectModule,
        MatChipsModule,
        NgxMatFileInputModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
      ],
      providers: [
        { provide: MenuService, useClass: MenuMockService },
        { provide: Router, useClass: class { navigate = jasmine.createSpy('navigate'); } },
        { provide: ActivatedRoute, useValue: { snapshot: { paramMap: { get: (key) => 'fakeId' } } } }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
