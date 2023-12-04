import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedUniversiteComponent } from './accepted-universite.component';

describe('AcceptedUniversiteComponent', () => {
  let component: AcceptedUniversiteComponent;
  let fixture: ComponentFixture<AcceptedUniversiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptedUniversiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcceptedUniversiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
