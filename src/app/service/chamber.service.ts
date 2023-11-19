import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Chamber } from '../model/Chamber';
import { environment } from 'src/environments/environment.development';
import { Bloc } from '../model/Bloc';

@Injectable({
  providedIn: 'root'
})
export class ChamberService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { }

  getBLocByChamber(id: any): Observable<Bloc> {
    return this.http.get<Bloc>(environment.baseURL
      + environment.BlocBackendAPIS + "/findBLocByChamber/" + id, this.httpOptions)

  }
  getChamberByUniversiteName(nom: any): Observable<Chamber[]> {
    return this.http.get<Chamber[]>(environment.baseURL +
      environment.ChamberBackendAPIS + "/findChambersbyUniversite/" + nom, this.httpOptions)
  }

  getAvailabeChamberByUniversiteName(nom: any): Observable<Chamber[]> {
    return this.http.get<Chamber[]>(environment.baseURL +
      environment.ChamberBackendAPIS + "/findAvailableChambersbyUniversite/" + nom, this.httpOptions)
  }
  getAllChamber(): Observable<Chamber[]> {
    return this.http.get<Chamber[]>(environment.baseURL
      + environment.ChamberBackendAPIS + "/findAllChambers", this.httpOptions)
  }

  getChamberByID(id: any): Observable<Chamber> {
    return this.http.get<Chamber>(environment.baseURL
      + environment.ChamberBackendAPIS + "/findChamberByID/" + id, this.httpOptions)
  }
  addChamber(chamber: Chamber): Observable<Chamber> {
    return this.http.post<Chamber>(environment.baseURL
      + environment.ChamberBackendAPIS + "/addChamber", chamber)
  }
  updateChamber(chamber: Chamber): Observable<Chamber> {
    return this.http.put<Chamber>(environment.baseURL
      + environment.ChamberBackendAPIS + "/updateChamber", chamber);
  }
  getChamberByReservationID(id: any): Observable<Chamber> {
    return this.http.get<Chamber>(environment.baseURL
      + environment.ChamberBackendAPIS + "/getChambersByReservation/" + id, this.httpOptions)
  }

}
