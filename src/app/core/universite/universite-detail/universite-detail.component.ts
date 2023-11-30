import { Component } from '@angular/core';

import {ActivatedRoute} from "@angular/router";
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
              private activatedRoute: ActivatedRoute) { }



  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.params['id']);
    this.serviceUniversite.getUniversiteByID(this.activatedRoute.snapshot.params['id']).subscribe(
      (data) => {
      console.log(data);
      this.universite = data ;
    })
  }
}
