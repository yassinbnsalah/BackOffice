import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Bloc } from '../../../model/Bloc';
import { BlocService } from '../../../service/BlocService/bloc.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-bloc',
  templateUrl: './add-bloc.component.html',
  styleUrls: ['./add-bloc.component.css'],
})
export class AddBlocComponent {
  form: FormGroup;
  bloc = new Bloc();

  constructor(
    private blocService: BlocService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      nomBloc: ['', Validators.required],
      capaciteBloc: [null, Validators.required],
      status: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  addbloc() {
    if (this.form.valid) {
      this.blocService.addBloc("esprit", this.form.value).subscribe((d) => {
        console.log('this is title' + this.form.get('nomUniversite')?.value);
        this.bloc = d;
        console.log(this.bloc);
      });
      this.router.navigate([":universite/bloc"])
    } else {
      console.log('form is invalid');
    }
    //this.router.navigate(["/listBloc"])
  }
}
