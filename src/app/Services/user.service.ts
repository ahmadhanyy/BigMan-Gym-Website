import { Injectable } from '@angular/core';
<<<<<<< Updated upstream
=======
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { INewUser } from '../Interfaces/inew-user';
import { environment } from '../../environments/environment';
>>>>>>> Stashed changes
import { IUser } from '../Interfaces/iuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

<<<<<<< Updated upstream
  constructor() { }
=======
  constructor(private httpClient: HttpClient) {
    if (this.isBrowser()) {
      // Load the user ID from localStorage if available on service initialization
      const storedUserId = localStorage.getItem('userId');
      if (storedUserId) {
        this.loggedUserIdSubject.next(Number(storedUserId));
      }
    }
  }

  // Utility method to check if the environment is a browser
  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }

  // Register a new user
  register(newUser: INewUser): Observable<IUser> {
    const body = {
      username: newUser.username,
      email: newUser.email,
      password: newUser.password
    };
    return this.httpClient.post<IUser>(`${this.loginApi}/register`, body).pipe(
      tap((response: any) => {
        if (this.isBrowser()) {
          if (response.userId) {
            localStorage.setItem('userId', response.userId);
            this.loggedUserIdSubject.next(response.userId);
          }
        }
      })
    );
  }

  // Login an existing user and store the JWT token
  login(email: string, password: string): Observable<IUser> {
    const body = {
      identifier: email,
      password: password
    };
    return this.httpClient.post<IUser>(`${this.loginApi}`, body).pipe(
      tap((response: any) => {
        if (this.isBrowser()) {
          if (response.jwt) {
            localStorage.setItem('jwtToken', response.jwt);
          }
          if (response.user.id) {
            localStorage.setItem('userId', response.user.id);
            this.loggedUserIdSubject.next(response.user.id);
          }
        }
      })
    );
  }

    // Get the JWT token from localStorage
    getToken(): string | null {
      if (this.isBrowser()) {
        return localStorage.getItem('jwtToken');
      }
      return null;
    }

    // Clear the token and user ID on logout
    logout(): void {
      if (this.isBrowser()) {
        localStorage.removeItem('jwtToken');
        localStorage.removeItem('userId');
        this.loggedUserIdSubject.next(null);
      }
    }

  // Delete user by ID
  deleteUser(userId: number): Observable<IUser> {
    const token = localStorage.getItem('jwtToken');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    return this.httpClient.delete<IUser>(`${this.apiUrl}/${userId}`, { headers });
  }

  // Get user by email
  getUserByEmail(email: string): Observable<IUser> {
    const token = this.getToken() // Ensure the JWT token is available
    if (!token) {
      throw new Error('No token found');
    }
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    // Filter by email using query params
    return this.httpClient.get<IUser>(`${this.apiUrl}/users?email=${email}`, { headers });
  }

  // Get user by ID
  getUserById(userId: number): Observable<IUser> {
    const token = this.getToken() // Ensure the JWT token is available
    if (!token) {
      throw new Error('No token found');
    }
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    return this.httpClient.get<IUser>(`${this.apiUrl}/users/${userId}`, { headers });
  }
>>>>>>> Stashed changes

  users: IUser[] = [{'id': 1, 'name': 'John Doe', 'email': 'aa@aa.com', 'password': '1234', 'phone': '1234567890', 'address': {'buildingNo': '15', 'street': 'El Shabab Road', 'city': 'El Sherouq City'}}];
}
