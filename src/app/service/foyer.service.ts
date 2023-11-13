import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Foyer } from '../model/Foyer';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class FoyerService {
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
    }
    private apiUrl0 = 'http://localhost:8081/FoyerRestController';
  constructor(private http : HttpClient) { }

  getAllFoyer():Observable<Foyer[]>{
    return this.http.get<Foyer[]>(environment.baseURL
      +environment.FoyerBackendAPIS+"/findAllFoyer",this.httpOptions)
  }
  getFoyerByID(id:any):Observable<Foyer>{
    return this.http.get<Foyer>(environment.baseURL
      +environment.FoyerBackendAPIS+"/findByIdFoyer/"+id,this.httpOptions)
  }
  addFoyer(foyer: Foyer): Observable<Foyer> {
    return this.http.post<Foyer>(environment.baseURL
      +environment.FoyerBackendAPIS+"/AddFoyer/esprit",foyer,this.httpOptions);}
 
  updateFoyer(foyer: Foyer): Observable<Foyer> {
    return this.http.put<Foyer>(environment.baseURL
      +environment.FoyerBackendAPIS+"/UpdateFoyer", foyer);
  }
  updateFoyerEtat(idFoyer: number): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.apiUrl0}/updateEtatById/${idFoyer}`;
    return this.http.put(url, { headers, responseType: 'text' });
}
    /*addUniversite(universiteData: FormData): Observable<Universite> {
      const httpOptions = {
        headers: new HttpHeaders(),
      };
  
      return this.http.post<Universite>(`${this.apiUrl}`, universiteData, httpOptions);
    }*/


}
