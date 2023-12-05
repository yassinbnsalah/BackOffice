import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  user: any; // Assuming you're passing the user data to this component

  constructor(
    public dialogRef: MatDialogRef<UserDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.user = data.user; // Make sure to pass the user data when opening the dialog
  }

  closeCard(): void {
    this.dialogRef.close();
  }


}
