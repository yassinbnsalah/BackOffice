import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/AuthServices/storage.service';
import { MyProfileComponent } from 'src/app/core/ProfilePages/my-profile/my-profile.component';
import { ProfileComponent } from 'src/app/core/ProfilePages/profile/profile.component';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user!: User;
  constructor(private dialog: MatDialog, private storage: StorageService,
     private userService: UserService, private cdr: ChangeDetectorRef,
    private router : Router){}

    ngOnInit(): void {
      if(!this.storage.isLoggedIn() ){
        this.router.navigate(['/login'])
      }
    }
    loadUserData() {
      let email = this.storage.getUser().email;
      this.userService.getUserByEmailReal(email).subscribe((data => {
        console.log(data);
        this.user = data;
        this.cdr.detectChanges(); // Trigger change detection
      }));
    }
  logout(){
    this.storage.clean();
    this.router.navigate(['/login'])
  }
  openPopUp() {
    this.dialog.open(MyProfileComponent, {
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
