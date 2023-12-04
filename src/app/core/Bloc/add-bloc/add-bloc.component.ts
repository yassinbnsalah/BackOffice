import { Component,Output,EventEmitter } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Bloc } from '../../../model/Bloc';
import { BlocService } from '../../../service/BlocService/bloc.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-bloc',
  templateUrl: './add-bloc.component.html',
  styleUrls: ['./add-bloc.component.css']
})
export class AddBlocComponent {
  form: FormGroup;
  bloc = new Bloc();
  nbChambere:number=1;
  capacite:number=0;
  addChamberPressed:boolean=false;
  chamberCount: number[] = [];

  constructor(
    private activatedRoute : ActivatedRoute   ,
    private blocService: BlocService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private location: Location
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
      capaciteBlocControl.setValue(0); // Set the desired value
    }
  }

  labelNames: string[] = ['numerochamber', 'typeC', 'Description', 'Etat'];
  show: boolean = false;

  addChamber() {
    this.addChamberPressed=true
    this.show = true
    if (this.show) {
      this.addChamberControl();
      this.chamberCount.push(this.nbChambere++);
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
  

  addbloc() {
    const capaciteBlocControl = this.form.get('capaciteBloc');


    if (this.form.valid) {
      for (let i = 0; i < this.chamberCount.length; i++) {
        const chamberControl = this.chambers.controls[i] as FormGroup;
        const typeC = chamberControl.get('typeC')?.value;

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
        console.log("this is capacite = "+this.capacite)// Set the desired value
      }
      this.blocService.addBloc(this.route.snapshot.params["universite"], this.form.value).subscribe((d) => {
        console.log('this is title' + this.form.get('nomBloc')?.value);
        this.bloc = d;
        console.log(d);

      });
      this.location.back();
    } else {
      console.log('form is invalid');
    }
  }

  get chambers(): FormArray {
    return this.form.get('chambers') as FormArray;
  }

}

