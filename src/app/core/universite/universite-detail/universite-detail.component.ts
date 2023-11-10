import { Component } from '@angular/core';
import {Reservation} from "../../../model/Reservation";
import {ReservationService} from "../../../service/reservation.service";
import {ActivatedRoute} from "@angular/router";
import {Universite} from "../../../model/Universite";
import {UniversiteService} from "../../../service/universiteService/universite.service";

@Component({
  selector: 'app-universite-detail',
  templateUrl: './universite-detail.component.html',
  styleUrls: ['./universite-detail.component.css']
})
export class UniversiteDetailComponent {
  universite !: Universite ;
  constructor(private serviceUniversite: UniversiteService,
              private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.params['id']);
    this.serviceUniversite.getUniversiteByID(this.activatedRoute.snapshot.params['id']).subscribe((data) => {
      console.log(data);
      this.universite = data ;

    })
  }
}