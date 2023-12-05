import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../AuthServices/auth.service";
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {
  forgetPasswordForm: FormGroup;

  constructor(private fb: FormBuilder,
              private authService:AuthService,
              private snackBar: MatSnackBar) {
    this.forgetPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  get email() {
    return this.forgetPasswordForm.get('email');
  }

  onSubmit() {

    if (this.forgetPasswordForm.valid) {
      const emailValue = this.forgetPasswordForm.value.email;
      let message = null;
      this.authService.ForgetPassword(emailValue).subscribe(
        () => {
          message ='Password reset email sent successfully'
          this.snackBar.open(message, 'Dismiss', { duration: 5000 });

        },
        (error) => {
          message ='Error sending password reset email:'
          if (error.status === 404) {
            message = 'User not found by the provided email';
          } else {
            console.error('Unhandled error:', error);
          }
          this.snackBar.open(message, 'Dismiss', { duration: 5000 });
          // You can also update the UI or show a user-friendly error message
        }

      );
    }
  }
}

