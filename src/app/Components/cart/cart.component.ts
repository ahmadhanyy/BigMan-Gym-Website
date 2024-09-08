import { Component, OnInit } from '@angular/core';
import { IProduct, shippingAmount } from '../../Interfaces/iproduct';
import { CartService } from '../../Services/cart.service';
import { ProductService } from '../../Services/product.service';
import { ICartItem } from '../../Interfaces/icart-item';
import { WishlistService } from '../../Services/wishlist.service';

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
              public prodService: ProductService,
              private wishlistService: WishlistService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.productsList = this.prodService.getProducts();
  }

  getSubTotalPrice(): number {
    let subTotalPrice: number = 0;
    for (let i = 0; i < this.cartItems.length; i++) {
      let discountPercent = this.cartItems[i].product.discountPrecent ?? 0;
      let itemPrice: number;
      if (discountPercent) {
        itemPrice = this.cartItems[i].product.price - ((this.cartItems[i].product.price * discountPercent) / 100);
      } else {
        itemPrice = this.cartItems[i].product.price;
      }
      subTotalPrice += itemPrice * this.cartItems[i].quantity;
    }
    return subTotalPrice;
  }

  getShippigPrice(): number {
    let shippingPrice: number = 0;
    for (let i = 0; i < this.cartItems.length; i++) {
      if (this.cartItems[i].product.shippingPrice == shippingAmount.high)
      {
        shippingPrice += this.prodService.highShippingPrice;
      }
      else if (this.cartItems[i].product.shippingPrice == shippingAmount.low)
      {
        shippingPrice += this.prodService.lowShippingPrice;
      }
    }
    return shippingPrice;
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
    this.cartService.addToCart(item, 1);
    this.cartItems = this.cartService.getCartItems();
  }

  decrementItem(item: ICartItem): void {
    this.cartService.removeOneFromCart(item.product);
    this.cartItems = this.cartService.getCartItems();
  }

  addToWishlist(item: IProduct): void {
    this.wishlistService.addToWishlist(item);
  }

  removeFromWishlist(item: IProduct): void {
    this.wishlistService.removeFromWishlist(item);
  }
}
