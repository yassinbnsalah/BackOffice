// chamber-update.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Chamber } from 'src/app/model/Chamber';
import { ChamberService } from 'src/app/service/chamber.service';

@Component({
  selector: 'app-chamber-update',
  templateUrl: './chamber-update.component.html',
  styleUrls: ['./chamber-update.component.css']
})
export class ChamberUpdateComponent implements OnInit {
  chamber: Chamber = new Chamber();

  constructor(
    private serviceChamber: ChamberService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const chamberId = this.activatedRoute.snapshot.params['id'];
    this.serviceChamber.getChamberByID(chamberId).subscribe((chamberData) => {
      this.chamber = chamberData;
    });
  }

  updateChamber() {
    this.serviceChamber.updateChamber(this.chamber).subscribe((response) => {
      console.log('Chamber updated:', response);
      // Redirigez vers la page de détails de la chambre mise à jour après la mise à jour.
      this.router.navigate(['/chamber/' + this.chamber.idChamber]);
    });
  }
}
