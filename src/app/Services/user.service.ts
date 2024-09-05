import { Injectable } from '@angular/core';
import { IUser } from '../Interfaces/iuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  users: IUser[] = [{'id': 1, 'name': 'John Doe', 'email': 'aa@aa.com', 'password': '1234', 'phone': '1234567890', 'address': {'buildingNo': '15', 'street': 'El Shabab Road', 'city': 'El Sherouq City'}}];
}
