import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, switchMap, forkJoin } from 'rxjs';
import { ICartItem } from '../Interfaces/icart-item';
import { environment } from '../../environments/environment';
import { INewCartItem } from '../Interfaces/inew-cart-item';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class CartItemService {
  apiUrl = environment.apiUrl;
  private cartCountSubject = new BehaviorSubject<number>(0);  // Initial cart count is 0
  cartCount$ = this.cartCountSubject.asObservable();  // Observable for components to subscribe to

  constructor(private httpClient: HttpClient,
              private userService: UserService) {}

  private getHeaders(): HttpHeaders {
    const token = this.userService.getToken(); // Ensure the JWT token is available
    if (!token) {
      throw new Error('No token found');
    }
    return new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
  }

  getCartItems(userId: number): Observable<ICartItem[]> {
    return this.httpClient.get<ICartItem[]>(`${this.apiUrl}/cart-items?filters[userId][$eq]=${userId}`);
  }

  addToCart(cartItem: INewCartItem): Observable<ICartItem> {
    const headers = this.getHeaders();
    return this.httpClient.post<ICartItem>(`${this.apiUrl}/cart-items`, cartItem, { headers });
  }

  removeFromCart(itemDocId: number): Observable<any> {
    const headers = this.getHeaders();
    return this.httpClient.delete(`${this.apiUrl}/cart-items/${itemDocId}`, { headers });
  }

  decrementItem(cartItem: ICartItem, itemDocId: number): Observable<ICartItem> {
    const headers = this.getHeaders();
    return this.httpClient.put<ICartItem>(`${this.apiUrl}/cart-items/${itemDocId}`, cartItem, { headers });
  }

  clearCart(userId: string): Observable<any> {
    const headers = this.getHeaders();
    // First, fetch all cart items for the user and delete them one by one
    return this.getCartItems(Number(userId)).pipe(
      switchMap((cartItems) => {
        // Loop through all cart items and issue DELETE requests
        const deleteRequests = cartItems.map(item => this.httpClient.delete(`${this.apiUrl}/cart-items/${item.id}`, { headers }));
        return forkJoin(deleteRequests); // Execute all DELETE requests concurrently
      })
  );
  }

}
