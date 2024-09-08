import { Component, Input, Renderer2 } from '@angular/core';
import { IProduct } from '../../Interfaces/iproduct';
import { ProductService } from '../../Services/product.service';
import { WishlistService } from '../../Services/wishlist.service';

@Component({
  selector: 'app-product-grid-card',
  templateUrl: './product-grid-card.component.html',
  styleUrl: './product-grid-card.component.scss'
})
export class ProductGridCardComponent {
  @Input() card!: IProduct;
  isModalOpen = false;

  constructor(public prodService: ProductService,
              private renderer: Renderer2,
              private wishlistService: WishlistService) {
  }

  openModal() {
    this.isModalOpen = true;
    this.renderer.addClass(document.body, 'modal-open'); // Add the modal-open class to <body>
  }

  closeModal() {
    this.isModalOpen = false;
    this.renderer.removeClass(document.body, 'modal-open'); // Remove the modal-open class to <body>
  }

  addToWishlist(item: IProduct) {
    this.wishlistService.addToWishlist(item);
  }

  removeFromWishlist(item: IProduct) {
    this.wishlistService.removeFromWishlist(item);
  }

}
