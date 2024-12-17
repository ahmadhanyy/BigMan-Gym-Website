import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../Interfaces/iproduct';
import { CartService } from '../../Services/cart.service';
import { ProductService } from '../../Services/product.service';
import { ICartItem } from '../../Interfaces/icart-item';
<<<<<<< Updated upstream
=======
import { CartItemService } from '../../Services/cart-item.service';
import { UserService } from '../../Services/user.service';
import { environment } from '../../../environments/environment';
>>>>>>> Stashed changes

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
<<<<<<< Updated upstream
=======
  apiUrl = environment.imageApi;
  userId : number | null = null;
>>>>>>> Stashed changes
  cartItems: ICartItem[] = [];
  productsList: IProduct[] = [];
  textOnList: string = 'More To Love';

<<<<<<< Updated upstream
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
=======
  constructor(private prodService: ProductService,
              private cartItemService: CartItemService,
              private userService: UserService) {
              }

  ngOnInit(): void {
    // Subscribe to the loggedUserId$ observable to get real-time updates
    this.userService.loggedUserId$.subscribe((id) => {
      this.userId = id;
      if (this.userId) {
        this.cartItemService.getCartItems(this.userId).subscribe((response: any) => {
          this.cartItems = response.data;
        });
      }
    });

    this.prodService.getProducts().subscribe((response: any) => {
      this.productsList = response.data;
    });
  }

  clearCart(): void {
/*     let deletedCart = this.cartItems;
>>>>>>> Stashed changes
    this.cartItems = [];
    this.cartItemService.clearCart(this.userId!).subscribe({
      next: () => {
        console.log('Cart cleared successfully');
      },
      error: (err) => {
        console.error('Error clearing cart', err);
        this.cartItems = deletedCart;  // Revert on error
      }
    }); */
  }

  removeItem(item: ICartItem): void {
<<<<<<< Updated upstream
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
=======
    const index = this.cartItems.indexOf(item);
    if (index > -1) {
      this.cartItems.splice(index, 1);
    }
    // Send the request to the server
    this.cartItemService.removeFromCart(item.documentId).subscribe({
      next: () => {
        console.log('Item removed successfully');
      },
      error: (err) => {
        console.error('Error removing item', err);
        this.cartItems.splice(index, 0, item);  // Revert on error
      }
    });
  }

// In the CartComponent

incrementItem(item: ICartItem): void {
  // Optimistically update the local UI
  const index = this.cartItems.findIndex(i => i.documentId === item.documentId);
  if (index !== -1) {
    this.cartItems[index].count += 1; // Increment the count locally
  }

  // Send the request to the server
  this.cartItemService.incrementItem(item, item.documentId).subscribe({
    next: () => {
      // Handle successful response from the API (already updated the UI optimistically)
      console.log('Item incremented successfully');
    },
    error: (err) => {
      console.error('Error incrementing item', err);
      // Revert UI in case of error
      if (index !== -1) {
        this.cartItems[index].count -= 1;
      }
    }
  });
}

decrementItem(item: ICartItem): void {
  // Optimistically update the local UI
  const index = this.cartItems.findIndex(i => i.documentId === item.documentId);
  if (index !== -1 && this.cartItems[index].count > 1) {
    this.cartItems[index].count -= 1; // Decrement the count locally, ensuring it doesn't go below 1
    // Send the request to the server
    this.cartItemService.decrementItem(item, item.documentId).subscribe({
      next: () => {
        console.log('Item decremented successfully');
        console.log("new item : ", item);
      },
      error: (err) => {
        console.error('Error decrementing item', err);
        // Revert UI in case of error
        if (index !== -1) {
          this.cartItems[index].count += 1;
        }
      }
    });
  }
}

  getSubTotalPrice(): number {
    return this.cartItemService.getSubTotalPrice(this.cartItems);
  }

  getShippigPrice(): number {
    return this.cartItemService.getShippigPrice(this.cartItems);
  }

  trackByCartItem(index: number, item: ICartItem): number {
    return item.id;  // Use unique item identifier
  }

>>>>>>> Stashed changes
}
