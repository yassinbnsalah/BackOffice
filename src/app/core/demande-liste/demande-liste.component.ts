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
  searchTerm = '';
  constructor(private demandeService: DemandeService,
    private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.demandes = this.activatedRoute.snapshot.data["data"].demandes ;
    this.filterData();
  }

  filterData() {
    if (this.searchTerm.trim() === '') {
      return this.demandes;
    }
    return this.demandes.filter(item => 
      item.name.toLowerCase().includes(this.searchTerm.toLowerCase()) || 
      item.email.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      item.typeChamber.toLowerCase().includes(this.searchTerm.toLowerCase())||
      item.anneeUniversitaire.toLowerCase().includes(this.searchTerm.toLowerCase()));
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
