import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs';
import {Bloc} from "../../model/Bloc";
import { environment } from 'src/environments/environment.development';
import {ɵElement, ɵFormGroupValue, ɵTypedOrUntyped} from "@angular/forms";


@Injectable({
  providedIn: 'root'
})
export class BlocService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
bloc!:Bloc;
  constructor(private http:HttpClient) {
  }
  private readonly storageKey = 'storedBloc';
  getBloc(): Bloc {
    const storedBloc = localStorage.getItem(this.storageKey);
    return storedBloc ? JSON.parse(storedBloc) : null;
  }
  setBloc(bloc: Bloc): void {
    localStorage.setItem(this.storageKey, JSON.stringify(bloc));
  }

  addBloc(nom: String, bloc: Bloc):Observable<Bloc>{
    return this.http.post<Bloc>(environment.baseURL+environment.BlocBackendAPIS+"/addBloc/"+nom,bloc,this.httpOptions);
  }
  getallBloc():Observable<Bloc[]>{
    return this.http.get<Bloc[]>(environment.baseURL+environment.BlocBackendAPIS+"/findAll",this.httpOptions);
  }
  deleteBloc(id:any):Observable<Bloc>{
    return this.http.delete<Bloc>(environment.baseURL+environment.BlocBackendAPIS+"/deleteByID/"+id,this.httpOptions);
  }
  updatebloc(bloc:Bloc):Observable<Bloc>{
    console.log()
    return this.http.put<Bloc>(environment.baseURL+environment.BlocBackendAPIS+"/editBloc",bloc,this.httpOptions);
  }
  getBlocByChamberId(id:any):Observable<Bloc>{
    return this.http.get<Bloc>(environment.baseURL+
      environment.BlocBackendAPIS+"/findBLocByChamber/"+id , this.httpOptions)
  }

}
