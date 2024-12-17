import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, switchMap, forkJoin } from 'rxjs';
import { ICartItem } from '../Interfaces/icart-item';
import { environment } from '../../environments/environment';
import { INewCartItem } from '../Interfaces/inew-cart-item';
import { UserService } from './user.service';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class CartItemService {
  apiUrl = environment.apiUrl;
  private cartCountSubject = new BehaviorSubject<number>(0);  // Initial cart count is 0
  cartCount$ = this.cartCountSubject.asObservable();  // Observable for components to subscribe to

  constructor(private httpClient: HttpClient,
              private userService: UserService,
              private prodService: ProductService) {}

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
    return this.httpClient.get<ICartItem[]>(`${this.apiUrl}/cart-items?filters[userId][$eq]=${userId}&populate=product.images`);
  }

  addToCart(cartItem: INewCartItem): Observable<ICartItem> {
    // Create the payload structure expected by the API
    const payload = {
      data: {
        count: cartItem.count,
        color: cartItem.color,
        size: cartItem.size,
        userId: cartItem.userId,
        product: cartItem.product.id,
      }
    };
    const headers = this.getHeaders();
    return this.httpClient.post<ICartItem>(`${this.apiUrl}/cart-items`, payload, { headers });
  }

  removeFromCart(itemDocId: string): Observable<any> {
    const headers = this.getHeaders();
    return this.httpClient.delete(`${this.apiUrl}/cart-items/${itemDocId}`, { headers });
  }

  incrementItem(cartItem: ICartItem, itemDocId: string): Observable<ICartItem> {
    // Create the payload structure expected by the API
    const payload = {
      data: {
        count: cartItem.count, // Updated count
        color: cartItem.color,
        size: cartItem.size,
        userId: cartItem.userId
      }
    };
    const headers = this.getHeaders();
    return this.httpClient.put<ICartItem>(`${this.apiUrl}/cart-items/${itemDocId}`, payload, { headers });
  }

  decrementItem(cartItem: ICartItem, itemDocId: string): Observable<ICartItem> {
    // Create the payload structure expected by the API
    const payload = {
      data: {
        count: cartItem.count, // Updated count
        color: cartItem.color,
        size: cartItem.size,
        userId: cartItem.userId
      }
    };
    const headers = this.getHeaders();
    return this.httpClient.put<ICartItem>(`${this.apiUrl}/cart-items/${itemDocId}`, payload, { headers });
  }

  clearCart(userId: number): Observable<any> {
    const headers = this.getHeaders();
    return this.getCartItems(Number(userId)).pipe(
      switchMap((cartItems) => {
        console.log('Cart Items:', cartItems); // Log the cart items to check if it is an array
        if (Array.isArray(cartItems)) {
          const deleteRequests = cartItems.map(item =>
            this.httpClient.delete(`${this.apiUrl}/cart-items/${item.id}`, { headers })
          );
          return forkJoin(deleteRequests); // Execute all DELETE requests concurrently
        } else {
          return new Observable((observer) => {
            observer.next([]);
            observer.complete();
          });
        }
      })
    );
  }



  getSubTotalPrice(cartItems: ICartItem[]): number {
    let subTotalPrice: number = 0;
    for (let i = 0; i < cartItems.length; i++) {
      let itemPrice: number = this.prodService.calculateDiscountedPrice(cartItems[i].product);
      subTotalPrice += itemPrice * cartItems[i].count;
    }
    return subTotalPrice;
  }

  getShippigPrice(cartItems: ICartItem[]): number {
    let shippingPrice: number = 0;
    for (let i = 0; i < cartItems.length; i++) {
      for (let j = 0; j < cartItems[i].count; j++) {
        shippingPrice += cartItems[i].product.shippingPrice;
      }
    }
    return shippingPrice;
  }

}
