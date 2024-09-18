import { Component, Input, Renderer2 } from '@angular/core';
import { IProduct } from '../../Interfaces/iproduct';
import { ProductService } from '../../Services/product.service';
import { WishlistService } from '../../Services/wishlist.service';
import { AuthService } from '../../Services/auth.service';
import { ModalService } from '../../Services/modal.service';
import { ReviewService } from '../../Services/review.service';

@Component({
  selector: 'app-product-list-card',
  templateUrl: './product-list-card.component.html',
  styleUrl: './product-list-card.component.scss'
})
export class ProductListCardComponent {
  @Input() card!: IProduct;
  isModalProdOpen = false;
  isModalLoginOpen = false;

  constructor(
    public reviewService: ReviewService,
    private renderer: Renderer2,
    private authService: AuthService,
    private modalService: ModalService,
    private wishlistService: WishlistService) {}

    openModal() {
      if(this.authService.isLoggedIn) {
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

  addToWishlist(product: IProduct) {
    this.wishlistService.addToWishlist(product);
  }

  removeFromWishlist(product: IProduct) {
    this.wishlistService.removeFromWishlist(product);
  }

}
