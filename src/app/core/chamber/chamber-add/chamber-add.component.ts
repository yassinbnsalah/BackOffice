import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Chamber } from "src/app/model/Chamber";
import { Bloc } from "src/app/model/Bloc";  
import { ChamberService } from "src/app/service/chamber.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-chamber-add',
  templateUrl: './chamber-add.component.html',
  styleUrls: ['./chamber-add.component.css']
})
export class ChamberAddComponent implements OnInit {
  chamber = new Chamber();
  selectedFile: File | null = null;
  selectedBloc: string = '';  // Déclaration de la propriété selectedBloc
  blocs: Bloc[] = [];  // Déclaration de la liste des blocs


  constructor(private serviceChamber: ChamberService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
    // Chargez la liste des blocs lors de l'initialisation du composant
    this.loadBlocs();
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
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
      console.log("ENTER");
      let formData = new FormData();
      formData.append('file', this.selectedFile, this.selectedFile.name);
      formData.forEach((value, key) => {
        console.log(key, value);
      });
      this.serviceChamber.uploadImg(formData, idChamber).subscribe(
        (data) => {
          console.log(data);
        }
      );
    }
  }

  onSubmit() {
      this.chamber.etat = true;
    this.serviceChamber.addChamber(this.chamber).subscribe(
      (response) => {
        console.log('Chamber added:', response);
  
        // Obtenez le nom du bloc sélectionné
        const selectedBlocName = this.selectedBloc;
  
        // Recherchez le bloc correspondant dans la liste des blocs
        const selectedBloc = this.blocs.find(bloc => bloc.nomBloc === selectedBlocName);
  
        if (selectedBloc) {
          // Obtenez l'id du bloc
          const idBloc = selectedBloc.idBloc;
    
          // Appelez la méthode pour affecter le bloc à la chambre
          this.serviceChamber.affecterBlocAChambre(response.idChamber, idBloc).subscribe(
    
            () => {
       
              console.log('Bloc affecté à la chambre avec succès.');
              // Redirigez l'utilisateur ou effectuez d'autres actions nécessaires.
              this.uploadImage(response.idChamber);
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
  

  saveChamber(chamberFormValue: Chamber) {
    console.log(chamberFormValue);
    // Utilisez chamberFormValue pour accéder aux données du formulaire
    this.serviceChamber.addChamber(chamberFormValue).subscribe(
      () => {
        alert('Chambre ajoutée');
        // Réinitialiser le formulaire après l'ajout de la chambre
        this.chamber = new Chamber();
        this.router.navigate([this.activatedRoute.snapshot.params["universite"] + '/chamber']);
      },
      (error) => {
        console.error('Erreur lors de l\'ajout de la chambre :', error);
      }
    );
  }

  test(a:any){
    console.log(a);

  }
}
