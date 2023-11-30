import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Demande } from '../model/Demande';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
    }
  constructor(private http: HttpClient) { }

  getListDemande(universite:string):Observable<Demande[]>{
    return this.http.get<Demande[]>(environment.baseURL+
      environment.DemandeBackendURL+"/listedemandebyUniversite/"+universite, this.httpOptions)
  }

  updateDemandeState(state:any , id:any):Observable<Demande>{
    return this.http.put<Demande>(environment.baseURL+
      environment.DemandeBackendURL+"/updatedemande/"+state +"/"+id , this.httpOptions)

  }
}
