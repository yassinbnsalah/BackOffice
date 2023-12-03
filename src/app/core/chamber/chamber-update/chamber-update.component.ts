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
  selectedFile: File | null = null;
  blocs: Bloc[] = [];
  selectedBloc: string = '';
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
        this.loadBlocs(); // Chargez la liste des blocs lors de l'initialisation
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
      // Mettez à jour la chambre
  this.serviceChamber.updateChamber(this.chamber).subscribe(
    (updatedChamber) => {
      console.log('Chamber updated:', updatedChamber);
      
       // Obtenez le nom du bloc sélectionné
       const selectedBlocName = this.selectedBloc;
  
       // Recherchez le bloc correspondant dans la liste des blocs
       const selectedBloc = this.blocs.find(bloc => bloc.nomBloc === selectedBlocName);
 
       if (selectedBloc) {
         // Obtenez l'id du bloc
         const idBloc = selectedBloc.idBloc;
   
         // Appelez la méthode pour affecter le bloc à la chambre
         this.serviceChamber.affecterBlocAChambre(updatedChamber.idChamber, idBloc).subscribe(
   
           () => {
      
             console.log('Bloc affecté à la chambre avec succès.');
             // Redirigez l'utilisateur ou effectuez d'autres actions nécessaires.
             this.uploadImage(updatedChamber.idChamber);
             this.router.navigate([this.activatedRoute.snapshot.params['universite'] + "/chamber"]);
           },
           (error) => {
             console.error('Erreur lors de l\'affectation du bloc à la chambre:', error);
           // Log des détails de l'erreur HTTP
  
           }
         );
       } else {
         console.error('Bloc non trouvé dans la liste des blocs.');
       }
     },
     (error) => {
       console.error('Error:', error);
     }
   );
 }
 onFileSelected(event: any) {
  this.selectedFile = event.target.files[0];
  console.log(this.selectedFile);
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
