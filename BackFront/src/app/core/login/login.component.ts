import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { AuthService } from 'src/app/AuthServices/auth.service';
import { JwtService } from 'src/app/AuthServices/jwt.service';
import { StorageService } from 'src/app/AuthServices/storage.service';

import { AuthentificaitonService } from 'src/app/service/authentificaiton.service';
import { UniversiteService } from 'src/app/service/universiteService/universite.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  loginForm!: FormGroup;
  roles: string[] = ["ROLE_USER"];

  constructor(
    private authService: AuthService,
    private router: Router,
    private universiteService: UniversiteService,
    private storageService: StorageService,
    private jwtService: JwtService,
    private snackBar: MatSnackBar,
    private formBuilder: FormBuilder // Inject the form builder
  ) { }

  ngOnInit(): void {
    // Initialize the reactive form with validators
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  login() {
    if (this.loginForm.valid) {
      const credentials = this.loginForm.value;

      this.authService.Login(credentials).subscribe(
        (data: any) => {
          const token = data.accessToken;
          const decodedToken = this.jwtService.decodeToken(token);

          this.storageService.saveUser(decodedToken);
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.roles = decodedToken.role;

          if (this.roles.includes("ADMIN")) {
            this.router.navigate(['admin/etudiantliste']);
            this.snackBar.open('Logged in successfully', 'Dismiss', {
              duration: 5000,
              panelClass: 'success-snackbar',
              verticalPosition: 'top',
              horizontalPosition: 'center',
            });
          } else {
            this.universiteService.getUniByEmail(decodedToken.email).subscribe(
              (universityData) => {
                const universityName = universityData.nomUniversite;
                this.router.navigate([universityName + '/reservation']);
              },
              (universityError) => {
                this.snackBar.open('Error retrieving university data', 'Dismiss', { duration: 5000 });
              }
            );
          }
        },
        (error) => {
        console.error('Login error:', error);

        if (error.status === 401) {
          this.errorMessage = 'Unauthorized: ' + error.error.message;
        } else if (error.status === 403) {
          this.errorMessage = 'Forbidden: ' + error.error.message;
        } else if (error.status === 404) {
          this.errorMessage = 'User not found: ' + error.error.message;
        } else {
          this.errorMessage = 'Unknown error: ' + error.error.message;
        }

        this.isLoginFailed = true;
        this.snackBar.open(this.errorMessage, 'Dismiss', { duration: 5000 });
        }
      );
    }
  }
}
