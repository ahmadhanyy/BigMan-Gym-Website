import { Component, Input } from '@angular/core';
import { IProduct } from '../../Interfaces/iproduct';
import { ProductService } from '../../Services/product.service';
import { CartService } from '../../Services/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() card!: IProduct;

  constructor(public prodService: ProductService, private cartService: CartService) {
  }

  addToCart() {
    this.cartService.addToCart(this.card);
  }

}
