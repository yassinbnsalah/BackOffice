import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Chamber } from '../model/Chamber';
import { environment } from 'src/environments/environment.development';

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

  getChamberByReservationID(id: any): Observable<Chamber> {
    return this.http.get<Chamber>(environment.baseURL
      + environment.ChamberBackendAPIS + "/getChambersByReservation/" + id, this.httpOptions)
  }
}
