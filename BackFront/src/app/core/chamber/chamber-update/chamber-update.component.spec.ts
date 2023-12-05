import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamberUpdateComponent } from './chamber-update.component';

describe('ChamberUpdateComponent', () => {
  let component: ChamberUpdateComponent;
  let fixture: ComponentFixture<ChamberUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChamberUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChamberUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
