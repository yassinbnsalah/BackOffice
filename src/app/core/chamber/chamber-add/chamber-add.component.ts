import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Chamber } from "src/app/model/Chamber";
import { ChamberService } from "src/app/service/chamber.service";

@Component({
  selector: 'app-chamber-add',
  templateUrl: './chamber-add.component.html',
  styleUrls: ['./chamber-add.component.css']
})
export class ChamberAddComponent {
  chamber = new Chamber();
  selectedFile: File | null = null;
  constructor(private serviceChamber: ChamberService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }


uploadImage(idChamber:any){
  if (this.selectedFile) {
    console.log("ENTER");
    let formData = new FormData();
    formData.append('file', this.selectedFile,this.selectedFile.name);
    formData.forEach((value, key) => {
      console.log(key, value);
    });
    this.serviceChamber.uploadImg(formData,idChamber).subscribe(
      (data) =>{
        console.log(data);
      }
    )
  }}
  onSubmit() {
    this.serviceChamber.addChamber(this.chamber).subscribe(
      (response) => {
        console.log('Chamber added:', response);
        this.uploadImage(response.idChamber)
        this.router.navigate([this.activatedRoute.snapshot.params['universite']+"/chamber"]);
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
        this.router.navigate([this.activatedRoute.snapshot.params["universite"]+'/chamber'])
      },
      (error) => {
        console.error('Erreur lors de l\'ajout de la chambre :', error);
      }
    );
    
  }
}
