import { Component, Input, Output, EventEmitter, ElementRef, ViewChild, OnInit } from '@angular/core';
import { IProduct } from '../../Interfaces/iproduct';
import { ProductService } from '../../Services/product.service';
import { CartService } from '../../Services/cart.service';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrl: './product-modal.component.scss'
})
export class ProductModalComponent implements OnInit {
  @Input() card!: IProduct;
  @Input() isOpen: boolean = false;
  @Output() close = new EventEmitter<void>();
  @ViewChild('imgsWrapper') imgsWrapper!: ElementRef<HTMLDivElement>;
  quantityNo: number = 1;
  today: Date = new Date();
  deliveryStartDate: Date;
  deliveryEndDate: Date;
  chosenColor: string = '';
  chosenSize: string = '';
  chosenImg: string = '';

  constructor(public prodService: ProductService, private cartService: CartService) {
    this.deliveryStartDate = new Date(this.today);
    this.deliveryStartDate.setDate(this.today.getDate() + 3); // 3 days after today

    this.deliveryEndDate = new Date(this.today);
    this.deliveryEndDate.setDate(this.today.getDate() + 5); // 5 days after today
  }

  ngOnInit(): void {
    // Initialize the chosen img, color and size
    this.chosenImg = this.card.imageUrl[0];
    if (this.card.color && this.card.color.length > 0) {
      this.chosenColor = this.card.color[0];
    }
    if (this.card.size && this.card.size.length > 0) {
      this.chosenSize = this.card.size[0];
    }
  }

  closeModal() {
    this.close.emit();
    this.quantityNo = 1;
    this.chosenImg = this.card.imageUrl[0];
    if (this.card.color && this.card.color.length > 0) {
      this.chosenColor = this.card.color[0];
    }
    if (this.card.size && this.card.size.length > 0) {
      this.chosenSize = this.card.size[0];
    }
  }

  scroll(direction: string) {
    if (this.card.imageUrl && this.card.imageUrl.length > 5) {
      if (direction == 'left') {
        this.imgsWrapper.nativeElement.scrollBy({
          left: -((this.card.imageUrl.length*60) - 300),
          behavior: 'smooth'
        });
      }
      else {
        this.imgsWrapper.nativeElement.scrollBy({
          left: ((this.card.imageUrl.length*60) - 300),
          behavior: 'smooth'
        });
      }
    }
  }

  chooseColor(color: string) {
    this.chosenColor = color;
  }

  chooseSize(size: string) {
    this.chosenSize = size;
  }

  chooseImg(img: string) {
    this.chosenImg = img;
  }

  decrementQuantity() {
    if (this.quantityNo > 1) {
      this.quantityNo--;
    }
  }

  incrementQuantity() {
    if (this.card.quantity > this.quantityNo) {
      this.quantityNo++;
    }
  }

  addToCart(card: IProduct) {
    this.cartService.addToCart(card, this.quantityNo);
    this.closeModal();
  }

}
