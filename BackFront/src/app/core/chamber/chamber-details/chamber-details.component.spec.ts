import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamberDetailsComponent } from './chamber-details.component';

describe('ChamberDetailsComponent', () => {
  let component: ChamberDetailsComponent;
  let fixture: ComponentFixture<ChamberDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChamberDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChamberDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
