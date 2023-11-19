import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Chamber } from 'src/app/model/Chamber';
import { ChamberService } from 'src/app/service/chamber.service';

@Component({
  selector: 'app-chamber-liste',
  templateUrl: './chamber-liste.component.html',
  styleUrls: ['./chamber-liste.component.css']
})
export class ChamberListeComponent implements OnInit {
  chambers!: Chamber[];
  blocNames: string[] = []; // Tableau pour stocker les noms des blocs

  constructor(
    private chamberService: ChamberService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getListeChamber();
  }

  GoToChamberDetails(id: any) {
    this.router.navigate(["chamber/", id]);
  }

  getListeChamber() {
    this.chamberService.getAllChamber().subscribe(
      (chambers: Chamber[]) => {
        this.chambers = chambers;

        this.chambers.forEach((chamber) => {
          this.chamberService.getBLocByChamber(chamber.idChamber).subscribe(
            (blocData) => {
              console.log(blocData.nomBloc);
             
            },
            (error) => {
              console.error('Error getting bloc data:', error);
            }
          );
        });

        console.log(this.chambers);
       
      },
      (error) => {
        console.error('Error getting chamber data:', error);
      }
    );
  }

  GoToAddChamber() {
    this.router.navigate([this.activatedRoute.snapshot.params["universite"] + '/chamber/add']);
  }

  GoToDetailsChamber(id: any) {
    this.router.navigate([this.activatedRoute.snapshot.params['universite'] + "/chamber/" + id]);
  }
}
