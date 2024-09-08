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
    // Subscribe to the cartCount$ observable to get real-time updates
    this.cartService.cartCount$.subscribe(count => {
      this.cartCount = count;
    });
  }
}
