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
      +environment.FoyerBackendAPIS+"/AddFoyer",foyer,this.httpOptions);}
 
  updateFoyer(foyer: Foyer): Observable<Foyer> {
    return this.http.put<Foyer>(environment.baseURL
      +environment.FoyerBackendAPIS+"/UpdateFoyer", foyer);
  }

}
