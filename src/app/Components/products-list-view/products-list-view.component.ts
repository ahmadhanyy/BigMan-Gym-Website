import { Component } from '@angular/core';
import { IProduct } from '../../Interfaces/iproduct';
import { ProductService } from '../../Services/product.service';
import { CartService } from '../../Services/cart.service';

@Component({
  selector: 'app-products-list-view',
  templateUrl: './products-list-view.component.html',
  styleUrl: './products-list-view.component.scss'
})
export class ProductsListViewComponent {
  prodsList: IProduct[] = [];

  constructor(public prodService: ProductService, private cartService: CartService) {
    this.prodsList = this.prodService.getProducts();
  }

  addToCart(card: IProduct) {
    this.cartService.addToCart(card);
  }

}
