import { ActivatedRoute, Router } from '@angular/router';
import { Chamber } from './../../../model/Chamber';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';
import { ChamberService } from 'src/app/service/chamber.service';
import { UserService } from 'src/app/service/user.service';
import { StorageService } from 'src/app/AuthServices/storage.service';
import { ReservationService } from 'src/app/service/reservation.service';
import { BlocService } from 'src/app/service/BlocService/bloc.service';

@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.css']
})
export class AddReservationComponent implements OnInit {
  DisplayLoad: boolean = true;
  isChecked: boolean = false;
  chambers !: Chamber[];
  etudiants !: User[];
  nbAvailable !: number;
  etudiantsInReservation !: User[]
  reservedChamber !: Chamber;
  CinListe: number[] = [];
  autoRenew: boolean = false;
  constructor(private serviceChamber: ChamberService,
    private serviceReservation: ReservationService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private blocService: BlocService,
    private storage: StorageService,
    private userService: UserService) { }
  ngOnInit(): void {
    this.chambers = this.activatedRoute.snapshot.data['data'].chambers;
    this.chambers.forEach((chamber, index) => {
      this.blocService.getBlocByChamberId(chamber.idChamber).subscribe((data) => {
        this.chambers[index].bloc = data
      })
    })
    this.etudiants = this.activatedRoute.snapshot.data['data'].etudiants;
  }

  extractCinList() {
    this.etudiantsInReservation.forEach(res => {
      this.CinListe.push(res.cin)
    })
  }
  updateAutoRenew(){
    this.autoRenew = ! this.autoRenew ;
    console.log(this.autoRenew);
    
  }
  saveReservation() {
    if (this.reservedChamber != null && this.etudiants != null) {
      this.DisplayLoad = false;
      this.extractCinList()

      this.serviceReservation.CreateReservation(
        this.reservedChamber.numerochamber, this.CinListe , this.autoRenew).subscribe(
          (data) => {
            console.log(data);
            this.router.navigate([this.activatedRoute.snapshot.params['universite'] + "/reservation"])
          }
        )
    }else{
      console.log("errooor while adding reservation");

    }

  }

  pickReservedChamber(chamber: Chamber) {
    console.log("reserved :" + chamber.idChamber);
    this.reservedChamber = chamber
    console.log(chamber.res);
    let nbplacePicked = 0;
    chamber.res.forEach(reservation => {
      if (reservation.estValide) {
        nbplacePicked = nbplacePicked + 1
      }
    })
    console.log(nbplacePicked);

    if (chamber.typeC == "Simple") { this.nbAvailable = 1 - nbplacePicked; }
    else if (chamber.typeC == "Double") { this.nbAvailable = 2 - nbplacePicked; }
    else if (chamber.typeC == "Triple") { this.nbAvailable = 3 - nbplacePicked; }
    console.log(this.nbAvailable);

    this.etudiantsInReservation = []
  }

  pickEtudiants(etudiant: any) {
    const existingIndex = this.etudiantsInReservation.indexOf(etudiant);

    if (existingIndex !== -1) {
      // If the student is already in the list, remove them
      this.etudiantsInReservation.splice(existingIndex, 1);
    } else {
      // If the student is not in the list, add them
      if (this.etudiantsInReservation.length < this.nbAvailable) {
        this.etudiantsInReservation.push(etudiant);
      }
    }

    console.log(this.etudiantsInReservation);
  }
  /*pickEtudiants(etudiant : any){
    
    let existe = false ;
    if(this.etudiantsInReservation.indexOf(etudiant)!=-1){
      this.etudiantsInReservation = this.etudiantsInReservation.filter(et => et !== etudiant);
      existe = true ;
    } 
    if(this.etudiantsInReservation.length<this.nbAvailable && !existe)
      this.etudiantsInReservation.push(etudiant)
    console.log(this.etudiantsInReservation);
  }
  etudiantIsSelected(etudiant: any): boolean {
    console.log(this.etudiantsInReservation.includes(etudiant));
    return this.etudiantsInReservation.includes(etudiant);
  }
  */
  getChamberList() {
    this.serviceChamber.getAvailabeChamberByUniversiteName
      (this.activatedRoute.snapshot.params['universite']).subscribe(
        (data) => {
          console.log(data);

          this.chambers = data;
        }
      )
  }

  getEtudiantList() {
    this.userService.getUserbyUniversiteAndRole
      (this.activatedRoute.snapshot.params['universite'],
        "ETUDIANT").subscribe(
          (data) => {
            console.log(data);
            this.etudiants = data;
          }
        )
  }



}
