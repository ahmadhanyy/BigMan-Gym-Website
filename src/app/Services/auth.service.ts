import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IUser } from '../Interfaces/iuser';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/api/auth';

  constructor() {}
/*
  // Register a new user
  register(user: IUser): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  // Log in an existing user
  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials).pipe(
      map((response: any) => {
        localStorage.setItem('token', response.token);
        return response;
      })
    );
  }
*/
    login(): void{
      localStorage.setItem('token', '123456');
    }

    // Log out the user
    logout(): void {
      localStorage.removeItem('token');
    }

    // Check if the user is logged in
    get isLoggedIn(): boolean {
      return !!localStorage.getItem('token');
    }

    // Get the token from local storage
    getToken(): string | null {
      return localStorage.getItem('token');
    }

}
