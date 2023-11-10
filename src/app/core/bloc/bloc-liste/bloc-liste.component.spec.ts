import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocListeComponent } from './bloc-liste.component';

describe('BlocListeComponent', () => {
  let component: BlocListeComponent;
  let fixture: ComponentFixture<BlocListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlocListeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlocListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
