import { ActivatedRoute, Router } from '@angular/router';
import { Chamber } from './../../../model/Chamber';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';
import { ChamberService } from 'src/app/service/chamber.service';
import { UserService } from 'src/app/service/user.service';
import { StorageService } from 'src/app/AuthServices/storage.service';
import { ReservationService } from 'src/app/service/reservation.service';

@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.css']
})
export class AddReservationComponent implements OnInit {
  DisplayLoad : boolean = true; 
  chambers !: Chamber[];
  etudiants !: User[] ;
  nbAvailable !: number; 
  etudiantsInReservation !: User[]
  reservedChamber !: Chamber;
  CinListe:number[]= [];
  constructor(private serviceChamber: ChamberService,
    private serviceReservation : ReservationService, 
    private activatedRoute: ActivatedRoute,
    private router : Router , 
    private storage : StorageService,
    private userService: UserService) { }
  ngOnInit(): void {
    this.chambers =  this.activatedRoute.snapshot.data['data'].chambers;
    this.etudiants =  this.activatedRoute.snapshot.data['data'].etudiants;
   //this.getChamberList();
  //  this.getEtudiantList();
  }

  extractCinList(){
    this.etudiantsInReservation.forEach(res =>{
      this.CinListe.push(res.cin)
    })
    console.log(this.CinListe);
    
  }
  saveReservation(){
    this.DisplayLoad = false ; 
    this.extractCinList()
    this.serviceReservation.CreateReservation(
      this.reservedChamber.numerochamber, this.CinListe).subscribe(
        (data)=>{
          console.log("finaly reservation");
          console.log(data);
          this.router.navigate([this.activatedRoute.snapshot.params['universite']+"/reservation"])
        }
      )
  }

  pickReservedChamber(chamber: Chamber) {
    console.log("reserved :" + chamber.idChamber);
    this.reservedChamber = chamber
    console.log(chamber.res);
    let nbplacePicked = 0;
    chamber.res.forEach(reservation =>{
        if(reservation.estValide){
          nbplacePicked = nbplacePicked +1 
        }
    })
    if(chamber.typeC=="Simple"&&nbplacePicked==0){
      this.nbAvailable = 1; 
    }else if(chamber.typeC=="Double"&&nbplacePicked<=1){

      this.nbAvailable = 2; 
    }else if(chamber.typeC=="Triple" && nbplacePicked<=2){
      this.nbAvailable = 3;
    }
    this.etudiantsInReservation = []
  }
  pickEtudiants(etudiant : any){
    let existe = false ;
    if(this.etudiantsInReservation.indexOf(etudiant)!=-1){
      this.etudiantsInReservation = this.etudiantsInReservation.filter(et => et !== etudiant);
      existe = true ;
    } 
    if(this.etudiantsInReservation.length<this.nbAvailable && !existe)
      this.etudiantsInReservation.push(etudiant)
    console.log(this.etudiantsInReservation);
  }

  getChamberList() {
    this.serviceChamber.getAvailabeChamberByUniversiteName
    (this.activatedRoute.snapshot.params['universite']).subscribe(
      (data) => {
        console.log(data);
        
        this.chambers = data;
      }
    )
  }

  getEtudiantList(){
    this.userService.getUserbyUniversiteAndRole
    (this.activatedRoute.snapshot.params['universite'],
    "ETUDIANT").subscribe(
      (data)=>{
        console.log(data);
        this.etudiants=data ;
      }
    )
  }



}
