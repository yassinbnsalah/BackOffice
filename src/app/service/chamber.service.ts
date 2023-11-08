import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Chamber } from '../model/Chamber';

@Injectable({
  providedIn: 'root'
})
export class ChamberService {
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
    }
  constructor(private http : HttpClient) { }
  getAllChamber():Observable<Chamber[]>{
    return this.http.get<Chamber[]>(environment.baseURL
      +environment.ChambreBackendAPIS+"/findAllChambers",this.httpOptions)
  }

  getChamberByID(id:any):Observable<Chamber>{
    return this.http.get<Chamber>(environment.baseURL
      +environment.ChambreBackendAPIS+"/findChamberByID/"+id,this.httpOptions)
  }
  addChamber(chamber:Chamber):Observable<Chamber>{
    return this.http.post<Chamber>(environment.baseURL
      +environment.ChambreBackendAPIS+"/addChamber",chamber)
  }
  updateChamber(chamber: Chamber): Observable<Chamber> {
  return this.http.put<Chamber>(environment.baseURL
    +environment.ChambreBackendAPIS+"/updateChamber", chamber);
}

  
}
