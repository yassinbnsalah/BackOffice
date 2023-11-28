// chamber-update.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bloc } from 'src/app/model/Bloc';
import { Chamber } from 'src/app/model/Chamber';
import { ChamberService } from 'src/app/service/chamber.service';

@Component({
  selector: 'app-chamber-update',
  templateUrl: './chamber-update.component.html',
  styleUrls: ['./chamber-update.component.css']
})
export class ChamberUpdateComponent implements OnInit {
  chamber: Chamber = new Chamber();
  bloc!: Bloc;
  blocNames: string[] = []; // Tableau pour stocker les noms des blocs

  constructor(
    private serviceChamber: ChamberService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const chamberId = this.activatedRoute.snapshot.params['id'];
    this.serviceChamber.getChamberByID(chamberId).subscribe(
      (chamberData) => {
        this.chamber = chamberData;
        if (this.chamber.bloc) {
          // Ajoutez le nom du bloc au tableau
          this.blocNames.push(this.chamber.bloc.nomBloc);
          console.log('Chamber Data:', this.chamber);
        } else {
          console.error('Bloc data is missing.');
        }
      },
      (error) => {
        console.error('Error fetching chamber data:', error);
      }
    );
  }

  updateChamber() {
    console.log('Updating chamber:', this.chamber);
    this.serviceChamber.updateChamber(this.chamber).subscribe(
      (response) => {
        console.log('Chamber updated:', response);
        this.router.navigate([this.activatedRoute.snapshot.params['universite'] + '/chamber']);
      },
      (error) => {
        console.error('Error updating chamber:', error);
      }
    );
  }
}
