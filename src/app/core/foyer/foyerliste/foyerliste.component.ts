import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Foyer } from 'src/app/model/Foyer';
import { FoyerService } from 'src/app/service/foyer.service';


@Component({
  selector: 'app-foyerliste',
  templateUrl: './foyerliste.component.html',
  styleUrls: ['./foyerliste.component.css']
})
export class FoyerlisteComponent implements OnInit {
  foyers !: Foyer[] ; 
  idFoyer!: number; 
  search='';
  newEtat!: true; 
  constructor(private foyerService : FoyerService,
    private activatedRoute : ActivatedRoute  ,
    private router:Router){}
  ngOnInit(): void {
    if(this.router.url== "/admin/foyer"){
      this.foyerService.getAllFoyer().subscribe((d)=>{
        console.log(d);
        this.foyers = d ;
      })
  }else{
    this.foyerService.getFoyerByUniversiteName(this.activatedRoute.snapshot.params["universite"]).subscribe((d)=>{
      // this.foyers = d ;
      console.log(d);
      this.foyers = d ;
      
      })
  }
  }

  GoToAddFoyer(){
    this.router.navigate([this.activatedRoute.snapshot.params["universite"]+'/addFoyer'])
  }

  getListeFoyer(){
    console.log(this.router.url);
    
   
   
      
  }
  filterData() {
    if (this.search.trim() === '') {
      return this.foyers;
    }
    return this.foyers.filter(item => item.nomFoyer.toLowerCase().includes(this.search.toLowerCase()));
  }

  updateFoyerEtat(idFoyer: number): void {
    this.foyerService.updateFoyerEtat(idFoyer)
      .subscribe(
        () => {
          console.log('Foyer Etat updated successfully');
     
        }
      );
      window.location.reload(); }
}
