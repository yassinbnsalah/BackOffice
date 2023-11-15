import { ActivatedRoute } from '@angular/router';
import { Chamber } from './../../../model/Chamber';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';
import { ChamberService } from 'src/app/service/chamber.service';
import { UserService } from 'src/app/service/user.service';
import { StorageService } from 'src/app/AuthServices/storage.service';

@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.css']
})
export class AddReservationComponent implements OnInit {
  chambers !: Chamber[];
  etudiants !: User[] ;
  nbAvailable !: number; 
  reservedChamber !: Chamber;
  constructor(private serviceChamber: ChamberService,
    private activatedRoute: ActivatedRoute,
    private storage : StorageService,
    private userService: UserService) { }
  ngOnInit(): void {
    this.getChamberList();
    this.getEtudiantList();
  }

  pickReservedChamber(chamber: Chamber) {
    console.log("reserved :" + chamber.idChamber);
    this.reservedChamber = chamber
    console.log(chamber.res);
    let nbplacePicked = 0;
    chamber.res.forEach(element =>{
        if(element.estValide){
          nbplacePicked = nbplacePicked +1 
        }
        
    })
    
  }
  pickEtudiants(etudiant : any){
    console.log("Included Student",etudiant);
  }

  getChamberList() {
    this.serviceChamber.getChamberByUniversiteName(this.activatedRoute.snapshot.params['universite']).subscribe(
      (data) => {
        console.log(data);
        
        this.chambers = data;
      }
    )
  }

  getEtudiantList(){
    this.userService.getUserbyUniversiteAndRole(this.activatedRoute.snapshot.params['universite'],
    "ETUDIANT").subscribe(
      (data)=>{
        console.log(data);
        
        this.etudiants=data ;
        
      }
    )
  }



}
