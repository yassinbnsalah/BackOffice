import { Component, OnInit } from '@angular/core';
import { Reservation } from "../../../model/Reservation";
import { Universite } from "../../../model/Universite";
import { ReservationService } from "../../../service/reservation.service";
import { ActivatedRoute, Router } from "@angular/router";
import { UniversiteService } from "../../../service/universiteService/universite.service";
import { StorageService } from 'src/app/AuthServices/storage.service';

@Component({
  selector: 'app-universite-liste',
  templateUrl: './universite-liste.component.html',
  styleUrls: ['./universite-liste.component.css']
})
export class UniversiteListeComponent implements OnInit {
  universites !: Universite[];
  universite: Universite = new Universite();
  CurrentUser: any;
  filteredUniversites: Universite[] = [];

  searchQuery: string = '';

  constructor(private universiteService: UniversiteService, private storage: StorageService,
    private router: Router , private activatedRoute : ActivatedRoute ) {
    this.universite.statuts = 'En attente';
  }
  ngOnInit() {
    this.universites = this.activatedRoute.snapshot.data["data"].universites ;
    
    this.getListeUniversite();
  }

  getListeUniversite() {
    this.universiteService.getAllUniversite().subscribe(
      (data) => {
        this.universites = data;
        console.log(data);
        this.checkAndDisableUniversities();
      },
      (error) => {
        console.error("Error fetching universites: ", error);
      }
    );
  }

  GoToUniversiteDetails(name: any) {
  //  this.CurrentUser = this.storage.getUser();
   // if (this.CurrentUser.role[0] == "ADMIN") {
      this.router.navigate(["admin/universite/", name])
   // }

  }

  cycleStatus(universite: Universite) {
    switch (universite.statuts) {
      case 'En_attente':
        this.updateStatus(universite, 'Accepté');
        break;
      case 'Accepté':
        this.updateStatus(universite, 'Refusé');
        break;
      case 'Refusé':
        this.updateStatus(universite, 'En_attente');
        break;
      default:
        this.updateStatus(universite, 'En_attente');
        break;
    }
  }

  updateStatus(universite: Universite, status: string) {
    this.universiteService.updateStatus(universite.idUniversite, status).subscribe(
      (updatedUniversite) => {
        // Handle the response as needed
        console.log('Status updated successfully:', updatedUniversite);

        // Update the local state to reflect the new status
        universite.statuts = status;
      },
      (error) => {
        console.error('Error updating status:', error);
      }
    );
  }

  onSearch() {
    if (this.searchQuery && this.searchQuery.trim() !== '') {
      this.filteredUniversites = this.universites.filter(universite =>
        universite.nomUniversite.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      // If search query is empty, display all data
      this.filteredUniversites = this.universites;
    }
  }


  currentDate: any;
  checkAndDisableUniversities() {
    const currentDate = new Date();
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

    this.universites.forEach(universite => {
      if (
        universite.statuts === 'En_attente' &&
        universite.createdAt &&
        new Date(universite.createdAt) < oneMonthAgo
      ) {
        this.updateStatus(universite, 'Disabled');
      }
    });
  }
  search='';
  filterData() {
    if (this.search.trim() === '') {
      return this.universites;
    }
    return this.universites.filter(item => item.statuts.toLowerCase().includes(this.search.toLowerCase()));
  }

}




