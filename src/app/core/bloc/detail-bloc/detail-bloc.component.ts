
import {Component, OnInit} from '@angular/core';
import { Bloc } from 'src/app/model/Bloc';
import { BlocService } from 'src/app/service/BlocService/bloc.service';

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

