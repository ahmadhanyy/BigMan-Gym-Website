import { Component, Input, Output, EventEmitter, ElementRef, ViewChild, OnInit } from '@angular/core';
import { IProduct } from '../../Interfaces/iproduct';
import { ProductService } from '../../Services/product.service';
import { WishlistService } from '../../Services/wishlist.service';
import { ReviewService } from '../../Services/review.service';
import { INewCartItem } from '../../Interfaces/inew-cart-item';
import { UserService } from '../../Services/user.service';
import { ModalService } from '../../Services/modal.service';
import { CartItemService } from '../../Services/cart-item.service';
import { environment } from '../../../environments/environment';
import { INewWishlistItem } from '../../Interfaces/inew-wishlist-item';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrl: './product-modal.component.scss'
})
export class ProductModalComponent implements OnInit {
  apiUrl = environment.imageApi;
  @Input() card!: IProduct;
  @Input() isOpen: boolean = false;
  @Output() close = new EventEmitter<void>();
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

  constructor(public prodService: ProductService,
              public reviewService: ReviewService,
              private wishlistService: WishlistService,
              private userService: UserService,
              private modalService: ModalService,
              private cartService: CartItemService) {
    this.deliveryStartDate = new Date(this.today);
    this.deliveryStartDate.setDate(this.today.getDate() + 3); // 3 days after today

    this.deliveryEndDate = new Date(this.today);
    this.deliveryEndDate.setDate(this.today.getDate() + 5); // 5 days after today
  }

  ngOnInit(): void {
    // Subscribe to the loggedUserId$ observable to get real-time updates
    this.userService.loggedUserId$.subscribe((id) => {
      this.userId = id;
    });

    // Initialize the chosen img, color and size
    this.chosenImg = this.card.images[0].url;
    if (this.card.prod_colors && this.card.prod_colors.length > 0) {
      this.chosenColor = this.card.prod_colors[0].color;
    }
    if (this.card.prod_sizes && this.card.prod_sizes.length > 0) {
      this.chosenSize = this.card.prod_sizes[0].size;
    }
  }


  closeModal() {
    this.close.emit();
    this.countNo = 1;
    this.showAllColors = false;
    this.showAllSizes = false;
    this.chosenImg = this.card.images[0].url;
    if (this.card.prod_colors && this.card.prod_colors.length > 0) {
      this.chosenColor = this.card.prod_colors[0].color;
    }
    if (this.card.prod_sizes && this.card.prod_sizes.length > 0) {
      this.chosenSize = this.card.prod_sizes[0].size;
    }
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
        'product': prod,
        'count': this.countNo,
        'color': this.chosenColor,
        'size': this.chosenSize
      };
      this.cartService.addToCart(cartItem).subscribe({
        next: () => {
          console.log('Item added successfully');
        },
        error: (err) => {
          console.error('Error removing item', err);
        }
      });
      this.closeModal();
    }
  }

  addToWishlist(item: IProduct) {
    if (!this.userId) {
      this.modalService.openLoginModal();
    }
    else {
      let wishlistItem: INewWishlistItem = {
        'userId': this.userId,
        'product': item
      };
      this.wishlistService.addToWishlist(wishlistItem).subscribe({
        next: () => {
          console.log('Item added successfully');
        },
        error: (err) => {
          console.error('Error removing item', err);
        }
      });
    }
  }

  removeFromWishlist(item: IProduct) {
    this.wishlistService.removeFromWishlistByProduct(item).subscribe({
      next: () => {
        console.log('Item removed successfully');
      },
      error: (err) => {
        console.error('Error removing item', err);
      }
    });
  }

  isInWishlist(card: IProduct) : boolean{
    return this.wishlistService.isInWishlist(card);
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

  onBackdropClick(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('modal')) {
      this.closeModal(); // Close modal if the user clicks on the backdrop
    }
  }

}
