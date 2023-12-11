// src/app/components/chamber-details/chamber-details.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from 'src/app/AuthServices/storage.service';
import { Bloc } from 'src/app/model/Bloc';
import { Chamber } from 'src/app/model/Chamber';
import { Reservation } from 'src/app/model/Reservation';
import { User } from 'src/app/model/User';
import { ChamberService } from 'src/app/service/chamber.service';

@Component({
  selector: 'app-chamber-details',
  templateUrl: './chamber-details.component.html',
  styleUrls: ['./chamber-details.component.css']
})
export class ChamberDetailsComponent implements OnInit {
  chamber!: Chamber;
  bloc!: Bloc;
  CurrentUser : User = this.storage.getUser()
  reservations !: Reservation[] ; 
  nbChambresDisponibles: number = 0;

  constructor(
    private storage : StorageService,
    private serviceChamber: ChamberService,
    private activatedRoute: ActivatedRoute,
    private router: Router // Ajoutez le Router
  ) { }

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.params['id']);
    this.loadNbChambresDisponibles();

    this.serviceChamber.getChamberByID(this.activatedRoute.snapshot.params['id']).subscribe((d) => {
      console.log(d);
      this.chamber = d;
      this.reservations = this.chamber.res
      this.serviceChamber.getBLocByChamber(this.activatedRoute.snapshot.params['id']).subscribe(
        (data) => {
          console.log(data.nomBloc);
          this.chamber.bloc = data
        },
        (error) => {
          console.error('Error getting bloc data:', error);
        }
      );
    });
  }
  private loadNbChambresDisponibles() {
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
    }
  }
  GoToReservationDetails(id: any) {
    if (this.CurrentUser.role[0] == "ADMIN") {
      this.router.navigate(["admin/reservation/", id])
    } else {
      this.router.navigate([this.activatedRoute.snapshot.params['universite'] + "/reservation/" + id])
    }
  }
}
