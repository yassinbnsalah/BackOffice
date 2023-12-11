import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/AuthServices/auth.service';
import { StorageService } from 'src/app/AuthServices/storage.service';
import { UserService } from 'src/app/service/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-email-change-password',
  templateUrl: './email-change-password.component.html',
  styleUrls: ['./email-change-password.component.css']
})
export class EmailChangePasswordComponent {
  passwordForm: FormGroup;
  email: string = this.ac.snapshot.params['email'];

  constructor(
    private fb: FormBuilder,
    private storage: StorageService,
    private userService: UserService,
    private authService: AuthService,
    private ac: ActivatedRoute,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.passwordForm = this.fb.group({
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
      repeatPassword: ['', Validators.required],
    }, {
      validator: this.passwordMatchValidator
    });
  }

  passwordMatchValidator(group: FormGroup) {
    const newPassword = group.get('newPassword')!.value;
    const repeatPassword = group.get('repeatPassword')!.value;

    return newPassword === repeatPassword ? null : { mismatch: true };
  }

  onChangePassword(newPass: string): void {
    if (this.passwordForm.valid) {
      this.userService.resetPassword(this.email, newPass).subscribe(
        (response) => {
          if (response.includes('Password reset successfull')) {
            console.log('Password reset successfully', response);
            this.snackBar.open('Password reset successfully', 'Dismiss', { duration: 5000 });
            this.router.navigate(['/login']);
          } else {
            this.snackBar.open('An unexpected error occurred while resetting password', 'Dismiss', { duration: 5000 });
          }
        },
        (error) => {
          if (error.status === 404) {
            this.snackBar.open('User not found', 'Dismiss', { duration: 5000 });
          } else if (error.status === 400) {
            this.snackBar.open('Invalid input', 'Dismiss', { duration: 5000 });
          } else {
            this.snackBar.open('An error occurred while resetting password', 'Dismiss', { duration: 5000 });
          }
        }
      );
      console.log('Form submitted successfully');
    }
  }

}
