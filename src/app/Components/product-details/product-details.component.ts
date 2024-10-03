import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { IProduct } from '../../Interfaces/iproduct';
import { ProductService } from '../../Services/product.service';
import { WishlistService } from '../../Services/wishlist.service';
import { ActivatedRoute } from '@angular/router';
import { INewCartItem } from '../../Interfaces/inew-cart-item';
import { CartItemService } from '../../Services/cart-item.service';
import { UserService } from '../../Services/user.service';
import { ModalService } from '../../Services/modal.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {
  apiUrl = environment.imageApi;
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
  userId : number | null = null;

  constructor(private prodService: ProductService,
              private wishlistService: WishlistService,
              private route: ActivatedRoute,
              private cartService: CartItemService,
              private userService: UserService,
              private modalService: ModalService) {
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
      this.prodService.getProductById(prodId!).subscribe((response: any) => {
        this.card = response.data[0];
      // Initialize the chosen img, color and size
      this.chosenImg = this.card.images[0].url;
      if (this.card.prod_colors && this.card.prod_colors.length > 0) {
        this.chosenColor = this.card.prod_colors[0].color;
      }
      if (this.card.prod_sizes && this.card.prod_sizes.length > 0) {
        this.chosenSize = this.card.prod_sizes[0].size;
      }
      });
    });

    // Subscribe to the loggedUserId$ observable to get real-time updates
    this.userService.loggedUserId$.subscribe((id) => {
      this.userId = id;
    });
  }

  scroll(direction: string) {
    if (this.card.images && this.card.images.length > 5) {
      if (direction == 'left') {
        this.imgsWrapper.nativeElement.scrollBy({
          left: -((this.card.images.length * 60) - 300),
          behavior: 'smooth'
        });
      }
      else {
        this.imgsWrapper.nativeElement.scrollBy({
          left: ((this.card.images.length * 60) - 300),
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
    if (!this.userId) {
      this.modalService.openLoginModal();
    }
    else {
      let cartItem: INewCartItem = {
        'userId': this.userId,
        'prodId': prod.id,
        'count': this.countNo,
        'color': this.chosenColor,
        'size': this.chosenSize
      };
      this.cartService.addToCart(cartItem);
      this.countNo = 1;
      if (this.card.prod_colors && this.card.prod_colors.length > 0) {
        this.chosenColor = this.card.prod_colors[0].color;
      }
      if (this.card.prod_sizes && this.card.prod_sizes.length > 0) {
        this.chosenSize = this.card.prod_sizes[0].size;
      }
    }
  }

  addToWishlist(card: IProduct) {
    //this.wishlistService.addToWishlist(card);
  }

  removeFromWishlist(card: IProduct) {
    //this.wishlistService.removeFromWishlist(card);
  }

  isInWishlist(card: IProduct) {
    //return this.wishlistService.isInWishlist(card);
  }

  // Computed properties to determine visible items
  get visibleColors() {
    if (this.card.prod_colors) {
      return this.showAllColors ? this.card.prod_colors : this.card.prod_colors.slice(0, 10); // Show 10 colors
    }
    else {
      return [];
    }
  }

  get visibleSizes() {
    if (this.card.prod_sizes) {
      return this.showAllSizes ? this.card.prod_sizes : this.card.prod_sizes.slice(0, 10); // Show 10 colors
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
