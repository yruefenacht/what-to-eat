import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenulistComponent } from './menulist.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../../environments/environment';

describe('MenulistComponent', () => {
  let component: MenulistComponent;
  let fixture: ComponentFixture<MenulistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MenulistComponent
      ],
      imports: [
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule
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
