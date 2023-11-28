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
   search='';



  constructor(
    private chamberService: ChamberService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getListeChamber();
  }



  getListeChamber() {
    this.chamberService.getAllChamber().subscribe(
      (chambers: Chamber[]) => {
        this.chambers = chambers;

        this.chambers.forEach((chamber,index) => {
          this.chamberService.getBLocByChamber(chamber.idChamber).subscribe(
            (data) => {
              console.log("data ok");
              console.log(data.nomBloc);
              this.chambers[index].blocname = data.nomBloc
            },
            (error) => {
              console.error('Error getting bloc data:', error);
            }
          );
        console.log("wiwi ye tahfouna");
        console.log(chamber);
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
  filterData() {
    if (this.search.trim() === '') {
      return this.chambers;
    }
    return this.chambers.filter(item => item.typeC.toLowerCase().includes(this.search.toLowerCase()));
  }
  redirectToUpdateChamber(id: number) {
    const universite = this.activatedRoute.snapshot.params['universite'];
    this.router.navigate([`${universite}/chamber/update/${id}`]);
  }
  deleteChamber(id:any){
    this.chamberService.deleteChamber(id).subscribe((data)=>{
      this.chambers=this.chambers.filter(chamber=>chamber.idChamber!=id);
      alert("Chaber deleted")
    })
  }
}
