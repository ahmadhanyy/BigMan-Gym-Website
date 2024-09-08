import { Injectable } from '@angular/core';
import { ICartItem } from '../Interfaces/icart-item';
import { IProduct } from '../Interfaces/iproduct';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartCountSubject = new BehaviorSubject<number>(0);  // Initial cart count is 0
  cartCount$ = this.cartCountSubject.asObservable();  // Observable for components to subscribe to
  private cart: ICartItem[] = [];

  addToCart(product: IProduct, orderQuantity: number) {
    let cartItem = this.cart.find(item => item.product.id === product.id);
    if (cartItem) {
      cartItem.quantity += orderQuantity;
    }
    else {
      this.cart.push({ product, quantity: orderQuantity });
      this.cartCountSubject.next(this.cartCountSubject.value + 1);  // Update the cart count
    }
  }

  removeFromCart(product: IProduct) {
    const cartItemIndex = this.cart.findIndex(item => item.product.id === product.id);
    if (cartItemIndex > -1) {
      this.cart.splice(cartItemIndex, 1);
      this.cartCountSubject.next(this.cartCountSubject.value - 1);  // Update the cart count
    }
  }

  removeOneFromCart(product: IProduct) {
    let cartItem = this.cart.find(item => item.product.id === product.id);
    if (cartItem && cartItem.quantity > 1) {
      cartItem.quantity--;
    }
    else {
      this.removeFromCart(product);
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
