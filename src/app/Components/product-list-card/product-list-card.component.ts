import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { IProduct } from '../../Interfaces/iproduct';
import { ProductService } from '../../Services/product.service';
import { WishlistService } from '../../Services/wishlist.service';
import { ModalService } from '../../Services/modal.service';
import { ReviewService } from '../../Services/review.service';
import { UserService } from '../../Services/user.service';
import { environment } from '../../../environments/environment';
import { INewWishlistItem } from '../../Interfaces/inew-wishlist-item';

@Component({
  selector: 'app-product-list-card',
  templateUrl: './product-list-card.component.html',
  styleUrl: './product-list-card.component.scss'
})
export class ProductListCardComponent implements OnInit {
  apiUrl = environment.imageApi;
  @Input() card!: IProduct;
  isModalProdOpen = false;
  isModalLoginOpen = false;
  userId : number | null = null;

  constructor(
    public reviewService: ReviewService,
    private renderer: Renderer2,
    private modalService: ModalService,
    private wishlistService: WishlistService,
    private userService: UserService) {}

  ngOnInit(): void {
    // Subscribe to the loggedUserId$ observable to get real-time updates
    this.userService.loggedUserId$.subscribe((id) => {
      this.userId = id;
    });
  }

    openModal() {
      if(this.userService.getToken()) {
        this.isModalProdOpen = true;
        this.renderer.addClass(document.body, 'modal-open');
      }
      else {
        this.modalService.openLoginModal();
        this.renderer.addClass(document.body, 'modal-open');
      }
    }

    closeProdModal() {
      this.isModalProdOpen = false;
      this.renderer.removeClass(document.body, 'modal-open');
    }

    closeLoginModal() {
      this.modalService.closeLoginModal();
      this.renderer.removeClass(document.body, 'modal-open'); // Remove the modal-open class to <body>
    }

    addToWishlist(item: IProduct) {
      if (!this.userId) {
        this.modalService.openLoginModal();
      }
      else {
        let wishlistItem: INewWishlistItem = {
          'userId': this.userId,
          'product': item
        };
        this.wishlistService.addToWishlist(wishlistItem).subscribe({
          next: () => {
            console.log('Item added successfully');
          },
          error: (err) => {
            console.error('Error removing item', err);
          }
        });
      }
    }

    removeFromWishlist(item: IProduct) {
      this.wishlistService.removeFromWishlistByProduct(item).subscribe({
        next: () => {
          console.log('Item removed successfully');
        },
        error: (err) => {
          console.error('Error removing item', err);
        }
      });
    }

    isInWishlist(card: IProduct) : boolean{
      return this.wishlistService.isInWishlist(card);
    }

}
