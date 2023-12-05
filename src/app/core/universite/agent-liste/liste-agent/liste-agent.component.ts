import { Component } from '@angular/core';
import {Universite} from "../../../../model/Universite";
import {UniversiteService} from "../../../../service/universiteService/universite.service";
import {StorageService} from "../../../../AuthServices/storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-liste-agent',
  templateUrl: './liste-agent.component.html',
  styleUrls: ['./liste-agent.component.css']
})
export class ListeAgentComponent {
  universites !: Universite[];
  universite: Universite = new Universite();
  CurrentUser: any;
  filteredUniversites: Universite[] = [];

  searchQuery: string = '';

  constructor(private universiteService: UniversiteService, private storage: StorageService,
              private router: Router) {
    this.universite.statuts = 'En attente';}

  ngOnInit() {
    this.getListeUniversite();
  }

  getListeUniversite() {
    this.universiteService.getAllUniversite().subscribe(
      (data) => {
        // Filter the data based on the desired status
        this.universites = data.filter(u => u.statuts === 'Accepté');
        console.log(data);
      },
      (error) => {
        console.error("Error fetching universites: ", error);
      }
    );
  }

}
