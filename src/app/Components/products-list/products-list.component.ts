import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { IProduct } from '../../Interfaces/iproduct';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})

export class ProductsListComponent {
  @Input() products: IProduct[] = [];
  @ViewChild('prodsWrapper') prodsWrapper!: ElementRef<HTMLDivElement>;
  @Input() textOnList: string = '';

  scroll(direction: string) {
    if (direction == 'left') {
      this.prodsWrapper.nativeElement.scrollBy({
        left: -880, // Scroll 4 cards to the left (assuming each card is 220px wide)
        behavior: 'smooth'
      });
    }
    else{
      this.prodsWrapper.nativeElement.scrollBy({
        left: 880, // Scroll 4 cards to the left (assuming each card is 220px wide)
        behavior: 'smooth'
      });
    }
  }

}
