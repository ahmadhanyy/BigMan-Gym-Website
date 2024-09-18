import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { ModalService } from '../Services/modal.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private modalService: ModalService) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn) {
      return true;
    } else {
      console.log('You are not logged in');
      this.modalService.openLoginModal();
      return false;
    }
  }
}
