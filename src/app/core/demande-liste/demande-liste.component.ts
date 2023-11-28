import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Demande } from 'src/app/model/Demande';
import { DemandeService } from 'src/app/service/demande.service';

@Component({
  selector: 'app-demande-liste',
  templateUrl: './demande-liste.component.html',
  styleUrls: ['./demande-liste.component.css']
})
export class DemandeListeComponent implements OnInit {
  demandes !: Demande[]; 
  constructor(private demandeService: DemandeService,
    private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.getDemandeListeByUniversite();
  }

  getDemandeListeByUniversite() {
    this.demandeService.getListDemande(this.activatedRoute.snapshot.params["universite"]).subscribe((data) => {
      console.log(data);
      this.demandes = data ;
    })
  }
  updateDemandeState(state:any , idDemande:any){
    console.log("hey");
    
    this.demandeService.updateDemandeState(state,idDemande).subscribe((data)=>{
      console.log(data);
      let index = this.demandes.findIndex(obj => obj.idDemande === data.idDemande);
      this.demandes[index] = data
    })
  }
}
