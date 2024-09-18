import { Injectable } from '@angular/core';
import { IBranch } from '../Interfaces/ibranch';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BranchService {
  private apiUrl = 'http://localhost:3000'
  branches: IBranch[] = []
  constructor(private httpClient: HttpClient) {
    this.branches = [
      {"id":1,"name":"Abbas El Akkad","address":"Abbas El Akkad, Naser city, Cairo","phone":"1234567890"},
      {"id":2,"name":"Zahraa Naser City","address":"Zahraa Naser City, Cairo","phone":"1234567890"},
      {"id":3,"name":"5th Settlement","address":"5th Settlement, Cairo","phone":"1234567890"},
      {"id":4,"name":"El Sherouq City","address":"El Sherouq City, Cairo","phone":"1234567890"},
      {"id":5,"name":"Banha","address":"Banha, El Qaliubia","phone":"1234567890"},
      {"id":6,"name":"Zagazig","address":"Zagazig, El Sharqia","phone":"1234567890"},
      {"id":7,"name":"Smouha","address":"Smouha, Alexandria","phone":"1234567890"},
      {"id":8,"name":"El Agamy","address":"El Agamy, Alexandria","phone":"1234567890"},
      {"id":9,"name":"Marena 5","address":"Marena 5, North Coast","phone":"1234567890"},
      {"id":10,"name":"Dahab","address":"Dahab, Dahab City","phone":"1234567890"}
    ]
  }

  getBranches(): IBranch[] {//Observable<IBranch[]> {
    //return this.httpClient.get<IBranch[]>(`${this.apiUrl}/branches`);
    return this.branches;
  }

}
