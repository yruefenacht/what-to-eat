import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuService } from '../services/menu.service';
import { MenuService as MenuMockService } from '../services/menu.service.mock';
import { MenuformComponent } from './menuform.component';

describe('MenuformComponent', () => {
  let component: MenuformComponent;
  let fixture: ComponentFixture<MenuformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuformComponent ],
      imports: [ ReactiveFormsModule ],
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
