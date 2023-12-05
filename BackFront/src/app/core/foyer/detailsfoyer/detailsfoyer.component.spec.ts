import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsfoyerComponent } from './detailsfoyer.component';

describe('DetailsfoyerComponent', () => {
  let component: DetailsfoyerComponent;
  let fixture: ComponentFixture<DetailsfoyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsfoyerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsfoyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
