import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import {catchError, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { }
  Login(credentials: any) {
    return this.http.post(environment.baseURL + environment.AuthentificationBackendURL, credentials, this.httpOptions)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 404) {
            console.error('Bad Request:', error.message);
          } else if (error.status === 401) {
            console.error('Unauthorized:', error.message);
          } else if (error.status === 403) {
            console.error('Forbidden:', error.message);
          } else {
            console.error('Server Error:', error.message);
          }
          return throwError(error);
        })
      );
  }

  ForgetPassword(email: string) {
    const params = new HttpParams().set('email', email);
    return this.http.get(environment.baseURL + 'UserRestController/SendEmail', { params })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          // Handle forget password errors here
          return throwError(error);
        })
      );
  }


}
