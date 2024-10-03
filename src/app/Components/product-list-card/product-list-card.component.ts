import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { IProduct } from '../../Interfaces/iproduct';
import { ProductService } from '../../Services/product.service';
import { WishlistService } from '../../Services/wishlist.service';
import { ModalService } from '../../Services/modal.service';
import { ReviewService } from '../../Services/review.service';
import { UserService } from '../../Services/user.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-product-list-card',
  templateUrl: './product-list-card.component.html',
  styleUrl: './product-list-card.component.scss'
})
export class ProductListCardComponent {
  apiUrl = environment.imageApi;
  @Input() card!: IProduct;
  isModalProdOpen = false;
  isModalLoginOpen = false;

  constructor(
    public reviewService: ReviewService,
    private renderer: Renderer2,
    private modalService: ModalService,
    private wishlistService: WishlistService,
    private userService: UserService) {}

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

  addToWishlist(product: IProduct) {
    //this.wishlistService.addToWishlist(product);
  }

  removeFromWishlist(product: IProduct) {
    //this.wishlistService.removeFromWishlist(product);
  }

  isInWishlist(card: IProduct) : boolean{
    return true;
  }

}
