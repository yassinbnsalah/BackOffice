import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversiteListeComponent } from './universite-liste.component';

describe('UniversiteListeComponent', () => {
  let component: UniversiteListeComponent;
  let fixture: ComponentFixture<UniversiteListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversiteListeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniversiteListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
