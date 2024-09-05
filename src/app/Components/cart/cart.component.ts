import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../Interfaces/iproduct';
import { CartService } from '../../Services/cart.service';
import { ProductService } from '../../Services/product.service';
import { ICartItem } from '../../Interfaces/icart-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  cartItems: ICartItem[] = [];
  productsList: IProduct[] = [];
  textOnList: string = 'More To Love';

  constructor(private cartService: CartService, private prodService: ProductService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.productsList = this.prodService.getProducts();
  }

  getTotalPrice(): number {
    let totalPrice: number = 0;
    for (let i = 0; i < this.cartItems.length; i++) {
      let item = this.cartItems[i];
      let discountPercent = item.product.discountPrecent ?? 0;
      let itemPrice: number;

      if (discountPercent) {
        itemPrice = item.product.price - ((item.product.price * discountPercent) / 100);
      } else {
        itemPrice = item.product.price;
      }

      totalPrice += itemPrice * item.quantity;
    }
    return totalPrice;
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.cartItems = [];
  }

  removeItem(item: ICartItem): void {
    this.cartService.removeFromCart(item.product);
    this.cartItems = this.cartService.getCartItems();
  }

  addItem(item: IProduct): void {
    this.cartService.addToCart(item);
    this.cartItems = this.cartService.getCartItems();
  }

  decrementItem(item: ICartItem): void {
    this.cartService.removeOneFromCart(item.product);
    this.cartItems = this.cartService.getCartItems();
  }
}
