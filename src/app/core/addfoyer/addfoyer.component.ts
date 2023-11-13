import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Foyer } from 'src/app/model/Foyer';
import { FoyerService } from 'src/app/service/foyer.service';

@Component({
  selector: 'app-addfoyer',
  templateUrl: './addfoyer.component.html',
  styleUrls: ['./addfoyer.component.css']
})

export class AddfoyerComponent {
  foyer: Foyer = new Foyer();

  constructor(private foyerService : FoyerService,
    private router: Router) {} // Fix the parameter name

  ajout() {
    this.foyerService.addFoyer(this.foyer).subscribe(
      (response) => {
        console.log('Foyer added:', response);
        this.foyer = new Foyer();
      },
      (error) => {
        console.error('Error:', error);
      }
    );

    this.router.navigate(["/foyer"]);
       

  }
 
  
}
