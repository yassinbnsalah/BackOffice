import { DemandeService } from './../service/demande.service';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of, forkJoin } from 'rxjs';
import { Demande } from '../model/Demande';

@Injectable({
  providedIn: 'root'
})
export class DemandeRResolver implements 
Resolve<Observable<{
  demandes: Demande[],
}>> {
constructor(private demandeService : DemandeService
  ) { }

resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  Observable<{
    demandes: Demande[]
  }> {

  let demandeListe = this.demandeService.
    getListDemande(route.params["universite"]);

  return forkJoin({
    demandes: demandeListe
  });
  // return this.reservationService.getReservationByUniversiteName(route.params["universite"]);
}
}
