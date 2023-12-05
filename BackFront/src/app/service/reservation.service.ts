import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  constructor(private http: HttpClient) { }

  getReservationByUniversiteName(nom: any): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(environment.baseURL
      + environment.ReservationBackendAPIS + "/findReservationByUniversiteName/" + nom, this.httpOptions)
  }

  getAllReservation(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(environment.baseURL
      + environment.ReservationBackendAPIS + "/findAllReservation", this.httpOptions)
  }

  getReservationByID(id: any): Observable<Reservation> {
    return this.http.get<Reservation>(environment.baseURL
      + environment.ReservationBackendAPIS + "/findReservationByID/" + id, this.httpOptions)
  }

  updateReservationState(id: any, state: any): Observable<Reservation> {
    return this.http.put<Reservation>(environment.baseURL + environment.ReservationBackendAPIS
      + "/updateReservationStatus/" + id + "/" + state, this.httpOptions)
  }

  CreateReservation(numero: any, cin: any): Observable<Reservation> {
    return this.http.post<Reservation>(environment.baseURL + environment.ReservationBackendAPIS
      + "/addReservation/" + numero + "/" + cin, this.httpOptions)
  }
}
