
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
  selectedFile: File | null = null;
  blocs: Bloc[] = [];
  currentBloc !: Bloc;
  selectedBloc: string = '';
  constructor(
    private serviceChamber: ChamberService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const chamberId = this.activatedRoute.snapshot.params['id'];
    this.serviceChamber.getChamberByID(chamberId).subscribe(
      (chamberData) => {
        this.chamber = chamberData;
        this.serviceChamber.getBLocByChamber(chamberData.idChamber).subscribe(
          (data) => {
            console.log(data.nomBloc);
            this.currentBloc = data
            this.chamber.bloc = data
            this.loadBlocs();
          }
        );

      },
      (error) => {
        console.error('Error fetching chamber data:', error);
      }
    );
  }
  loadBlocs() {
    this.serviceChamber.getAllBlocs().subscribe(
      (data) => {
        console.log(data);
        this.blocs = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }
  uploadImage(idChamber: any) {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile, this.selectedFile.name);

      this.serviceChamber.uploadImg(formData, idChamber).subscribe(
        (data) => {
          console.log(data);
        }
      );
    }
  }

  onSubmit() {
    this.serviceChamber.updateChamber(this.chamber).subscribe(
      (updatedChamber) => {
        console.log('Chamber updated:', updatedChamber);
        const selectedBlocName = this.selectedBloc;
        const selectedBloc = this.blocs.find(bloc => bloc.nomBloc === selectedBlocName);
        if (selectedBloc) {
          const idBloc = selectedBloc.idBloc;
          this.serviceChamber.affecterBlocAChambre(updatedChamber.idChamber, idBloc).subscribe(
            () => {
              console.log('Bloc affecté à la chambre avec succès.');
              this.uploadImage(updatedChamber.idChamber);
              this.router.navigate([this.activatedRoute.snapshot.params['universite'] + "/chamber"]);
            },
            (error) => {
              console.error('Erreur lors de l\'affectation du bloc à la chambre:', error);
            }
          );
        } else
          console.error('Bloc non trouvé dans la liste des blocs.');
      }
    );
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }

  changeBloc(bloc: any) {
    console.log("hello mate i wanna change bloc name to :" + bloc.nomBloc);
    this.chamber.bloc = bloc;
  }
  updateChamber() {
    console.log('Updating chamber:', this.chamber);
    this.serviceChamber.updateChamber(this.chamber).subscribe(
      (response) => {
        if (this.currentBloc.idBloc != this.chamber.bloc.idBloc) {
          this.serviceChamber.affecterBlocAChambre(this.chamber.idChamber, this.chamber.bloc.idBloc).subscribe(
            () => {
              console.log("updated bloc ");
              this.router.navigate([this.activatedRoute.snapshot.params['universite'] + "/chamber"]);
            });
        } else {
          console.log("Not updated bloc ");
          this.router.navigate([this.activatedRoute.snapshot.params['universite'] + "/chamber"]);
        }
      }
    );
  }
  
}

