import { catchError, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

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
    return this.http.post(environment.baseURL +
      environment.AuthentificationBackendURL,
      credentials
      , this.httpOptions);
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
