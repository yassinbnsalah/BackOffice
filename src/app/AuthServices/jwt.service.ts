import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor() { }
  decodeToken(token: string): any {
    try {
      return jwt_decode.jwtDecode(token) as any; // Use 'as any' to avoid TypeScript errors
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  }
}
