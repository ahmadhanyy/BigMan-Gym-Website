import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { ICoach } from '../../Interfaces/icoach';
import { CoachService } from '../../Services/coach.service';
import { AuthService } from '../../Services/auth.service';
import { ModalService } from '../../Services/modal.service';

@Component({
  selector: 'app-coach-grid-card',
  templateUrl: './coach-grid-card.component.html',
  styleUrls: ['./coach-grid-card.component.scss'] // Corrected styleUrl to styleUrls
})
export class CoachGridCardComponent {
  @Input() card!: ICoach;
  isModalCoachOpen = false;
  isModalLoginOpen = false;

  constructor(public coachService: CoachService,
              private renderer: Renderer2,
              private authService: AuthService,
              private modalService: ModalService) {}

  openModal() {
    if(this.authService.isLoggedIn) {
      this.isModalCoachOpen = true;
      this.renderer.addClass(document.body, 'modal-open');
    }
    else {
      this.modalService.openLoginModal();
      this.renderer.addClass(document.body, 'modal-open');
    }
  }

  closeCoachModal() {
    this.isModalCoachOpen = false;
    this.renderer.removeClass(document.body, 'modal-open');
  }

  closeLoginModal() {
    this.modalService.closeLoginModal();
    this.renderer.removeClass(document.body, 'modal-open'); // Remove the modal-open class to <body>
  }
}
