import { Chamber } from './../../../model/Chamber';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';
import { ChamberService } from 'src/app/service/chamber.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.css']
})
export class AddReservationComponent implements OnInit{
  chambers !: Chamber[] ; 
  etudiants !: User[] ; 
  constructor(private serviceChamber : ChamberService,private userService : UserService){}
  ngOnInit(): void {
    
  }



}
