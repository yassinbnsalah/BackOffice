import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/AuthServices/auth.service';
import { JwtService } from 'src/app/AuthServices/jwt.service';
import { StorageService } from 'src/app/AuthServices/storage.service';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css']
})
export class SideComponent implements OnInit {

  role !: string; 
  CurrentUser!: any ;
  constructor(private authService : AuthService, private storageService: StorageService,private jwtService:JwtService){}
  ngOnInit(): void {
    this.CurrentUser = this.storageService.getUser();
    this.role = this.CurrentUser.role[0];
  }

}
