import { Component } from '@angular/core';
import {Universite} from "../../../model/Universite";
import {UniversiteService} from "../../../service/universiteService/universite.service";
import {StorageService} from "../../../AuthServices/storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-accepted-universite',
  templateUrl: './accepted-universite.component.html',
  styleUrls: ['./accepted-universite.component.css']
})
export class AcceptedUniversiteComponent {

  acceptedUniversites: Universite[] = [];
  CurrentUser: any;


  constructor(private universiteService: UniversiteService, private storage: StorageService, private router: Router) {}

  ngOnInit() {
    this.getAcceptedUniversites();
  }

  getAcceptedUniversites() {
    // Use the updateStatus method to get accepted universities
    this.universiteService.getAllUniversite().subscribe(
      (data) => {
        // Filter universities with status 'Accepté'
        this.acceptedUniversites = data.filter((universite) => universite.statuts === 'Accepté');
        console.log(data);
      },
      (error) => {
        console.error('Error fetching accepted universites: ', error);
      }
    );
  }
  GoToUniversiteDetails(id: any) {
    this.CurrentUser = this.storage.getUser();
    if (this.CurrentUser.role[0] == "ADMIN") {
      this.router.navigate(["admin/universite/", id])
    }
  }

}
