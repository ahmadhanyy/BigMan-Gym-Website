import { Injectable } from '@angular/core';
import { IMembership } from '../Interfaces/imembership';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MembershipService {
  private apiUrl = 'http://localhost:3000'
  memberships: IMembership[] = []

  constructor(private httpClient: HttpClient) {
    this.memberships = [
      {"id": 1, "name": "Bronze", "price": 1500, "duration": "1 month", "description": "Access to the Gym room, Path room and Lockers only"},
      {"id": 2, "name": "Silver", "price": 3500, "duration": "3 months", "description": "Access to the Gym room, Path room, Lockers, Spa and Jacuzzi and Swimming Pool.", "discountPrecent": 5},
      {"id": 3, "name": "Gold", "price": 5500, "duration": "6 months", "description": "Access to the Gym room, Path room, Lockers, Spa, Jacuzzi and Swimming Pool. A Customized nutrition plan.", "discountPrecent": 10},
      {"id": 4, "name": "Platinum", "price": 9500, "duration": "1 year", "description": "Access to all gym facilities. A Customized nutrition plan. Training with private coach 2 days per week.", "discountPrecent": 15}
    ]
  }

  getMemberships(): IMembership[] { //Observable<IMembership[]> {
    //return this.httpClient.get<IMembership[]>(`${this.apiUrl}/memberships`);
    return this.memberships;
  }
}
