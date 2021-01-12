import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashBoardFinalComponent } from './dash-board-final.component';

describe('DashBoardFinalComponent', () => {
  let component: DashBoardFinalComponent;
  let fixture: ComponentFixture<DashBoardFinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashBoardFinalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashBoardFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
