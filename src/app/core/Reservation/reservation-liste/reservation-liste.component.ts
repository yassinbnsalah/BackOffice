import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from 'src/app/AuthServices/storage.service';
import { Reservation } from 'src/app/model/Reservation';
import { ReservationService } from 'src/app/service/reservation.service';

@Component({
  selector: 'app-reservation-liste',
  templateUrl: './reservation-liste.component.html',
  styleUrls: ['./reservation-liste.component.css']
})
export class ReservationListeComponent implements OnInit {
  CurrentUser: any;
  reservations !: Reservation[] ; 
  currentRouter !: String ; 
  constructor(private reservationService : ReservationService,
    private storage : StorageService,
    private router : Router){}
  ngOnInit(): void {
    this.getListeReservation() ; 
    this.currentRouter = this.router.url  ;
    console.log(this.currentRouter);
    
  }

  getListeReservation(){
    
    this.reservationService.getAllReservation().subscribe((d)=>{
      this.reservations = d ;
      console.log(d);
      
    })
  }
  GoToReservationDetails(id:any){
    this.CurrentUser = this.storage.getUser();
    if(this.CurrentUser.role[0]== "ADMIN"){
      this.router.navigate(["admin/reservation/",id])
    }else{
      this.router.navigate(["reservation/",id])
    }
     
  } 
}
