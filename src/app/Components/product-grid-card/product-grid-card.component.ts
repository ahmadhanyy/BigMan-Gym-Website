import { Component, Input, Renderer2 } from '@angular/core';
import { IProduct } from '../../Interfaces/iproduct';
import { ProductService } from '../../Services/product.service';
import { WishlistService } from '../../Services/wishlist.service';
import { AuthService } from '../../Services/auth.service';
import { ModalService } from '../../Services/modal.service';
import { ReviewService } from '../../Services/review.service';

@Component({
  selector: 'app-product-grid-card',
  templateUrl: './product-grid-card.component.html',
  styleUrl: './product-grid-card.component.scss'
})
export class ProductGridCardComponent {
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

  addToWishlist(item: IProduct) {
    this.wishlistService.addToWishlist(item);
  }

  removeFromWishlist(item: IProduct) {
    this.wishlistService.removeFromWishlist(item);
  }

}
