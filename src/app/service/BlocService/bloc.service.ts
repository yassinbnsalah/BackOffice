import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs';
import {Bloc} from "../../model/Bloc";
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class BlocService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http:HttpClient) {
    }
  addBloc(nom:String,bloc:Bloc):Observable<Bloc>{
    console.log(environment.baseURL+environment.BlocBackendAPIS+"/addBloc/"+nom);
    return this.http.post<Bloc>(environment.baseURl2+environment.BlocBackendAPIS+"/addBloc/"+nom,bloc,this.httpOptions);
  }
}
