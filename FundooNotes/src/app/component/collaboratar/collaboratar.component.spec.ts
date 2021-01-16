import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaboratarComponent } from './collaboratar.component';

describe('CollaboratarComponent', () => {
  let component: CollaboratarComponent;
  let fixture: ComponentFixture<CollaboratarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollaboratarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollaboratarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
