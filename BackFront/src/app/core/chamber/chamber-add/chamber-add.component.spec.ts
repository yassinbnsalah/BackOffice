import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamberAddComponent } from './chamber-add.component';

describe('ChamberAddComponent', () => {
  let component: ChamberAddComponent;
  let fixture: ComponentFixture<ChamberAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChamberAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChamberAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
