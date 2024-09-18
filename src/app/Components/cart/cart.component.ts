import { Component, OnInit } from '@angular/core';
import { IProduct, shippingAmount } from '../../Interfaces/iproduct';
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

  constructor(private cartService: CartService,
              public prodService: ProductService) {
              }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.productsList = this.prodService.getProducts();
    //this.prodService.getProducts().subscribe((data) => {
    //  this.productsList = data;
    //});
  }

  getSubTotalPrice(): number {
    let subTotalPrice: number = 0;
    for (let i = 0; i < this.cartItems.length; i++) {
      let discountPercent = this.cartItems[i].discountPrecent ?? 0;
      let itemPrice: number;
      if (discountPercent) {
        itemPrice = this.cartItems[i].price - ((this.cartItems[i].price * discountPercent) / 100);
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
    this.cartService.clearCart();
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
}
