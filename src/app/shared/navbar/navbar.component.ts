import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/AuthServices/storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private storage : StorageService,
    private router : Router){}

    ngOnInit(): void {
      if(!this.storage.isLoggedIn() ){
        this.router.navigate(['/login'])
      }
    }

  logout(){
    this.storage.clean();
    this.router.navigate(['/login'])
  }
}
