import { Injectable } from '@angular/core';
import { ICartItem } from '../Interfaces/icart-item';
import { IProduct } from '../Interfaces/iproduct';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: ICartItem[] = [];

  addToCart(product: IProduct) {
    let cartItem = this.cart.find(item => item.product.id === product.id);
    if (cartItem) {
      cartItem.quantity++;
    } else {
      this.cart.push({ product, quantity: 1 });
    }
  }

  removeFromCart(product: IProduct) {
    const cartItemIndex = this.cart.findIndex(item => item.product.id === product.id);
    if (cartItemIndex > -1) {
      this.cart.splice(cartItemIndex, 1);
    }
  }

  removeOneFromCart(product: IProduct) {
    let cartItem = this.cart.find(item => item.product.id === product.id);
    if (cartItem && cartItem.quantity > 1) {
      cartItem.quantity--;
    } else {
      this.removeFromCart(product);
    }
  }

  getCartItems(): ICartItem[] {
    return this.cart;
  }

  getCartCount(): number {
    return this.cart.reduce((total, item) => total + item.quantity, 0);
  }

  clearCart() {
    this.cart = [];
  }
}
