import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { AppRoutingModule } from '../app-routing.module';

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
        AppRoutingModule
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
