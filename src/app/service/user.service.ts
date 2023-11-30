import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/User';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
    }
  constructor(private http : HttpClient) { }
  getUserByEmail(id:any):Observable<User>{
    return this.http.get<User>(environment.baseURL
      +environment.ReservationBackendAPIS+"/findReservationByID/"+id,this.httpOptions)
  }

  getUserbyUniversiteAndRole(nom:any , role:String):Observable<User[]>{
    return this.http.get<User[]>(environment.baseURL
      +environment.UserBackendAPIS+"/findEtudiantByEcoleAndRole/"+nom+"/"+role,this.httpOptions)
  }
}
