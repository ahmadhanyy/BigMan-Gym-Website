<<<<<<< Updated upstream
import { Component } from '@angular/core';
import { CartService } from '../../Services/cart.service';
=======
import { Component, OnChanges, OnInit, Renderer2 } from '@angular/core';
import { ModalService } from '../../Services/modal.service';
import { IUser } from '../../Interfaces/iuser';
import { UserService } from '../../Services/user.service';
import { INewUser } from '../../Interfaces/inew-user';
import { CartItemService } from '../../Services/cart-item.service';
>>>>>>> Stashed changes

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  cartCount: number = 0;

<<<<<<< Updated upstream
  constructor(private cartService: CartService) {
    this.cartCount = this.cartService.getCartCount();
=======
  constructor(private renderer: Renderer2,
              private modalService: ModalService,
              private userService: UserService,
              private cartItemService: CartItemService) {}

  ngOnInit(): void {
    // Subscribe to the cartCount$ observable to get real-time updates
    this.cartItemService.cartCount$.subscribe(count => {
      this.cartCount = count;
    });

    // Subscribe to the loginModalOpen$ observable to get real-time updates
    this.modalService.loginModalOpen$.subscribe(isOpen => {
      this.isModalOpen = isOpen;
    });

    // Check if the user is logged in
    if (this.userService.getToken()) {
      this.isUserLoggedIn = true;
      this.loginText = 'Welcome';
    }
    else {
      this.loginText = 'Log in';
      this.isUserLoggedIn = false;
    }
  }

  register(username: string, email: string, password: string){
    const newUser: INewUser = {"username": username, "email": email, "password": password}
    this.userService.register(newUser).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
    this.isUserLoggedIn = true;
    this.loginText = 'Welcome';
  }

  login(email: string, password: string){
    this.userService.login(email, password).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
    this.isUserLoggedIn = true;
    this.loginText = 'Welcome';
  }

  logout(){
    this.userService.logout();
    this.loginText = 'Log in';
    this.isUserLoggedIn = false;
  }

  openModal() {
    this.modalService.openLoginModal();
    this.renderer.addClass(document.body, 'modal-open'); // Add the modal-open class to <body>
  }

  closeModal() {
    this.modalService.closeLoginModal();
    this.renderer.removeClass(document.body, 'modal-open'); // Remove the modal-open class to <body>
>>>>>>> Stashed changes
  }
}
