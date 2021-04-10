import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialFileInputModule } from 'ngx-material-file-input';

import { MenuService } from '../services/menu/menu.service';
import { MenuService as MenuMockService } from '../services/menu/menu.service.mock';

import { EditmenuComponent } from './editmenu.component';
import { MenuformComponent } from '../menuform/menuform.component';

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
        MaterialFileInputModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        RouterTestingModule
      ],
      providers: [
        { provide: MenuService, useClass: MenuMockService }
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
