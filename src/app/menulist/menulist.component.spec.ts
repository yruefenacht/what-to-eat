import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuService } from '../services/menu.service';
import { MenuService as MenuMockService } from '../services/menu.service.mock';
import { MenuComponent } from '../menu/menu.component';
import { MatIconModule } from '@angular/material/icon';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { MenulistComponent } from './menulist.component';

describe('MenulistComponent', () => {
  let component: MenulistComponent;
  let fixture: ComponentFixture<MenulistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MenulistComponent,
        MenuComponent
      ],
      imports: [
        ScrollingModule,
        MatIconModule
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
