import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chamber } from 'src/app/model/Chamber';
import { ChamberService } from 'src/app/service/chamber.service';

@Component({
  selector: 'app-chamber-liste',
  templateUrl: './chamber-liste.component.html',
  styleUrls: ['./chamber-liste.component.css']
})
export class ChamberListeComponent implements OnInit {
  chambers !: Chamber[] ; 
  constructor(private chamberService : ChamberService,
    private router : Router){}
  ngOnInit(): void {
    this.getListeChamber() ; 
  }

  getListeChamber(){
    this.chamberService.getAllChamber().subscribe((d)=>{
      this.chambers = d ;
      console.log(d);
      
    })
  }
  GoToChamberDetails(id:any){
      this.router.navigate(["chamber/",id])
  } 
}

