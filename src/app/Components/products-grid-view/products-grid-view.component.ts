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
  displayedProducts: IProduct[] = [];
  currentBatchIndex = 0;
  batchSize = 10;


  constructor(public prodService: ProductService) {
    this.prodsList = this.prodService.getProducts();
    this.prodRows = this.prodService.convertListTo2DList(this.prodsList, 4);
  }

  ngOnInit(): void {
    this.loadMoreProducts();
  }

  loadMoreProducts(): void {
    const newProducts = this.prodService.getProductsBatch(this.currentBatchIndex, this.batchSize);
    this.displayedProducts = [...this.displayedProducts, ...newProducts];
    this.currentBatchIndex += this.batchSize;
  }

  hasMoreProducts(): boolean {
    return this.currentBatchIndex < this.prodService.getAllProductsLength();
  }

}
