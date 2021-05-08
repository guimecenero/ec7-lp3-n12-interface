import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawRegisterComponent } from './draw-register.component';

describe('DrawRegisterComponent', () => {
  let component: DrawRegisterComponent;
  let fixture: ComponentFixture<DrawRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrawRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
