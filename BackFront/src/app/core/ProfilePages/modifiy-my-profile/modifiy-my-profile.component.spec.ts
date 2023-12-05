import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifiyMyProfileComponent } from './modifiy-my-profile.component';

describe('ModifiyMyProfileComponent', () => {
  let component: ModifiyMyProfileComponent;
  let fixture: ComponentFixture<ModifiyMyProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifiyMyProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifiyMyProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
