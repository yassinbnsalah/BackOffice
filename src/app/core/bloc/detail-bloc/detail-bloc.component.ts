import {Component, OnInit} from '@angular/core';
import {BlocService} from "../../../service/BlocService/bloc.service";
import {Bloc} from "../../../model/Bloc";

@Component({
  selector: 'app-detail-bloc',
  templateUrl: './detail-bloc.component.html',
  styleUrls: ['./detail-bloc.component.css']
})
export class DetailBlocComponent implements OnInit{

  constructor(private serviceBloc:BlocService) {
  }
  storedbloc: Bloc | null = null;

  ngOnInit() {
    this.storedbloc = this.serviceBloc.getBloc();
    console.log(this.storedbloc);
    console.log(this.storedbloc.chambers);
  }



}
