import {Component, OnInit} from '@angular/core';
import {Reservation} from "../../../model/Reservation";
import {Universite} from "../../../model/Universite";
import {ReservationService} from "../../../service/reservation.service";
import {Router} from "@angular/router";
import {UniversiteService} from "../../../service/universiteService/universite.service";

@Component({
  selector: 'app-universite-liste',
  templateUrl: './universite-liste.component.html',
  styleUrls: ['./universite-liste.component.css']
})
export class UniversiteListeComponent implements OnInit{
  universites !: Universite[] ;
  universite: Universite = new Universite();


  constructor(private universiteService : UniversiteService,
              private router : Router){
    this.universite.statuts = 'En attente';
  }
  ngOnInit() {
    this.getListeUniversite() ;
  }

  getListeUniversite() {
    this.universiteService.getAllUniversite().subscribe(
      (data) => {
        this.universites = data;
        console.log(data);
      },
      (error) => {
        console.error("Error fetching universites: ", error);
      }
    );
  }
  GoToUniversiteDetails(id:any){
    this.router.navigate(["universite/",id])
  }

  cycleStatus(universite: Universite) {
    switch (universite.statuts) {
      case 'En attente':
        this.updateStatus(universite, 'Accepté');
        break;
      case 'Accepté':
        this.updateStatus(universite, 'Refusé');
        break;
      case 'Refusé':
        this.updateStatus(universite, 'En attente');
        break;
      default:
        this.updateStatus(universite, 'En attente');
        break;
    }
  }

  updateStatus(universite: Universite, status: string) {
    this.universiteService.updateStatus(universite.idUniversite, status).subscribe(
      (updatedUniversite) => {
        // Handle the response as needed
        console.log('Status updated successfully:', updatedUniversite);

        // Update the local state to reflect the new status
        universite.statuts = status;
      },
      (error) => {
        console.error('Error updating status:', error);
      }
    );
  }


}
