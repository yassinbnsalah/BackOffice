import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperTestComponent } from './stepper-test.component';

describe('StepperTestComponent', () => {
  let component: StepperTestComponent;
  let fixture: ComponentFixture<StepperTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepperTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepperTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
