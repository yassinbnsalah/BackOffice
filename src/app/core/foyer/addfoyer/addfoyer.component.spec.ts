import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfoyerComponent } from './addfoyer.component';

describe('AddfoyerComponent', () => {
  let component: AddfoyerComponent;
  let fixture: ComponentFixture<AddfoyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddfoyerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddfoyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
