import { Injectable } from '@angular/core';
import { IUser } from '../Interfaces/iuser';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000'
  users: IUser[] = []

  constructor(private httpClient: HttpClient) {
    this.users = [

    ]
  }

  getUser(): Observable<IUser> {
    return this.httpClient.get<IUser>(`${this.apiUrl}/users`);
  }

  addUser(user: IUser) {
    return this.httpClient.post(`${this.apiUrl}/users`, user);
  }

  deleteUser(id: number) {
    return this.httpClient.delete(`${this.apiUrl}/users/${id}`);
  }

  updateUser(user: IUser) {
    return this.httpClient.put(`${this.apiUrl}/users/${user.id}`, user);
  }
}
