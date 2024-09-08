import { Component } from '@angular/core';
import { IProduct } from '../../Interfaces/iproduct';
import { ProductService } from '../../Services/product.service';

@Component({
  selector: 'app-products-list-view',
  templateUrl: './products-list-view.component.html',
  styleUrl: './products-list-view.component.scss'
})
export class ProductsListViewComponent {
  prodsList: IProduct[] = [];

  constructor(public prodService: ProductService) {
    this.prodsList = this.prodService.getProducts();
  }

}
