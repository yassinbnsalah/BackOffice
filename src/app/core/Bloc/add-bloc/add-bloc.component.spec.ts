import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBlocComponent } from './add-bloc.component';

describe('AddBlocComponent', () => {
  let component: AddBlocComponent;
  let fixture: ComponentFixture<AddBlocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBlocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBlocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
