import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailChangePasswordComponent } from './email-change-password.component';

describe('EmailChangePasswordComponent', () => {
  let component: EmailChangePasswordComponent;
  let fixture: ComponentFixture<EmailChangePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailChangePasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
