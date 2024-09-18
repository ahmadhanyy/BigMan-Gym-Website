import { Injectable } from '@angular/core';
import { ICartItem } from '../Interfaces/icart-item';
import { IProduct } from '../Interfaces/iproduct';
import { BehaviorSubject } from 'rxjs';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartCountSubject = new BehaviorSubject<number>(0);  // Initial cart count is 0
  cartCount$ = this.cartCountSubject.asObservable();  // Observable for components to subscribe to
  private cart: ICartItem[] = [];
  cartItemId: number = 0;

  constructor(private prodService: ProductService) {}

  addToCart(cartItem: ICartItem){
    let isItem = this.cart.find(item => item.id === cartItem.id)
    if (isItem) {
      isItem.count++;
    }
    else {
      this.cart.push(cartItem);
      this.cartCountSubject.next(this.cartCountSubject.value + 1);  // Update the cart count
    }
  }

  removeFromCart(cartItem: ICartItem) {
    const itemIndex = this.cart.findIndex(item => item.id === cartItem.id);
    if (itemIndex > -1) {
      this.cart.splice(itemIndex, 1);
      this.cartCountSubject.next(this.cartCountSubject.value - 1);  // Update the cart count
    }
  }

  decrementItem(cartItem: ICartItem) {
    let item = this.cart.find(item => item.id === cartItem.id);
    if (item && item.count > 1) {
      cartItem.count--;
    }
  }

  getCartItems(): ICartItem[] {
    return this.cart;
  }

  getCartCount(): number {
    return this.cartCountSubject.value;  // Get the current value
  }

  clearCart() {
    this.cart = [];
    this.cartCountSubject.next(0);  // Update the cart count
  }
}
