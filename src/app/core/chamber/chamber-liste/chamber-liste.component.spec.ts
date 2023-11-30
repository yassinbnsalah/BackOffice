import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamberListeComponent } from './chamber-liste.component';

describe('ChamberListeComponent', () => {
  let component: ChamberListeComponent;
  let fixture: ComponentFixture<ChamberListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChamberListeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChamberListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
