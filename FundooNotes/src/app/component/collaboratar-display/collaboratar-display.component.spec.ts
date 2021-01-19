import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaboratarDisplayComponent } from './collaboratar-display.component';

describe('CollaboratarDisplayComponent', () => {
  let component: CollaboratarDisplayComponent;
  let fixture: ComponentFixture<CollaboratarDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollaboratarDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollaboratarDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
