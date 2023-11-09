import { Component } from '@angular/core';
import {Bloc} from "../../../model/Bloc";
import {BlocService} from "../../../service/BlocService/bloc.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-add-bloc',
  templateUrl: './add-bloc.component.html',
  styleUrls: ['./add-bloc.component.css']
})
export class AddBlocComponent {
  constructor(private blocService:BlocService,private route:ActivatedRoute,private router:Router) {
  }
  bloc = new Bloc();
nom:String="";
  showbloc(f:NgForm){


    this.blocService.addBloc(this.nom,this.bloc).subscribe((d)=>{
      console.log("this is title"+this.nom)
      this.bloc=d;
      console.log(this.bloc);
    })

  }

}
