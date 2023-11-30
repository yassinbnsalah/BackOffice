import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Foyer } from 'src/app/model/Foyer';
import { FoyerService } from 'src/app/service/foyer.service';

@Component({
  selector: 'app-detailsfoyer',
  templateUrl: './detailsfoyer.component.html',
  styleUrls: ['./detailsfoyer.component.css']
})
export class DetailsfoyerComponent implements OnInit {
  foyer !: Foyer ;
  constructor(private foyerService: FoyerService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }
  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.params['id']);
    this.foyerService.getFoyerByID(this.activatedRoute.snapshot.params['id']).subscribe((d) => {
      console.log(d);
      this.foyer = d ;

    })
  }
GoToFoyerDetails(id:any){
    this.router.navigate(["foyer/",id])
} 

redirectToUpdateFoyer(id: number) {
  this.router.navigate([`/foyer/update/${id}`]); 
}

}
