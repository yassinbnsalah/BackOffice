import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Reservation } from 'src/app/model/Reservation';
import { ReservationService } from 'src/app/service/reservation.service';

@Component({
  selector: 'app-reservation-details',
  templateUrl: './reservation-details.component.html',
  styleUrls: ['./reservation-details.component.css']
})
export class ReservationDetailsComponent implements OnInit {
  reservation !: Reservation ;
  constructor(private serviceReservation: ReservationService,
    private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.params['id']);
    this.serviceReservation.getReservationByID(this.activatedRoute.snapshot.params['id']).subscribe((d) => {
      console.log(d);
      this.reservation = d ;

    })
  }

}
