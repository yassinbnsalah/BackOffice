import { Component, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { StorageService } from 'src/app/AuthServices/storage.service';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  @ViewChild('fileInput') fileInput!: ElementRef;
  user!: User;
  selectedFile: File | null = null;

  constructor(private storage: StorageService, private userService: UserService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    let email = this.storage.getUser().email;
    this.userService.getUserByEmailReal(email).subscribe((data => {
      console.log(data);
      this.user = data;
      this.cdr.detectChanges(); // Trigger change detection
    }));
  }

  onMiniFabClick() {
    this.fileInput.nativeElement.click();
  }

  onFileSelected(event: any) {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      console.log("Selected file:", selectedFile);
      this.uploadImage(this.user.id, selectedFile);
    }
  }

  uploadImage(idUser: any, file: File) {
    console.log("Uploading image...");

    let formData = new FormData();
    formData.append('file', file, file.name);
    this.userService.uploadImg(formData, idUser).subscribe(
      (data) => {
        console.log("Uploaded image successfully");
        this.user.imagebyte = data.imagebyte;
        this.cdr.detectChanges();
      },
      (error) => {
        console.error("Error uploading image:", error);
      }
    );
  }
}
