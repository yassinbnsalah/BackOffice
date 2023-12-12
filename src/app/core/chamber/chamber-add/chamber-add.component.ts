import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Chamber } from "src/app/model/Chamber";
import { Bloc } from "src/app/model/Bloc";  
import { ChamberService } from "src/app/service/chamber.service";
import { BlocService } from "src/app/service/BlocService/bloc.service";
import { AbstractControl, FormBuilder, FormGroup, NgForm, Validators } from "@angular/forms";

@Component({
  selector: 'app-chamber-add',
  templateUrl: './chamber-add.component.html',
  styleUrls: ['./chamber-add.component.css']
})
export class ChamberAddComponent implements OnInit {
  form!: FormGroup;
  hideDemande :Boolean = true ; 
  @Output()addChamber=new EventEmitter<Chamber>
  chamber = new Chamber();
  selectedFile: File | null = null;
  selectedBloc: string = '';  // Déclaration de la propriété selectedBloc
  blocs: Bloc[] = [];  // Déclaration de la liste des blocs


  constructor(private fb:FormBuilder,
              private serviceChamber: ChamberService,
              private activatedRoute: ActivatedRoute,
              private blocService : BlocService,
              private router: Router) {}

  ngOnInit() {
    this.form=this.fb.group({
      numerochamber: ['', [Validators.required, this.nonNegativeValidator]],
      typeC: ['', Validators.required],
      description: ['',[Validators.required,Validators.minLength(20)]],
    
    }) 
    // Chargez la liste des blocs lors de l'initialisation du composant
    this.loadBlocs();
  }
  nonNegativeValidator(control: AbstractControl): { [key: string]: any } | null {
    const value = control.value;
    if (value !== null && value < 0) {
      return { 'negativeValue': true };
    }
    return null;
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }

  loadBlocs() {
    this.blocService.getBlocByuniversite(this.activatedRoute.snapshot.params["universite"]).subscribe(
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
  selectBlocName(blocName:any){
    this.selectedBloc = blocName
  }
  onSubmit() {
    this.chamber.etat = true;
      if (this.form.valid) {
      
    this.serviceChamber.addChamber(this.form.value).subscribe(
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


  else{
    this.hideDemande = false
    console.log("bara 3abi les champs")
  }
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
