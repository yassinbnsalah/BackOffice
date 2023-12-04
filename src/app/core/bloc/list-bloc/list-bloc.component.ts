import { ActivatedRoute, Router } from '@angular/router';
import {Component, OnInit,Output,EventEmitter } from '@angular/core';

import { StorageService } from 'src/app/AuthServices/storage.service';
import { Bloc } from 'src/app/model/Bloc';
import { BlocService } from 'src/app/service/BlocService/bloc.service';

@Component({
  selector: 'app-list-bloc',
  templateUrl: './list-bloc.component.html',
  styleUrls: ['./list-bloc.component.css']
})
export class ListBlocComponent implements OnInit{
  
  blocs!:Bloc[];
  search:String="";
  CurrentUser = this.storage.getUser();
  constructor(private blocService:BlocService,private activatedRoute:ActivatedRoute,private route:Router,private storage: StorageService) {

  }
  ngOnInit() {
    if(this.CurrentUser.role[0]=="ADMIN"){
      this.getallBloc();
    }else{
      this.getListBlocByuniversite();
    }
    
  }
  getListBlocByuniversite(){
    this.blocService.getBlocByuniversite(this.activatedRoute.snapshot.params["universite"]).subscribe((data)=>{
      this.blocs=data;
      console.log(this.blocs);
    })

  }
  
  getallBloc(){
    this.blocService.getallBloc().subscribe((data)=>{
      this.blocs=data;
      console.log(this.blocs);
    })
  }
  deleteBloc(id:any){
    this.blocService.deleteBloc(id).subscribe((data)=>{
      this.blocs=this.blocs.filter(bloc=>bloc.idBloc!=id);

    })
  }
  
  GoToAdd(){
    if(this.CurrentUser.role[0]=="ADMIN"){
      this.route.navigate(["admin/bloc"+"/add/"])
    }else{
      this.route.navigate([this.activatedRoute.snapshot.params["universite"]+"/bloc"+"/add/"])
    }
    
  }
  GoToUpdateBloc(bloc:Bloc){
    this.blocService.setBloc(bloc);
    if(this.CurrentUser.role[0]=="ADMIN"){
      this.route.navigate(["admin/bloc"+"/updateBloc"],{queryParams:{bloc:bloc}});
    }else{
      this.route.navigate([this.activatedRoute.snapshot.params["universite"]+"/bloc"+"/updateBloc"],{queryParams:{bloc:bloc}});
    }
    
  }
  onBlocAdded(newBloc: Bloc) {
    this.blocs.push(newBloc);
  }
  GoToDetail(bloc:Bloc){
    this.blocService.setBloc(bloc);
    if(this.CurrentUser.role[0]=="ADMIN"){
      this.route.navigate(["admin/bloc"+"/detailBloc"],{queryParams:{bloc:bloc}});
    }else{
      this.route.navigate([this.activatedRoute.snapshot.params["universite"]+"/bloc"+"/detailBloc"],{queryParams:{bloc:bloc}});
    }
  }
 
}
