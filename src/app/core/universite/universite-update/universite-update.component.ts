import {Component, OnInit} from '@angular/core';
import {Universite} from "../../../model/Universite";
import {ActivatedRoute, Router} from "@angular/router";
import {UniversiteService} from "../../../service/universiteService/universite.service";

@Component({
  selector: 'app-universite-update',
  templateUrl: './universite-update.component.html',
  styleUrls: ['./universite-update.component.css']
})
export class UniversiteUpdateComponent implements OnInit{
  universite = new Universite();

  constructor(
    private serviceUniversite: UniversiteService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const universiteId = this.activatedRoute.snapshot.params['id'];

    if (universiteId) {
      this.serviceUniversite.getUniversiteByID(universiteId).subscribe((data) => {
        this.universite = data;
      });
    } else {
      console.error('Invalid id reference: Universite ID is missing in the route parameters.');
      // Handle the error appropriately
    }
  }

  updateUniversite() {
    if (!this.universite) {
      console.error('Invalid id reference: Universite object is null or undefined.');
      // Handle the error appropriately
      return;
    }

    console.log(this.universite);
    this.serviceUniversite.updateUniversite(this.universite).subscribe((response) => {
      console.log('Universite updated:', response);
      this.router.navigate(['/admin/updateUniversite', this.universite.idUniversite]);
    });
  }


}
