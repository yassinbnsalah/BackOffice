import {Component, EventEmitter, Inject, Input, Output} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent {
  @Input() email!: string;
  @Input() title!: string;
  @Input() message!: string;
  @Output() dialogResult = new EventEmitter<boolean>();

  constructor(
    public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogResult.emit(false);
    this.dialogRef.close();
  }

  onYesClick(): void {
    this.dialogResult.emit(true);
    this.dialogRef.close();
  }

}