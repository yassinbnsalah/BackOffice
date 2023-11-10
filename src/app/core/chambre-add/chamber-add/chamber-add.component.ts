import { Component } from "@angular/core";
import { Chamber } from "src/app/model/Chamber";
import { ChamberService } from "src/app/service/chamber.service";

@Component({
  selector: 'app-chamber-add',
  templateUrl: './chamber-add.component.html',
  styleUrls: ['./chamber-add.component.css']
})
export class ChamberAddComponent {
  chamber = new Chamber();

  constructor(private serviceChamber: ChamberService) {}

  saveChamber(chamberFormValue: Chamber) {
    console.log(chamberFormValue);
    // Utilisez chamberFormValue pour accéder aux données du formulaire
    this.serviceChamber.addChamber(chamberFormValue).subscribe(
      () => {
        alert('Chambre ajoutée');
        // Réinitialiser le formulaire après l'ajout de la chambre
        this.chamber = new Chamber();
      },
      (error) => {
        console.error('Erreur lors de l\'ajout de la chambre :', error);
      }
    );
    
  }
}
