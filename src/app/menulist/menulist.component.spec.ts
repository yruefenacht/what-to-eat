import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { MenuService } from '../services/menu/menu.service';
import { MenuService as MenuMockService } from '../services/menu/menu.service.mock';

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
        ScrollingModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule
      ],
      providers: [
        { provide: MenuService, useClass: MenuMockService }
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
