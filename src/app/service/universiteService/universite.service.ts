import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import { Universite } from 'src/app/model/Universite';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class UniversiteService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  selectedStatus: string = 'En attente';

  constructor(private http : HttpClient) { }
  getAllUniversite():Observable<Universite[]>{
    return this.http.get<Universite[]>(environment.baseURL+
     "findAllU",this.httpOptions)
  }

  getUniversiteByID(id:any):Observable<Universite>{
    return this.http.get<Universite>(environment.baseURL
     +"findByIdU/"+id,this.httpOptions)
  }


  /*
  updateStatus(universite: Universite): Observable<Universite> {
    return this.http.put<Universite>(
      `${environment.baseURL}/updateStatus/${universite.idUniversite}`,
      universite, // Send the Universite object as the request body
      this.httpOptions
    );
  }*/

  updateStatus(id: number, status: string): Observable<Universite> {
   // const url = `${environment.baseURL}/updateStatus/${id}?status=${status}`;
    return this.http.put<Universite>(environment.baseURL
      +"updateStatus/"+id+"?status="+status, null, this.httpOptions);
  }


}
