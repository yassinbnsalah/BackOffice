import { UniversiteService } from './../../service/universiteService/universite.service';
import { Universite } from './../../model/Universite';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, forkJoin, of } from 'rxjs';
import { StorageService } from 'src/app/AuthServices/storage.service';
import { Bloc } from 'src/app/model/Bloc';
import { Chamber } from 'src/app/model/Chamber';
import { Reservation } from 'src/app/model/Reservation';
import { User } from 'src/app/model/User';
import { BlocService } from 'src/app/service/BlocService/bloc.service';
import { ChamberService } from 'src/app/service/chamber.service';
import { ReservationService } from 'src/app/service/reservation.service';
import { UserService } from 'src/app/service/user.service';
import { Foyer } from 'src/app/model/Foyer';
import { FoyerService } from 'src/app/service/foyer.service';
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
    AllUsers : User[] , 
     BlocResolver: Bloc[] , 
    universites : Universite [],
    foyerListe : Foyer[] , 
    chamberListe : Chamber[] ,
  }>> {
  constructor(private reservationService: ReservationService,
    private storage: StorageService,
    private blocService : BlocService ,
    private chamberService: ChamberService,
    private universiteService : UniversiteService , 
    private foyerService : FoyerService , 
    private userService: UserService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<{
      chamberByReservation: Chamber, reservationDetails: Reservation,
      reservations: Reservation[],
      chambers: Chamber[], etudiants: User[],AllUsers : User[] , 
      BlocResolver : Bloc[] , foyerListe : Foyer[]
      universites : Universite [] , chamberListe : Chamber[]
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

    let  lisBlocs  = this.blocService.getBlocByuniversite(route.params["universite"]);

    let foyerListe ; 
    if (this.storage.getUser().role[0] == "ADMIN") {
      
      foyerListe =  this.foyerService.getAllFoyer()
    } else {
      foyerListe = this.foyerService.getFoyerByUniversiteName(route.params["universite"]);
    }
    const allUniversites = this.universiteService.getAllUniversite()


    const chamberListess = this.chamberService.getChamberByUniversiteName(route.params["universite"])
    return forkJoin({
      reservations: reservationsListe,
      chambers: chamberListe, etudiants: etudiantListe,
      reservationDetails: reservationDetails, chamberByReservation: chamberByReservation,
      AllUsers : AllUserss ,
       BlocResolver : lisBlocs , 
       foyerListe: foyerListe , 
       universites : allUniversites,
       chamberListe : chamberListess 
    });
    // return this.reservationService.getReservationByUniversiteName(route.params["universite"]);
  }
}
