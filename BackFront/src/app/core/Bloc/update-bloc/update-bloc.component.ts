// update-bloc.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { BlocService } from "../../../service/BlocService/bloc.service";
import { Bloc } from "../../../model/Bloc";

@Component({
  selector: 'app-update-bloc',
  templateUrl: './update-bloc.component.html',
  styleUrls: ['./update-bloc.component.css']
})
export class UpdateBlocComponent implements OnInit {
  bloc: Bloc = {
    idBloc: 0,
    nomBloc: '',
    capaciteBloc: 0,
    status: '',
    description: '',
    foyer: this.serviceBloc.getBloc().foyer
  };

  constructor(private activatedRoute: ActivatedRoute, private route: Router, private serviceBloc: BlocService) {}

  ngOnInit() {
    const storedBloc = this.serviceBloc.getBloc();

    if (storedBloc) {
      this.bloc = { ...storedBloc };
    }
    console.log(this.bloc);
  }

  updateBloc() {
    this.serviceBloc.updatebloc(this.bloc).subscribe((data)=>{
      console.log(data);
      this.route.navigate(["/listBloc"])
    })
  }
}
