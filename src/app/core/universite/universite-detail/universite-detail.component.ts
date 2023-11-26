import { Component } from '@angular/core';

import {ActivatedRoute, Router} from "@angular/router";
import { Universite } from 'src/app/model/Universite';
import { UniversiteService } from 'src/app/service/universiteService/universite.service';


@Component({
  selector: 'app-universite-detail',
  templateUrl: './universite-detail.component.html',
  styleUrls: ['./universite-detail.component.css']
})
export class UniversiteDetailComponent {
  universite !: Universite ;
  constructor(private serviceUniversite: UniversiteService,
              private activatedRoute: ActivatedRoute,
              private router: Router){}


  ngOnInit(): void {

    this.serviceUniversite.getUniversiteByNomU(this.activatedRoute.snapshot.params['universite']).subscribe((data) => {
      this.universite = data;
    });
  }
  redirectToUpdateChamber() {
    const universite = this.activatedRoute.snapshot.params['universite'];
    this.router.navigate([this.activatedRoute.snapshot.params['universite']]);
  }



}
