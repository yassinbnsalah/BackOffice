import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {StorageService} from "../../../AuthServices/storage.service";
import {UserService} from "../../../service/user.service";
import {AuthService} from "../../../AuthServices/auth.service";
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  passwordForm: FormGroup;
  email : string = this.storage.getUser().email;

  constructor(private fb: FormBuilder,
              private storage :StorageService,
              private userService : UserService  ,
              private authService: AuthService,
              private snackBar: MatSnackBar
  ) {

    this.passwordForm = this.fb.group({
      oldPassword: ['', Validators.required],
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

  onChangePassword(oldPass: string, newPass: string): void {
    if (this.passwordForm.valid) {
      this.userService.changePassword(this.email, oldPass, newPass).subscribe(
        () => {
          this.openSnackBar('Password changed successfully', 'Close');
        },
        (error) => {
          if (error.status === 406) {
            this.openSnackBar('Old password does not match the current password', 'Close');
          } else {
            this.openSnackBar('Error changing password. Please try again.', 'Close');
          }
        }
      );
      console.log('Form submitted successfully');
    }
  }


  openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      duration: 5000, // Display for 5 seconds
      verticalPosition: 'top', // Position at the top
      horizontalPosition: 'center' // Position at the center
    });
  }
}

