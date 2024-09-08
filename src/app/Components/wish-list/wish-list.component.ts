import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../../Services/wishlist.service';
import { IProduct } from '../../Interfaces/iproduct';
import { ProductService } from '../../Services/product.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.scss'
})
export class WishListComponent implements OnInit {
  wishlistItems: IProduct[] = [];
  prodsList: IProduct[] = [];
  textOnList: string = 'More To Love';

  constructor(private wishlistService: WishlistService, public prodService: ProductService) {}

  ngOnInit(): void {
    this.wishlistItems = this.wishlistService.getWishlistItems();
    this.prodsList = this.prodService.getProducts();
  }

  clearWishlist(): void {
    this.wishlistService.clearWishlist();
    this.wishlistItems = [];
  }

  removeItem(item: IProduct): void {
    this.wishlistService.removeFromWishlist(item);
    this.wishlistItems = this.wishlistService.getWishlistItems();
  }

  addItem(item: IProduct): void {
    this.wishlistService.addToWishlist(item);
    this.wishlistItems = this.wishlistService.getWishlistItems();
  }

}
