import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyMyProfileComponent } from './modify-my-profile.component';

describe('ModifyMyProfileComponent', () => {
  let component: ModifyMyProfileComponent;
  let fixture: ComponentFixture<ModifyMyProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyMyProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyMyProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
