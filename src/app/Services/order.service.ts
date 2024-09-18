import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IOrder } from '../Interfaces/iorder';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = 'http://localhost:3000'

  constructor(private httpClient: HttpClient) { }

  getOrders(): Observable<IOrder[]> {
    return this.httpClient.get<IOrder[]>(`${this.apiUrl}/orders`);
  }

  addOrder(order: any) {
    return this.httpClient.post(`${this.apiUrl}/orders`, order);
  }

  deleteOrder(id: number) {
    return this.httpClient.delete(`${this.apiUrl}/orders/${id}`);
  }
}
