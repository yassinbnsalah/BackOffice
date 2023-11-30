import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Chamber } from 'src/app/model/Chamber';
import { Etudiant } from 'src/app/model/Etudiant';
import { Reservation } from 'src/app/model/Reservation';
import { User } from 'src/app/model/User';
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
  etudiants !: User[];
  constructor(private serviceReservation: ReservationService, private router: Router,
    private activatedRoute: ActivatedRoute, private chamberService: ChamberService) { }
  ngOnInit(): void {
    this.currentRouter = this.router.url;
    console.log(this.activatedRoute.snapshot.params['id']);
   /* this.chamberService.getChamberByReservationID(this.activatedRoute.snapshot.params['id']).subscribe(
      (d) => {
        console.log("chamber of this reservation ");
        console.log(d);
        this.chamber = d;

      }
    )*/
    this.chamber = this.activatedRoute.snapshot.data['data'].chamberByReservation;
    this.reservation = this.activatedRoute.snapshot.data['data'].reservationDetails;
    this.etudiants = this.reservation.etudiants ;
    /*this.serviceReservation.getReservationByID(this.activatedRoute.snapshot.params['id']).subscribe(
      (d) => {
        console.log(d);
        this.reservation = d;
        this.etudiants = d.etudiants;
        console.log(this.etudiants);

      }
    )*/
  }
  updateReservationState(state: any) {
    console.log("update Reservation State  ", state);
    this.serviceReservation.updateReservationState(this.activatedRoute.snapshot.params['id'], state).subscribe((d) => {
      console.log("reservation State update successfully");
      this.reservation.status = state;

    })

  }

}
