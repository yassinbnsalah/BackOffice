// src/app/components/chamber-details/chamber-details.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bloc } from 'src/app/model/Bloc';
import { Chamber } from 'src/app/model/Chamber';
import { ChamberService } from 'src/app/service/chamber.service';

@Component({
  selector: 'app-chamber-details',
  templateUrl: './chamber-details.component.html',
  styleUrls: ['./chamber-details.component.css']
})
export class ChamberDetailsComponent implements OnInit {
  chamber!: Chamber;
  bloc!: Bloc;

  constructor(
    private serviceChamber: ChamberService,
    private activatedRoute: ActivatedRoute,
    private router: Router // Ajoutez le Router
  ) {}

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.params['id']);
    this.serviceChamber.getChamberByID(this.activatedRoute.snapshot.params['id']).subscribe((d) => {
      console.log(d);
      this.chamber = d;
      this.bloc = d.bloc;
    });
  }

  GoToChamberDetails(id:any){
    this.router.navigate(["chamber/",id])
} 

redirectToUpdateChamber(id: number) {
  this.router.navigate([`/chamber/update/${id}`]); 
}

}
