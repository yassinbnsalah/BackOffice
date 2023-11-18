import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversiteUpdateComponent } from './universite-update.component';

describe('UniversiteUpdateComponent', () => {
  let component: UniversiteUpdateComponent;
  let fixture: ComponentFixture<UniversiteUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversiteUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniversiteUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
