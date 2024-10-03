import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { INewUser } from '../Interfaces/inew-user';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  loginApi = environment.loginApi;
  apiUrl = environment.apiUrl;
  private loggedUserIdSubject = new BehaviorSubject<number | null>(null);  // Initial user id is null
  loggedUserId$ = this.loggedUserIdSubject.asObservable();  // Observable for components to subscribe to

  constructor(private httpClient: HttpClient) { }

  // Register a new user
  register(newUser: INewUser): Observable<any> {
    const body = {
      username: newUser.username,
      email: newUser.email,
      password: newUser.password
    };
    return this.httpClient.post(`${this.loginApi}/register`, body);
  }

  // Login an existing user and store the JWT token
  login(email: string, password: string): Observable<any> {
    const body = {
      identifier: email,
      password: password
    };

    return this.httpClient.post(`${this.loginApi}`, body).pipe(
      tap((response: any) => {
        // Store JWT token in localStorage
        if (response.jwt) {
          localStorage.setItem('jwtToken', response.jwt);
        }
      })
    );
  }

  // Get the token from localStorage
  getToken(): string | null {
    return localStorage.getItem('jwtToken');
  }

  // Clear the token on logout
  logout(): void {
    localStorage.removeItem('jwtToken');
  }

  // Delete user by ID
  deleteUser(userId: number): Observable<any> {
    const token = localStorage.getItem('jwtToken');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.httpClient.delete(`${this.apiUrl}/${userId}`, { headers });
  }

  // Get user by email
  getUserByEmail(email: string): Observable<any> {
    const token = this.getToken() // Ensure the JWT token is available
    if (!token) {
      throw new Error('No token found');
    }
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    // Filter by email using query params
    return this.httpClient.get(`${this.apiUrl}/users?email=${email}`, { headers });
  }

}
