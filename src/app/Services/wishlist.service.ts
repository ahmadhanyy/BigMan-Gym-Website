import { Injectable } from '@angular/core';
import { IProduct } from '../Interfaces/iproduct';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, switchMap, forkJoin } from 'rxjs';
import { environment } from '../../environments/environment';
import { UserService } from './user.service';
import { IWishlistItem } from '../Interfaces/iwishlist-item';
import { INewWishlistItem } from '../Interfaces/inew-wishlist-item';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  apiUrl = environment.apiUrl;

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

  getWishlistItems(userId: number): Observable<IWishlistItem[]> {
    return this.httpClient.get<IWishlistItem[]>(`${this.apiUrl}/wishlist-items?filters[userId][$eq]=${userId}`);
  }

  addToWishlist(wishlistItem: INewWishlistItem): Observable<IWishlistItem> {
    const headers = this.getHeaders();
    return this.httpClient.post<IWishlistItem>(`${this.apiUrl}/wishlist-items`, wishlistItem, { headers });
  }

  removeFromWishlist(itemDocId: string): Observable<any> {
    const headers = this.getHeaders();
    return this.httpClient.delete(`${this.apiUrl}/wishlist-items/${itemDocId}`, { headers });
  }

  clearWishlist(userId: number): Observable<any> {
    const headers = this.getHeaders();
    // First, fetch all cart items for the user and delete them one by one
    return this.getWishlistItems(Number(userId)).pipe(
      switchMap((wishlistItems) => {
        // Loop through all cart items and issue DELETE requests
        const deleteRequests = wishlistItems.map(item => this.httpClient.delete(`${this.apiUrl}/wishlist-items/${item.id}`, { headers }));
        return forkJoin(deleteRequests); // Execute all DELETE requests concurrently
      })
  );
  }

}
