import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, forkJoin, of } from 'rxjs';
import { StorageService } from 'src/app/AuthServices/storage.service';
import { Chamber } from 'src/app/model/Chamber';
import { Reservation } from 'src/app/model/Reservation';
import { User } from 'src/app/model/User';
import { ChamberService } from 'src/app/service/chamber.service';
import { ReservationService } from 'src/app/service/reservation.service';
import { UserService } from 'src/app/service/user.service';
//**************************** RESERVATION MANAGMENT RESOLVER  */
@Injectable({
  providedIn: 'root'
})
export class LoaderResolver implements
  Resolve<Observable<{
    chamberByReservation: Chamber,
    reservationDetails: Reservation,
    reservations: Reservation[],
    chambers: Chamber[],
    etudiants: User[],
    AllUsers : User[]
  }>> {
  constructor(private reservationService: ReservationService,
    private storage: StorageService,
    private chamberService: ChamberService,
    private userService: UserService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<{
      chamberByReservation: Chamber, reservationDetails: Reservation,
      reservations: Reservation[],
      chambers: Chamber[], etudiants: User[],AllUsers : User[]
    }> {

    let chamberByReservation = this.chamberService.
      getChamberByReservationID(route.params["id"])

    const reservationDetails = this.reservationService.
      getReservationByID(route.params["id"])
    let reservationsListe;
    if (this.storage.getUser().role[0] == "ADMIN") {
      reservationsListe = this.reservationService.getAllReservation();
    } else {
      console.log("loading reservation");

      reservationsListe = this.reservationService.
        getReservationByUniversiteName(route.params["universite"]);
    }


    const chamberListe = this.chamberService.
      getAvailabeChamberByUniversiteName(route.params["universite"]);

      
    const etudiantListe = this.userService.
      getUserbyUniversiteAndRole(route.params["universite"],
        "ETUDIANT");

    const AllUserss = this.userService.getUsers() ; 
    return forkJoin({
      reservations: reservationsListe,
      chambers: chamberListe, etudiants: etudiantListe,
      reservationDetails: reservationDetails, chamberByReservation: chamberByReservation,
      AllUsers : AllUserss
    });
    // return this.reservationService.getReservationByUniversiteName(route.params["universite"]);
  }
}
