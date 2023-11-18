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
  setBloc(data:Bloc){
    this.bloc=data;
  }
  getBloc(){
    return this.bloc;
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
}
