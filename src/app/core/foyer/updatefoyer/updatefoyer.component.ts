import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Foyer } from 'src/app/model/Foyer';
import { FoyerService } from 'src/app/service/foyer.service';

@Component({
  selector: 'app-updatefoyer',
  templateUrl: './updatefoyer.component.html',
  styleUrls: ['./updatefoyer.component.css']
})
export class UpdatefoyerComponent implements OnInit {
  foyer: Foyer = new Foyer();
  constructor(
    private serviceFoyer: FoyerService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {}
  selectedFile: File | null = null;
  ngOnInit(): void {
    const foyerID = this.activatedRoute.snapshot.params['id'];
    this.serviceFoyer.getFoyerByID(foyerID).subscribe((foyerDATA) => {
      this.foyer = foyerDATA;
    });
  }
  updateFoyer() {
    console.log(this.foyer);
    this.serviceFoyer.updateFoyer(this.foyer).subscribe((response) => {
      console.log('foyer updated:', response);
      this.router.navigate(['/admin/foyer/' + this.foyer.idFoyer]);
    });
  }
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }
  
    onSubmit() {
      this.serviceFoyer.updateFoyer(this.foyer).subscribe(
        (response) => {
          console.log('Foyer added:', response);
 
          this.router.navigateByUrl(this.router.createUrlTree(["/admin/foyer"]))
          .then(() => {
            window.location.reload();
          });
        },
        (error) => {
          console.error('Error:', error);
        }
      );
    }
    GoBack(){
      this.router.navigate(['/admin/foyer'])
    }
}
