import { Component, OnChanges, OnInit, Input, SimpleChanges } from '@angular/core';
import { IProduct } from '../../Interfaces/iproduct';
import { ProductService } from '../../Services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-grid-view',
  templateUrl: './products-grid-view.component.html',
  styleUrl: './products-grid-view.component.scss'
})
export class ProductsGridViewComponent implements OnInit  {
  prodRows: IProduct[][] = [];
  @Input() sortOption: string = 'price-asc';
  @Input() filters: any = {};


  constructor(public prodService: ProductService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.prodRows = this.prodService.convertListTo2DList(this.prodService.getProducts(), 4);
    /*
    // Subscribe to route parameters to determine if a category is passed
    this.route.params.subscribe((params) => {
      // Extract category ID, if present, otherwise it will be NaN
      const categoryId = +params['category'];

      if (isNaN(categoryId)) {
        // No category provided, so load all products
        this.getAllProducts();
      } else {
        // Category ID exists, load products by that category
        this.getProductsByCategory(categoryId);
      }
    });
    */
  }
/*
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['sortOption'] || changes['filters']) {
      this.updateProducts();
    }
  }

  // Get all products when no category is provided
  getAllProducts(): void {
    this.prodService.getProducts(this.sortOption, this.filters).subscribe((data) => {
      this.prodRows = this.prodService.convertListTo2DList(data, 4);
    });
  }

  // Get products by category when a category is provided
  getProductsByCategory(categoryId: number): void {
    this.prodService.getProductsByCategory(categoryId, this.sortOption, this.filters).subscribe((data) => {
      this.prodRows = this.prodService.convertListTo2DList(data, 4);
    });
  }

  updateProducts() {
    this.prodService.getProducts(this.sortOption, this.filters).subscribe((data) => {
      this.prodRows = this.prodService.convertListTo2DList(data, 4);
    });
  }
*/
}
