import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Reservation } from '../model/Reservation';
@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
    }
  constructor(private http : HttpClient) { }

  getAllReservation():Observable<Reservation[]>{
    return this.http.get<Reservation[]>(environment.baseURL
      +environment.ReservationBackendAPIS+"/findAllReservation",this.httpOptions)
  }

  getReservationByID(id:any):Observable<Reservation>{
    return this.http.get<Reservation>(environment.baseURL
      +environment.ReservationBackendAPIS+"/findReservationByID/"+id,this.httpOptions)
  }
  
}
