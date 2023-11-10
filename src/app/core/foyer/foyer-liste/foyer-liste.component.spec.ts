import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoyerListeComponent } from './foyer-liste.component';

describe('FoyerListeComponent', () => {
  let component: FoyerListeComponent;
  let fixture: ComponentFixture<FoyerListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoyerListeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoyerListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
