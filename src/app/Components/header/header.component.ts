import { Component, OnChanges, OnInit, Renderer2 } from '@angular/core';
import { CartService } from '../../Services/cart.service';
import { AuthService } from '../../Services/auth.service';
import { ModalService } from '../../Services/modal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  cartCount: number = 0;
  loginText: string = 'login';
  isLoggedIn = false;
  isModalOpen = false;

  constructor(private cartService: CartService,
              private renderer: Renderer2,
              private authService: AuthService,
              private modalService: ModalService) {}

  ngOnInit(): void {
    // Subscribe to the cartCount$ observable to get real-time updates
    this.cartService.cartCount$.subscribe(count => {
      this.cartCount = count;
    });

    // Subscribe to the loginModalOpen$ observable to get real-time updates
    this.modalService.loginModalOpen$.subscribe(isOpen => {
      this.isModalOpen = isOpen;
    });

    // Check if the user is logged in
    if (this.authService.isLoggedIn) {
      this.isLoggedIn = true;
      this.loginText = 'Hi, Muhammed';
    }
    else {
      this.isLoggedIn = false;
      this.loginText = 'Log in';
    }
  }

  logout(){
    this.authService.logout();
    this.isLoggedIn = false;
    this.loginText = 'Log in';
  }

  login(){
    this.authService.login();
    this.isLoggedIn = true;
    this.loginText = 'Hi, Muhammed';
  }

  openModal() {
    this.modalService.openLoginModal();
    this.renderer.addClass(document.body, 'modal-open'); // Add the modal-open class to <body>
  }

  closeModal() {
    this.modalService.closeLoginModal();
    this.renderer.removeClass(document.body, 'modal-open'); // Remove the modal-open class to <body>
  }
}
