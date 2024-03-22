import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Foyer } from 'src/app/model/Foyer';
import { FoyerService } from 'src/app/service/foyer.service';

@Component({
  selector: 'app-addfoyer',
  templateUrl: './addfoyer.component.html',
  styleUrls: ['./addfoyer.component.css']
})
export class AddfoyerComponent {
  form!: FormGroup;
  hideDemande: boolean = true;
  @Output() addFoyer = new EventEmitter<Foyer>();
  selectedFile: File | null = null;

  constructor(private fb: FormBuilder,
              private foyerService: FoyerService,
              private router: Router) {}

  ngOnInit() {
    this.form = this.fb.group({
      nomFoyer: ['', [Validators.required, Validators.minLength(5)]],
      capaciteFoyer: ['', [Validators.required, this.nonNegativeValidator]],
      adresse: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(20)]],
      imagebyte: ['']
    });
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

  onSubmit() {
    if (this.form.valid) {
      this.foyerService.addFoyer(this.form.value).subscribe(
        (response) => {
          console.log('Foyer added:', response);
          this.router.navigate(['admin/foyer']); // Navigate to the foyer list
        },
        (error) => {
          console.error('Error:', error);
        }
      );
    } else {
      this.hideDemande = false;
      console.log("bara 3abi les champs");
    }
  }
}
