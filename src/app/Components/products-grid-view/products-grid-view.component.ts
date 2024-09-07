import { Component } from '@angular/core';
import { IProduct } from '../../Interfaces/iproduct';
import { ProductService } from '../../Services/product.service';

@Component({
  selector: 'app-products-grid-view',
  templateUrl: './products-grid-view.component.html',
  styleUrl: './products-grid-view.component.scss'
})
export class ProductsGridViewComponent {
  prodsList: IProduct[] = [];
  prodRows: IProduct[][] = [];


  constructor(public prodService: ProductService) {
    this.prodsList = this.prodService.getProducts();
    this.prodRows = this.prodService.convertListTo2DList(this.prodsList, 4);
  }

  ngOnInit(): void {
  }

}
