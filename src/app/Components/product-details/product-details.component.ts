import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { IProduct } from '../../Interfaces/iproduct';
import { ProductService } from '../../Services/product.service';
import { CartService } from '../../Services/cart.service';
import { WishlistService } from '../../Services/wishlist.service';
import { ICartItem } from '../../Interfaces/icart-item';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {
  card!: IProduct;
  @ViewChild('imgsWrapper') imgsWrapper!: ElementRef<HTMLDivElement>;
  countNo: number = 1;
  today: Date = new Date();
  deliveryStartDate: Date;
  deliveryEndDate: Date;
  chosenColor: string = '';
  chosenSize: string = '';
  chosenImg: string = '';
  showAllColors = false;
  showAllSizes = false;
  lowShippingPrice = 0;
  highShippingPrice = 0;

  constructor(private prodService: ProductService,
              private cartService: CartService,
              private wishlistService: WishlistService,
              private route: ActivatedRoute) {
    this.deliveryStartDate = new Date(this.today);
    this.deliveryStartDate.setDate(this.today.getDate() + 3); // 3 days after today

    this.deliveryEndDate = new Date(this.today);
    this.deliveryEndDate.setDate(this.today.getDate() + 5); // 5 days after today
  }

  ngOnInit(): void {
    // Subscribe to route parameters to determine if an id is passed
    this.route.paramMap.subscribe((params) => {
      // Extract product ID, if present, otherwise it will be NaN
      const prodId = Number(params.get('id'));
      let prodCard = this.prodService.getProductById(prodId);
      if(prodCard){
        this.card = prodCard;
      }
      // Initialize the chosen img, color and size
      this.chosenImg = this.card.imageUrl[0];
      if (this.card.color && this.card.color.length > 0) {
        this.chosenColor = this.card.color[0];
      }
      if (this.card.size && this.card.size.length > 0) {
        this.chosenSize = this.card.size[0];
      }
      this.lowShippingPrice = this.prodService.lowShippingPrice;
      this.highShippingPrice = this.prodService.highShippingPrice;
    });
  }

  scroll(direction: string) {
    if (this.card.imageUrl && this.card.imageUrl.length > 5) {
      if (direction == 'left') {
        this.imgsWrapper.nativeElement.scrollBy({
          left: -((this.card.imageUrl.length * 60) - 300),
          behavior: 'smooth'
        });
      }
      else {
        this.imgsWrapper.nativeElement.scrollBy({
          left: ((this.card.imageUrl.length * 60) - 300),
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
    if (this.countNo > 1) {
      this.countNo--;
    }
  }

  incrementQuantity() {
    if (this.card.quantity > this.countNo) {
      this.countNo++;
    }
  }

  addToCart(prod: IProduct) {
    let cartItem: ICartItem = {
      'prodId': prod.id,
      'prodQuantity': prod.quantity,
      'prodName': prod.name,
      'prodCategory': prod.categoryId,
      'count': this.countNo,
      'color': this.chosenColor,
      'size': this.chosenSize,
      'price': prod.price,
      'prodImageUrl': prod.imageUrl,
      'freeShipping': prod.freeShipping,
      'shippingPrice': prod.shippingPrice,
      'discountPrecent': prod.discountPrecent
    };
    this.cartService.addToCart(cartItem);
  }

  addToWishlist(card: IProduct) {
    this.wishlistService.addToWishlist(card);
  }

  removeFromWishlist(card: IProduct) {
    this.wishlistService.removeFromWishlist(card);
  }

  // Computed properties to determine visible items
  get visibleColors() {
    if (this.card.color) {
      return this.showAllColors ? this.card.color : this.card.color.slice(0, 10); // Show 10 colors
    }
    else {
      return [];
    }
  }

  get visibleSizes() {
    if (this.card.size) {
      return this.showAllSizes ? this.card.size : this.card.size.slice(0, 10); // Show 10 colors
    }
    else {
      return [];
    }
  }

  // Methods to show more colors and sizes
  showMoreColors() {
    this.showAllColors = true;
  }

  showMoreSizes() {
    this.showAllSizes = true;
  }

}
