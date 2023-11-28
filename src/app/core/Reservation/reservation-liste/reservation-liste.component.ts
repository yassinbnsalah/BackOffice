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
  CurrentUser = this.storage.getUser();
  reservations !: Reservation[];
  currentRouter !: String;
  searchTerm = '';
  constructor(private reservationService: ReservationService,
    private activatedRoute: ActivatedRoute,
    private storage: StorageService,
    private router: Router) { }
  ngOnInit(): void {
    //this.getListeReservation() ; 
    this.currentRouter = this.router.url;
    //console.log(this.currentRouter);
    this.reservations =  this.activatedRoute.snapshot.data['data'].reservations;
    console.log(this.reservations);
    
    this.filterData()
  }
  filterData() {
    if (this.searchTerm.trim() === '') {
      return this.reservations;
    }
    return this.reservations.filter(item => 
      item.idReservation.toLowerCase().includes(this.searchTerm.toLowerCase()) || 
      item.etudiants[0].nomEt.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      item.etudiants[0].email.toLowerCase().includes(this.searchTerm.toLowerCase()) );
  }
  GoToAddReservation() { return this.router.navigate([this.activatedRoute.snapshot.params['universite'] + "/reservation/add"]) }

 /* getListeReservation() {
    if (this.CurrentUser.role[0] == "ADMIN") {
      this.reservationService.getAllReservation().subscribe((d) => {
        console.log(d);
        this.reservations = d;
      })
    } else {
      console.log("hahaha");
      this.reservationService.getReservationByUniversiteName(this.activatedRoute.snapshot.params["universite"]).subscribe((d) => {
        console.log(d);
        this.reservations = d;
      })
    }
  }*/
  GoToReservationDetails(id: any) {
    this.CurrentUser
    if (this.CurrentUser.role[0] == "ADMIN") {
      this.router.navigate(["admin/reservation/", id])
    } else {
      this.router.navigate([this.activatedRoute.snapshot.params['universite'] + "/reservation/" + id])
    }

  }
}
