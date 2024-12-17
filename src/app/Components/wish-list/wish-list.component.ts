<<<<<<< Updated upstream
import { Component } from '@angular/core';
=======
import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../../Services/wishlist.service';
import { IProduct } from '../../Interfaces/iproduct';
import { ProductService } from '../../Services/product.service';
import { UserService } from '../../Services/user.service';
import { ModalService } from '../../Services/modal.service';
import { IWishlistItem } from '../../Interfaces/iwishlist-item';
import { INewWishlistItem } from '../../Interfaces/inew-wishlist-item';
import { environment } from '../../../environments/environment';
>>>>>>> Stashed changes

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.scss'
})
<<<<<<< Updated upstream
export class WishListComponent {
=======
export class WishListComponent implements OnInit {
  apiUrl = environment.imageApi;
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
      if (this.userId) {
        this.wishlistService.getWishlistItems(this.userId).subscribe((response: any) => {
          this.wishlistItems = response.data;
        });
      }
    });

    this.prodService.getProducts().subscribe((response: any) => {
      this.prodsList = response.data;
    });
  }

  clearWishlist(): void {
/*     if (!this.userId) {
      this.modalService.openLoginModal();
    }
    else{
      this.wishlistService.clearWishlist(this.userId);
    } */
  }

  removeItem(item: IWishlistItem): void {
    const index = this.wishlistItems.indexOf(item);
    if (index > -1) {
      this.wishlistItems.splice(index, 1);
    }
    // Send the request to the server
    this.wishlistService.removeFromWishlistByWishItem(item.documentId).subscribe({
      next: () => {
        console.log('Item removed successfully');
      },
      error: (err) => {
        console.error('Error removing item', err);
        this.wishlistItems.splice(index, 0, item);  // Revert on error
      }
    });
  }

  trackByWishlistItem(index: number, item: IWishlistItem): number {
    return item.id;  // Use unique item identifier
  }
>>>>>>> Stashed changes

}
