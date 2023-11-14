import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoyerlisteComponent } from './foyerliste.component';

describe('FoyerlisteComponent', () => {
  let component: FoyerlisteComponent;
  let fixture: ComponentFixture<FoyerlisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoyerlisteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoyerlisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
