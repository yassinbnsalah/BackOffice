import { Router } from '@angular/router';
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
  constructor(private authService : AuthService, private storage : StorageService,
    private router : Router ,
    private storageService: StorageService,private jwtService:JwtService){}
  ngOnInit(): void {
    console.log("is login ?"+this.storage.isLoggedIn());
    
    if(!this.storage.isLoggedIn() ){
      this.router.navigate(['/login'])
    }else{
      this.CurrentUser = this.storageService.getUser()!;
     this.role = this.storageService.getUser()!.role[0];
    }
   
  }

}
