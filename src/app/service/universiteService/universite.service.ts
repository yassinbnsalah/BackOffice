import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import { Universite } from 'src/app/model/Universite';
import { environment } from 'src/environments/environment.development';
import {Document} from "../../model/Documents";


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
    return this.http.get<Universite[]>(environment.baseURL+environment.UniversiteBackendAPIS+
     "/findAll",this.httpOptions)
  }

  getUniversiteByID(id:any):Observable<Universite>{
    return this.http.get<Universite>(environment.baseURL
      +environment.UniversiteBackendAPIS+"/findById/"+id,this.httpOptions)
  }

  getUniversiteByNomU(name:any):Observable<Universite>{
    return this.http.get<Universite>(environment.baseURL
      +environment.UniversiteBackendAPIS+"/findByUniversiteNom/"+name,this.httpOptions)
  }

  getUniByEmail(email:any):Observable<Universite>{
    return this.http.get<Universite>(environment.baseURL
      +environment.UniversiteBackendAPIS+"/findUniversiteByEmailAgent/"+email,this.httpOptions)
  }

  updateUniversite(universite: Universite): Observable<Universite> {
    return this.http.put<Universite>(environment.baseURL
      +environment.UniversiteBackendAPIS+"/editUniversite", universite);
  }

  updateStatus(id: number, status: string): Observable<Universite> {
   // const url = `${environment.baseURL}/updateStatus/${id}?status=${status}`;
    return this.http.put<Universite>(environment.baseURL
      +environment.UniversiteBackendAPIS+"/updateStatus/"+id+"?status="+status, null, this.httpOptions);
  }

  findUniversiteByNomUniversiteAndEmail(name: string, email: string): Observable<Universite> {
    const url = `${environment.baseURL}${environment.UniversiteBackendAPIS}/find/${name}/${email}`;
    return this.http.get<Universite>(url, this.httpOptions);
  }

  getDocuments(id : any): Observable<Document>{
    const url = `${environment.baseURL}${environment.UniversiteBackendAPIS}/download/${id}`;
    return this.http.get<Document>(url, this.httpOptions);
  }

}
