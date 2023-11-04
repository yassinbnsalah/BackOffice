import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reservation } from 'src/app/model/Reservation';
import { ReservationService } from 'src/app/service/reservation.service';

@Component({
  selector: 'app-reservation-liste',
  templateUrl: './reservation-liste.component.html',
  styleUrls: ['./reservation-liste.component.css']
})
export class ReservationListeComponent implements OnInit {
  reservations !: Reservation[] ; 
  constructor(private reservationService : ReservationService,
    private router : Router){}
  ngOnInit(): void {
    this.getListeReservation() ; 
  }

  getListeReservation(){
    this.reservationService.getAllReservation().subscribe((d)=>{
      this.reservations = d ;
      console.log(d);
      
    })
  }
  GoToReservationDetails(id:any){
      this.router.navigate(["reservation/",id])
  } 
}
