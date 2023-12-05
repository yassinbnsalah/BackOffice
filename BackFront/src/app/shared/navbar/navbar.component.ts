import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {PopupComponent} from "../popup/popup.component";
import {MatDialog} from "@angular/material/dialog";
import {MyprofileComponent} from "../../core/ProfilePages/myprofile/myprofile.component";
import {ProfileComponent} from "../../core/ProfilePages/profile/profile.component";
import {User} from "../../model/User";
import {StorageService} from "../../AuthServices/storage.service";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user!: User;

  constructor(private dialog: MatDialog, private storage: StorageService, private userService: UserService, private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.loadUserData();
  }

  loadUserData() {
    let email = this.storage.getUser().email;
    this.userService.getUserByEmailReal(email).subscribe((data => {
      console.log(data);
      this.user = data;
      this.cdr.detectChanges(); // Trigger change detection
    }));
  }

  openPopUp() {
    this.dialog.open(MyprofileComponent, {
      width: '60%',
      height: '700',
    }).afterClosed().subscribe(() => {
      this.loadUserData();
    });
  }

  openPopUpProfile() {
    this.dialog.open(ProfileComponent, {
      width: '60%',
      height: '700',
    }).afterClosed().subscribe(() => {
      this.loadUserData();
    });
  }
}
