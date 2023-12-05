import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {catchError, Observable, throwError} from 'rxjs';
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

  getUserByEmailReal(id:any):Observable<User>{
    return this.http.get<User>(environment.baseURL
      +environment.UserBackendAPIS+"/findUserByEmail/"+id,this.httpOptions)
  }

  getUserbyUniversiteAndRole(nom:any , role:String):Observable<User[]>{
    return this.http.get<User[]>(environment.baseURL
      +environment.UserBackendAPIS+"/findEtudiantByEcoleAndRole/"+nom+"/"+role,this.httpOptions)
  }

  getUsers():Observable<User[]>{
    return this.http.get<User[]>(environment.baseURL
      +environment.UserBackendAPIS+"/findUsers",this.httpOptions)
  }

  toggleUser(email: string): Observable<void> {
    const toggleEndpoint = `${environment.baseURL}${environment.UserBackendAPIS}/toggelUser?email=${email}`;
    return this.http.put<void>(toggleEndpoint, null, this.httpOptions);
  }

  changePassword(email: string, oldPass: string, newPass: string): Observable<any> {
    const requestBody = { email, oldPass, newPass };

    return this.http.put<any>(`${environment.baseURL}${environment.UserBackendAPIS}/change-password`, requestBody, this.httpOptions)
      .pipe(
        catchError(error => {
          if (error.status === 406) {
            console.error('Old password does not match the current password');
          } else {
            console.error('An error occurred:', error);
          }
          return throwError(error);
        })
      );
  }

  resetPassword(email: string, password: string): Observable<any> {
    // Check if environment variables are defined
    if (!environment.baseURL || !environment.UserBackendAPIS) {
      return throwError('Environment variables are not defined.');
    }
    const resetEndpoint = `${environment.baseURL}${environment.UserBackendAPIS}/reset-password/${email}`;
    const queryParams = `?password=${password}`;
    const fullResetEndpoint = resetEndpoint + queryParams;
    return this.http.put(fullResetEndpoint, null, { ...this.httpOptions, responseType: 'text' });
  }


  updateUser(user: User): Observable<User> {
    const updateUserEndpoint = `${environment.baseURL}${environment.UserBackendAPIS}/updateUser`;
    return this.http.put<User>(updateUserEndpoint, user, this.httpOptions);
  }

  uploadImg(formData: FormData, idUser: any): Observable<User> {
    return this.http.post<User>(`${environment.baseURL}${environment.UserBackendAPIS}/uploadImg/${idUser}`, formData);
  }

  addImageToUser(user: User): Observable<any> {
    const formData: FormData = new FormData();

    Object.entries(user).forEach(([key, value]) => {
      if (key === 'image' && value) {
        formData.append('image', value as Blob, (value as File).name);
      } else {
        formData.append(key, value.toString());
      }
    });
    return this.http.post(`${environment.baseURL}${environment.UserBackendAPIS}`, formData);
  }


}
