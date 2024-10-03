import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../Interfaces/iproduct';
import { ProductService } from '../../Services/product.service';
import { ICartItem } from '../../Interfaces/icart-item';
import { IUser } from '../../Interfaces/iuser';
import { CartItemService } from '../../Services/cart-item.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  loggedUser : IUser | undefined;
  cartItems: ICartItem[] = [];
  productsList: IProduct[] = [];
  textOnList: string = 'More To Love';

  constructor(private prodService: ProductService,
              private cartItemService: CartItemService) {
              }

  ngOnInit(): void {
    //this.cartItems = this.cartService.getCartByUserId();
    //this.productsList = this.prodService.getProducts();
  }
/*
  getSubTotalPrice(): number {
    let subTotalPrice: number = 0;
    for (let i = 0; i < this.cartItems.length; i++) {
      let discountPercent = this.prodService.getProductById(this.cartItems[i].prodId).discountPrecent ?? 0;
      let itemPrice: number;
      if (discountPercent) {
        itemPrice = this.cartItems[i].prodId.price - ((this.cartItems[i].price * discountPercent) / 100);
      } else {
        itemPrice = this.cartItems[i].price;
      }
      subTotalPrice += itemPrice * this.cartItems[i].count;
    }
    return subTotalPrice;
  }

  getShippigPrice(): number {
    let shippingPrice: number = 0;
    for (let i = 0; i < this.cartItems.length; i++) {
      if (this.cartItems[i].shippingPrice == shippingAmount.high)
      {
        for (let j = 0; j < this.cartItems[i].count; j++) {
          shippingPrice += this.prodService.highShippingPrice;
        }
      }
      else if (this.cartItems[i].shippingPrice == shippingAmount.low)
      {
        for (let j = 0; j < this.cartItems[i].count; j++) {
          shippingPrice += this.prodService.lowShippingPrice;
        }
      }
    }
    return shippingPrice;
  }

  clearCart(): void {
    this.cartItemService.clearCart();
    this.cartItems = [];
  }

  removeItem(item: ICartItem): void {
    this.cartService.removeFromCart(item);
  }

  incrementItem(item: ICartItem): void {
    this.cartService.addToCart(item);
  }

  decrementItem(item: ICartItem): void {
    this.cartService.decrementItem(item);
  }
*/
}
