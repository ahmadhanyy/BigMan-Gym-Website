import { Injectable } from '@angular/core';
import { IProduct } from '../Interfaces/iproduct';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, switchMap, forkJoin, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { UserService } from './user.service';
import { IWishlistItem } from '../Interfaces/iwishlist-item';
import { INewWishlistItem } from '../Interfaces/inew-wishlist-item';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  apiUrl = environment.apiUrl;
  wishlistItems: IWishlistItem[] = []; // Store wishlist items here

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
    const headers = this.getHeaders();
    return this.httpClient.get<IWishlistItem[]>(
      `${this.apiUrl}/wishlist-items?filters[userId][$eq]=${userId}&populate=product.images&populate=product.prod_sizes&populate=product.prod_colors`,
      { headers }
    ).pipe(
      tap((response: any) => {
        this.wishlistItems = response.data; // Store items in local state
      })
    );
  }


  addToWishlist(wishlistItem: INewWishlistItem): Observable<IWishlistItem> {
    // Create the payload structure expected by the API
    const payload = {
      data: {
        userId: wishlistItem.userId,
        product: wishlistItem.product.id,
      }
    };
    const headers = this.getHeaders();
    return this.httpClient.post<IWishlistItem>(`${this.apiUrl}/wishlist-items`, payload, { headers });
  }

  removeFromWishlistByWishItem(itemDocId: string): Observable<any> {
    const headers = this.getHeaders();
    return this.httpClient.delete(`${this.apiUrl}/wishlist-items/${itemDocId}`, { headers });
  }

  removeFromWishlistByProduct(item: IProduct): Observable<any> {
    let wishlistItem = this.wishlistItems.find(wishItem => wishItem.product.id == item.id);
    if (!wishlistItem) {
      throw new Error('Item not found in wishlist');
    }
    const headers = this.getHeaders();
    return this.httpClient.delete(`${this.apiUrl}/wishlist-items/${wishlistItem.documentId}`, { headers });
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

  isInWishlist(product: IProduct): boolean {
    return this.wishlistItems.some(item => item.product.id === product.id);
  }

}
