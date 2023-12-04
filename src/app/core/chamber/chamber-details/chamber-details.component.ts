// src/app/components/chamber-details/chamber-details.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bloc } from 'src/app/model/Bloc';
import { Chamber } from 'src/app/model/Chamber';
import { ChamberService } from 'src/app/service/chamber.service';

@Component({
  selector: 'app-chamber-details',
  templateUrl: './chamber-details.component.html',
  styleUrls: ['./chamber-details.component.css']
})
export class ChamberDetailsComponent implements OnInit {
  chamber!: Chamber;
  bloc!: Bloc;
    nbChambresDisponibles: number = 0;

  constructor(
    private serviceChamber: ChamberService,
    private activatedRoute: ActivatedRoute,
    private router: Router // Ajoutez le Router
  ) {}

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.params['id']);
    this.loadNbChambresDisponibles();
    
    this.serviceChamber.getChamberByID(this.activatedRoute.snapshot.params['id']).subscribe((d) => {
      console.log(d);
      this.chamber = d;
      this.serviceChamber.getBLocByChamber(this.activatedRoute.snapshot.params['id']).subscribe(
        (data) => {
          console.log(data.nomBloc);
          this.chamber.bloc = data
        },
        (error) => {
          console.error('Error getting bloc data:', error);
        }
      );
     /* if (d.bloc) {
        this.bloc = d.bloc;
        console.log('Chamber:', this.chamber);
        console.log('Bloc:', this.bloc);
        this.loadNbChambresDisponibles(); // Charger le nombre de chambres disponibles ici si nécessaire
      } else {
        console.error('Bloc data is missing.');
      }
      */
    });
  }
  
  
  

  GoToChamberDetails(id:any){
    this.router.navigate(["chamber/",id])
} 




redirectToUpdateChamber(id: number) {
  const universite = this.activatedRoute.snapshot.params['universite'];
  this.router.navigate([`${universite}/chamber/update/${id}`]);
}
private loadNbChambresDisponibles() {
 

  // Vérifiez si 'this.chamber' et 'this.bloc' sont définis avant d'appeler la méthode
  if (this.chamber && this.chamber.bloc) { 
  this.serviceChamber.getNbChambreParTypeEtBloc(this.chamber.typeC, this.bloc.idBloc).subscribe(
    (data) => {
      console.log(data);
      this.nbChambresDisponibles = data;
    },
    (error) => {
      console.error(error);
    }
  );
} else {
  console.error("Chamber or bloc data is undefined or has missing properties.");
}

}
}