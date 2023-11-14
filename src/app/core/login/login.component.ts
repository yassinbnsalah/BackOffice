import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/AuthServices/auth.service';
import { JwtService } from 'src/app/AuthServices/jwt.service';
import { StorageService } from 'src/app/AuthServices/storage.service';
import { AuthentificaitonService } from 'src/app/service/authentificaiton.service';
import { UniversiteService } from 'src/app/service/universiteService/universite.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  credentials = {
    email:"", 
    password:""
  }
  roles: string = "ROLE_USER";
  constructor(private authService : AuthService, private router : Router, 
    private universiteService:UniversiteService , 
    private storageService: StorageService,private jwtService:JwtService){}

  login(){
    console.log(this.credentials);
    this.authService.Login(this.credentials).subscribe(
      (data:any) =>{
        const token = data.accessToken;

        const decodedToken = this.jwtService.decodeToken(token);
        console.log('Decoded Token:', decodedToken); // Log the decoded token

        this.storageService.saveUser(decodedToken);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = decodedToken.role;
        console.log(this.roles);
        if(this.roles[0] == "ADMIN"){
          this.router.navigate(['admin/reservation'])
        }else{
          this.universiteService.getUniByEmail(decodedToken.email).subscribe(
            (data) =>{
              console.log(data);
              this.router.navigate([data.nomUniversite+'/reservation'])
            }
          )
        //  this.router.navigate(['reservation'])
        }
      
        /// REDIRECTION AGENT AND ADMIN 
      },
      (error)=>{
        console.log("invalid credentials");
      }
    )
    
  }
}
