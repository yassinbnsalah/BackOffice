
import { Bloc } from 'src/app/model/Bloc';
import { BlocService } from 'src/app/service/BlocService/bloc.service';
import {Component, OnInit} from '@angular/core';

import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-list-bloc',
  templateUrl: './list-bloc.component.html',
  styleUrls: ['./list-bloc.component.css']
})
export class ListBlocComponent implements OnInit{
  blocs!:Bloc[];
  search:String="";
  constructor(private blocService:BlocService,private activatedRoute:ActivatedRoute,private route:Router) {

  }
  ngOnInit() {
    this.getListBloc();
  }
  getListBloc(){
    this.blocService.getallBloc().subscribe((data)=>{
      this.blocs=data;
      console.log(this.blocs);
    })

  }
  deleteBloc(id:any){
    this.blocService.deleteBloc(id).subscribe((data)=>{
      this.blocs=this.blocs.filter(bloc=>bloc.idBloc!=id);
      alert("Bloc deleted")
    })
  }
  GoToAdd(){
    this.route.navigate([this.activatedRoute.snapshot.params["universite"]+"/addBloc/"])
  }
  GoToUpdateBloc(bloc:Bloc){
    this.blocService.setBloc(bloc);
    this.route.navigate(["updateBloc"],{queryParams:{bloc:bloc}});
  }
  GoToDetail(bloc:Bloc){
    this.blocService.setBloc(bloc);
    this.route.navigate(["detailBloc"],{queryParams:{bloc:bloc}})
  }
}
