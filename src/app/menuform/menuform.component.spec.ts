import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select'
import { MatChipsModule } from '@angular/material/chips';;
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMatFileInputModule } from '@angular-material-components/file-input';
import { MenuService } from '../services/menu.service';
import { MenuService as MenuMockService } from '../services/menu.service.mock';
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
        MatChipsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        NgxMatFileInputModule
      ],
      providers: [
        { provide: MenuService, useClass: MenuMockService }
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
