import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuformComponent } from './menuform.component';

describe('MenuformComponent', () => {
  let component: MenuformComponent;
  let fixture: ComponentFixture<MenuformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuformComponent ]
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
