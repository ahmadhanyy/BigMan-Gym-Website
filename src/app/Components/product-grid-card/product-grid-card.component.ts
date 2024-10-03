import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { IProduct } from '../../Interfaces/iproduct';
import { ProductService } from '../../Services/product.service';
import { WishlistService } from '../../Services/wishlist.service';
import { ModalService } from '../../Services/modal.service';
import { ReviewService } from '../../Services/review.service';
import { UserService } from '../../Services/user.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-product-grid-card',
  templateUrl: './product-grid-card.component.html',
  styleUrl: './product-grid-card.component.scss'
})
export class ProductGridCardComponent {
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

  addToWishlist(item: IProduct) {
    //this.wishlistService.addToWishlist(item);
  }

  removeFromWishlist(item: IProduct) {
    //this.wishlistService.removeFromWishlist(item);
  }

  isInWishlist(card: IProduct) : boolean{
    return true;
  }

}
