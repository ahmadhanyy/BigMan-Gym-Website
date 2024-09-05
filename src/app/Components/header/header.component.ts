import { Component } from '@angular/core';
import { CartService } from '../../Services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  cartCount: number = 0;

  constructor(private cartService: CartService) {
    this.cartCount = this.cartService.getCartCount();
  }
}
