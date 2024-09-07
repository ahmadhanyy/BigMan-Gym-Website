import { Component, Renderer2 } from '@angular/core';
import { IProduct } from '../../Interfaces/iproduct';
import { ProductService } from '../../Services/product.service';

@Component({
  selector: 'app-products-list-view',
  templateUrl: './products-list-view.component.html',
  styleUrl: './products-list-view.component.scss'
})
export class ProductsListViewComponent {
  prodsList: IProduct[] = [];
  isModalOpen = false;
  selectedProduct!: IProduct;

  constructor(public prodService: ProductService, private renderer: Renderer2) {
    this.prodsList = this.prodService.getProducts();
    this.selectedProduct = this.prodsList[0];
  }

  openModal(product: IProduct) {
    this.selectedProduct = product;
    this.isModalOpen = true;
    this.renderer.addClass(document.body, 'modal-open'); // Add the modal-open class to <body>
  }

  closeModal() {
    this.isModalOpen = false;
    this.renderer.removeClass(document.body, 'modal-open'); // Remove the modal-open class to <body>
  }

}
