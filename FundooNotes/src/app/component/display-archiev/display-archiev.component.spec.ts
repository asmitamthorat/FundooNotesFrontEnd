import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayArchievComponent } from './display-archiev.component';

describe('DisplayArchievComponent', () => {
  let component: DisplayArchievComponent;
  let fixture: ComponentFixture<DisplayArchievComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayArchievComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayArchievComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
