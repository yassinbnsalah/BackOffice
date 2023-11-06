import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Chamber } from 'src/app/model/Chamber';
import { Reservation } from 'src/app/model/Reservation';
import { ChamberService } from 'src/app/service/chamber.service';
import { ReservationService } from 'src/app/service/reservation.service';

@Component({
  selector: 'app-reservation-details',
  templateUrl: './reservation-details.component.html',
  styleUrls: ['./reservation-details.component.css']
})
export class ReservationDetailsComponent implements OnInit {
  reservation !: Reservation;
  chamber !: Chamber;
  currentRouter !: String;
  constructor(private serviceReservation: ReservationService, private router: Router,
    private activatedRoute: ActivatedRoute, private chamberService: ChamberService) { }
  ngOnInit(): void {
    this.currentRouter = this.router.url;
    console.log(this.activatedRoute.snapshot.params['id']);
    this.chamberService.getChamberByReservationID(this.activatedRoute.snapshot.params['id']).subscribe(
      (d) => {
        console.log("chamber of this reservation ");
        console.log(d);
        this.chamber = d;

      }
    )
    this.serviceReservation.getReservationByID(this.activatedRoute.snapshot.params['id']).subscribe(
      (d) => {
        console.log(d);
        this.reservation = d;
      }
    )
  }

}
