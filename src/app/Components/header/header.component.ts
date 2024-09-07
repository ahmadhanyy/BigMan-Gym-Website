import { Component, OnInit } from '@angular/core';
import { CartService } from '../../Services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  cartCount: number = 0;

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.cartCount = this.cartService.getCartCount();
  }
}
