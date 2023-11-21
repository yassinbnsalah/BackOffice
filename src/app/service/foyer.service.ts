import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Foyer } from '../model/Foyer';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Bloc } from '../model/Bloc';
import { Universite } from '../model/Universite';

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
    private apiUrl = 'http://localhost:8081/FoyerRestController/AddFoyer';
    private api = 'http://localhost:8081/FoyerRestController/uploadImg/';
  constructor(private http : HttpClient) { }
  uploadImg(formData: FormData, idFoyer : any) : Observable<Foyer>{
    return this.http.post<Foyer>(this.api+idFoyer, formData);
}
  addFoyerWithImage(foyer: Foyer): Observable<any> {
      const formData: FormData = new FormData();

      Object.entries(foyer).forEach(([key, value]) => {
          if (key === 'image' && value) {
              formData.append('image', value as Blob, (value as File).name);
          } else {
              formData.append(key, String(value));
          }
      });

      return this.http.post(`${this.apiUrl}`, formData);
  }
  
  getFoyerByUniversiteName(nom:any):Observable<Foyer[]>{
    return this.http.get<Foyer[]>(environment.baseURL
      +environment.FoyerBackendAPIS+"/findFoyerByUnversiteName/"+nom , this.httpOptions)
  }
  getBLocByFoyer(id:any):Observable<Bloc[]>{
    return this.http.get<Bloc[]>(environment.baseURL
      +environment.BlocBackendAPIS+"/findBLocByFoyer/"+id , this.httpOptions)
  }
  getUniversiteByFoyer(id:any):Observable<Universite[]>{
    return this.http.get<Universite[]>(environment.baseURL
      +environment.UniversiteBackendAPIS+"/findUniversiteByFoyer/"+id , this.httpOptions)
  }
  getAllFoyer():Observable<Foyer[]>{
    return this.http.get<Foyer[]>(environment.baseURL
      +environment.FoyerBackendAPIS+"/findAllFoyer",this.httpOptions)
  }
  getFoyerByID(id:any):Observable<Foyer>{
    return this.http.get<Foyer>(environment.baseURL
      +environment.FoyerBackendAPIS+"/findByIdFoyer/"+id,this.httpOptions)
  }
  addFoyer(name:any , foyer: Foyer): Observable<Foyer> {
    return this.http.post<Foyer>(environment.baseURL
      +environment.FoyerBackendAPIS+"/AddFoyer/"+name,foyer,this.httpOptions);}
 
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
