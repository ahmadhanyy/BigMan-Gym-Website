import { Injectable } from '@angular/core';
import { IProduct } from '../Interfaces/iproduct';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private wishlistItems: IProduct[] = [];

  constructor() { }

  addToWishlist(product: IProduct) {
    let prod = this.wishlistItems.find(item => item.id === product.id);
    if (!prod) {
      this.wishlistItems.push(product);
      product.isFav = true;
    }
    console.log(this.wishlistItems);
  }

  removeFromWishlist(product: IProduct) {
    const prodIndex = this.wishlistItems.findIndex(item => item.id === product.id);
    if (prodIndex > -1) {
      this.wishlistItems.splice(prodIndex, 1);
      product.isFav = false;
    }
    console.log(this.wishlistItems);
  }

  getWishlistItems(): IProduct[] {
    return this.wishlistItems;
  }

  getWishlistCount(): number {
    return this.wishlistItems.length;
  }

  clearWishlist() {
    this.wishlistItems = [];
  }
}
