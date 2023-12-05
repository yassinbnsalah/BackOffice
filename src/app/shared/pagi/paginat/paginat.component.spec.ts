import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatComponent } from './paginat.component';

describe('PaginatComponent', () => {
  let component: PaginatComponent;
  let fixture: ComponentFixture<PaginatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
