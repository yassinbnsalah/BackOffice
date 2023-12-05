import { Component } from '@angular/core';
import {User} from "../../../model/User";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../../service/user.service";
import {StorageService} from "../../../AuthServices/storage.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-modify-my-profile',
  templateUrl: './modify-my-profile.component.html',
  styleUrls: ['./modify-my-profile.component.css']
})
export class ModifyMyProfileComponent {
  userEmail!: string;
  user!: User;
  myForm!: FormGroup;
  step: number = 0; // Initialize step to 0
  isFormValid: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private storage: StorageService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.userEmail = this.storage.getUser().email;
    this.getUserDetails();
  }

  getUserDetails() {
    this.userService.getUserByEmailReal(this.userEmail).subscribe(
      (user) => {
        this.user = user;
        console.log(user);
        this.initializeForm();
      },
      (error) => {
        console.error('Error fetching user details:', error);
      }
    );
  }

  initializeForm() {
    this.myForm = this.fb.group({
      nomEt: [
        this.user.nomEt,
        [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]
      ],
      prenomEt: [
        this.user.prenomEt,
        [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]
      ],
      cin: [
        this.user.cin,
        [
          Validators.required,
          Validators.pattern(/^[0-9]{8}$/)
        ]
      ],
      ecole: [this.user.ecole, Validators.required],
      dateNaissance: [
        new Date(this.user.dateNaissance),
        [Validators.required, this.validateDateOfBirth]
      ],

      createdAt: [this.user.createdAt],
      role: [this.user.role],
      email: [this.user.email],
      enabled: [this.user.enabled],
    });
    this.myForm.valueChanges.subscribe(() => {
      this.isFormValid = this.myForm.dirty && this.myForm.valid;
    });
  }


  validateDateOfBirth(control: any) {
    const selectedDate = new Date(control.value);
    const currentDate = new Date();

    return selectedDate <= currentDate ? null : { futureDate: true };
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  updateUser() {
    const formValues = this.myForm.value;

    this.user.nomEt = formValues.nomEt;
    this.user.prenomEt = formValues.prenomEt;
    this.user.cin = formValues.cin;
    this.user.ecole = formValues.ecole;
    this.user.dateNaissance = formValues.dateNaissance;

    this.userService.updateUser(this.user).subscribe(
      (updatedUser) => {
        console.log('User updated:', updatedUser);
        this.snackBar.open('User ' + updatedUser.email + ' updated successfully ', 'dismiss', { duration: 5000 });
      },
      (error) => {
        console.error('Error updating this user:', error);
        this.snackBar.open('Error updating this user ' + this.user.email, 'Dismiss', { duration: 5000 });
      },
      () => {
        console.log('Update user request completed.');
      }
    );
  }

}
