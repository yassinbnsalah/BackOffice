import { Component, OnInit } from '@angular/core';
import { BlocService } from "../../../service/BlocService/bloc.service";
import { Bloc } from "../../../model/Bloc";
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail-bloc',
  templateUrl: './detail-bloc.component.html',
  styleUrls: ['./detail-bloc.component.css']
})
export class DetailBlocComponent implements OnInit {

  constructor(private serviceBloc: BlocService,private location: Location) {
  }

  storedbloc: Bloc | null = null;
  numberOfChambers: number = 0;
  stats:any;

  ngOnInit() {
    this.storedbloc = this.serviceBloc.getBloc();

    if (this.storedbloc && this.storedbloc.chambers) {
      this.numberOfChambers = this.storedbloc.chambers.length;
    }

    console.log(this.storedbloc);
    console.log(this.storedbloc?.chambers);
    console.log("Number of chambers: ", this.numberOfChambers);
    this.getstatistics(this.storedbloc?.idBloc)
  }
  getstatistics(id:any){
    this.serviceBloc.countChambersByType(id).subscribe((d)=>{
      this.stats=d;
      console.log(d);
    })
  }
  GoBack(){
    this.location.back();
  }
}
