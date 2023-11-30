import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeListeComponent } from './demande-liste.component';

describe('DemandeListeComponent', () => {
  let component: DemandeListeComponent;
  let fixture: ComponentFixture<DemandeListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeListeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandeListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
