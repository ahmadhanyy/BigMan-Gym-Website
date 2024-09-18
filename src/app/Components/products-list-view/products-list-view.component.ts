import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../Interfaces/iproduct';
import { ProductService } from '../../Services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-list-view',
  templateUrl: './products-list-view.component.html',
  styleUrl: './products-list-view.component.scss'
})
export class ProductsListViewComponent implements OnInit {
  prodsList: IProduct[] = [];

  constructor(public prodService: ProductService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.prodsList = this.prodService.getProducts();
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
  // Get all products when no category is provided
  getAllProducts(): void {
    //this.prodService.getProducts().subscribe((data) => {
    //  this.prodsList = data;
    //});
  }

  // Get products by category when a category is provided
  getProductsByCategory(categoryId: number): void {
    this.prodService.getProductsByCategory(categoryId).subscribe((data) => {
      this.prodsList = data;
    });
  }
*/
}
