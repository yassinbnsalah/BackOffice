import { Component, EventEmitter, Output } from '@angular/core';
import { NgModule } from '@angular/core';

import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  hideDemande :Boolean = true ; 
  @Output()addFoyer=new EventEmitter<Foyer>
  foyer: Foyer = new Foyer();

  constructor(private fb:FormBuilder,
    private foyerService : FoyerService,
    private activatedRoute: ActivatedRoute ,
    private router: Router) {} // Fix the parameter name
    ngOnInit(){
      this.form=this.fb.group({
        nomFoyer:['',[Validators.required,Validators.minLength(5)]],
        capaciteFoyer: ['', [Validators.required, this.nonNegativeValidator]],
        adresse: ['', Validators.required],
        description: ['',[Validators.required,Validators.minLength(20)]],
        imagebyte:['']
      }) 
    }
    nonNegativeValidator(control: AbstractControl): { [key: string]: any } | null {
      const value = control.value;
      if (value !== null && value < 0) {
        return { 'negativeValue': true };
      }
      return null;
    }
    selectedFile: File | null = null;

    onFileSelected(event: any) {
      this.selectedFile = event.target.files[0];
      console.log(this.selectedFile);
    }
  
  
  uploadImage(idFoyer:any){
    if (this.selectedFile) {
      console.log("ENTER");
      let formData = new FormData();
      formData.append('file', this.selectedFile,this.selectedFile.name);
      formData.forEach((value, key) => {
        console.log(key, value);
      });
      this.foyerService.uploadImg(formData,idFoyer).subscribe(
        (data) =>{
          console.log(data);
        }
      )
    }}
   onSubmit() {
  console.log(this.form.value);
  if (this.form.valid) {
    this.foyerService.addFoyer(this.activatedRoute.snapshot.params['universite'], this.form.value).subscribe(
      (response) => {
        console.log('Foyer added:', response);
        this.uploadImage(response.idFoyer);
        this.addFoyer.emit(response);
        this.router.navigateByUrl(this.router.createUrlTree([this.activatedRoute.snapshot.params['universite']+"/foyer"]))
          .then(() => {
            window.location.reload();
          });
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
 
  
 // GoBack(){
 //   this.router.navigate([this.activatedRoute.snapshot.params["universite"]+'/foyer'])
 // }

  
}
