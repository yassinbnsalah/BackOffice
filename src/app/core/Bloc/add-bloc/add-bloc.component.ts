import { Component,Output,EventEmitter, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Bloc } from '../../../model/Bloc';
import { BlocService } from '../../../service/BlocService/bloc.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ChamberService } from 'src/app/service/chamber.service';
import { numbers } from '@material/snackbar';


@Component({
  selector: 'app-add-bloc',
  templateUrl: './add-bloc.component.html',
  styleUrls: ['./add-bloc.component.css']
})
export class AddBlocComponent implements OnInit{
  form: FormGroup;
  selectedFiles: (File | null)[] = [];
  bloc = new Bloc();
  nbChambere:number=1;
  capacite:number=0;
  addChamberPressed:boolean=false;
  chamberCount: number[] = [];
  @Output() blocAdded = new EventEmitter<Bloc>();

  constructor(
    private activatedRoute : ActivatedRoute   ,
    private blocService: BlocService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private location: Location,
    private snackBar: MatSnackBar,
    private chamberService:ChamberService
  ) {
    this.form = this.fb.group({
      nomBloc: ['', Validators.required],
      capaciteBloc: [null, Validators.required],
      status: ['', Validators.required],
      description: ['', Validators.required],
      chambers: this.fb.array([]),
    });
    const capaciteBlocControl = this.form.get('capaciteBloc');
    if (capaciteBlocControl) {
      capaciteBlocControl.setValue(0); 
      
    }
  }
  ngOnInit(): void {
      
  }

  labelNames: string[] = ['numerochamber', 'typeC', 'Description', 'Etat'];
  show: boolean = false;

  addChamber() {
    this.addChamberPressed=true
    this.show = true
    if (this.show) {
      this.addChamberControl();
      this.chamberCount.push(this.nbChambere++);
      this.selectedFiles.push(null);
    }
  }

  addChamberControl() {
    const chamberGroup = this.fb.group({
      numerochamber: [''],
      typeC: [''],
      Description: [''],
      Etat: [''],
    });

    this.chambers.push(chamberGroup);
  }

  removeChamberControl(index: number) {
    this.chambers.removeAt(index);
  }
  onFileSelected(event: any, index: number) {
    this.selectedFiles[index] = event.target.files[0];
    console.log(this.selectedFiles);
  }
  
  uploadImage(idChamber: any,index:number) {
    const selectedFile = this.selectedFiles[index];
    if (selectedFile) {
      console.log("ENTER");
      let formData = new FormData();
      formData.append('file', selectedFile, selectedFile.name);
      formData.forEach((value, key) => {
        console.log(key, value);
      });
      this.chamberService.uploadImg(formData, idChamber).subscribe(
        (data) => {
          console.log(data);
        }
      );
    }
  }
  

  addbloc() {
    const capaciteBlocControl = this.form.get('capaciteBloc');


    if (this.form.valid) {
      const chamberIds: number[] = [];
      for (let i = 0; i < this.chamberCount.length; i++) {
        const chamberControl = this.chambers.controls[i] as FormGroup;
        const typeC = chamberControl.get('typeC')?.value;
        const chamberId = chamberControl.get('id')?.value;
      chamberIds.push(chamberId);

        switch (typeC) {
          case 'Simple':
           this.capacite++;
            break;
          case 'Double':
            this.capacite=this.capacite+2;
            break;
          case 'Triple':
            this.capacite=this.capacite+3;
            break;
          default:
            break;
        }
      }
      if (capaciteBlocControl) {
        capaciteBlocControl.setValue(this.capacite);
        console.log("this is capacite = "+this.capacite)
      }
      this.blocService.addBloc(this.route.snapshot.params["universite"], this.form.value).subscribe((d) => {
        for (let i = 0; i < d.chambers.length; i++) {
          const chamber = d.chambers[i];
          const chamberId = chamber.idChamber;
          this.uploadImage(chamberId, i);
        }

        
        // console.log('this is title' + this.form.get('nomBloc')?.value);
        this.blocAdded.emit(d);
        this.bloc = d;
        console.log(d);

      },(error)=>{
        this.showtoast("verify the data");
      }
      );
     
    } else {
      this.showtoast("invalid form")
    }
  }

  get chambers(): FormArray {
    return this.form.get('chambers') as FormArray;
  }
  showtoast(message: string, duration: number = 5000): void {
    this.snackBar.open(message, 'Close', {
      duration: duration,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: ['custom-snackbar'],
    });
  }

}

