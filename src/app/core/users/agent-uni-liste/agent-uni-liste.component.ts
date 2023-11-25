import { Component, OnInit } from '@angular/core';
import { Universite } from '../../../model/Universite';
import { UniversiteService } from '../../../service/universiteService/universite.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-agent-uni-liste',
  templateUrl: './agent-uni-liste.component.html',
  styleUrls: ['./agent-uni-liste.component.css']
})
export class AgentUniListeComponent implements OnInit {

  universiteDetails: Universite = new Universite();

  constructor(private serviceUniversite: UniversiteService, private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.params['name']);
    this.serviceUniversite.getUniversiteByNomU(this.activatedRoute.snapshot.params['name']).subscribe(
      (data) => {
        console.log(data);
        this.universiteDetails = data ;
      })
  }
}
