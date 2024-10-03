import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../../Services/wishlist.service';
import { IProduct } from '../../Interfaces/iproduct';
import { ProductService } from '../../Services/product.service';
import { UserService } from '../../Services/user.service';
import { ModalService } from '../../Services/modal.service';
import { IWishlistItem } from '../../Interfaces/iwishlist-item';
import { INewWishlistItem } from '../../Interfaces/inew-wishlist-item';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.scss'
})
export class WishListComponent implements OnInit {
  wishlistItems: IWishlistItem[] = [];
  prodsList: IProduct[] = [];
  textOnList: string = 'More To Love';
  userId: number | null = null;

  constructor(private wishlistService: WishlistService,
              private prodService: ProductService,
              private userService: UserService,
              private modalService: ModalService) {}

  ngOnInit(): void {
    // Subscribe to the loggedUserId$ observable to get real-time updates
    this.userService.loggedUserId$.subscribe((id) => {
      this.userId = id;
    });

    this.prodService.getProducts().subscribe((response: any) => {
      this.prodsList = response.data;
    });

  }

  getWishlistItems(): void {
    if (!this.userId) {
      this.modalService.openLoginModal();
    }
    else{
      this.wishlistService.getWishlistItems(this.userId).subscribe((response: any) => {
        this.wishlistItems = response.data;
      });
    }
  }

  clearWishlist(): void {
    if (!this.userId) {
      this.modalService.openLoginModal();
    }
    else{
      this.wishlistService.clearWishlist(this.userId);
    }
  }

  removeItem(item: IWishlistItem): void {
    this.wishlistService.removeFromWishlist(item.documentId);
  }

  addItem(item: INewWishlistItem): void {
    this.wishlistService.addToWishlist(item);
  }

  getProdByItem(item: IWishlistItem): IProduct {
    let prod!: IProduct;
    this.prodService.getProductById(item.prodId).subscribe((response: any) => {
      prod = response.data;
    });
    return prod;
  }

}
