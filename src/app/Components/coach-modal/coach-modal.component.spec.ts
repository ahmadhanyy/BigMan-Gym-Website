import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachModalComponent } from './coach-modal.component';

describe('CoachModalComponent', () => {
  let component: CoachModalComponent;
  let fixture: ComponentFixture<CoachModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoachModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoachModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
