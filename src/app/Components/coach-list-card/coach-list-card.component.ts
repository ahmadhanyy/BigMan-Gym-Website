import { Component, Input, Renderer2 } from '@angular/core';
import { ICoach } from '../../Interfaces/icoach';
import { CoachService } from '../../Services/coach.service';
import { ModalService } from '../../Services/modal.service';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-coach-list-card',
  templateUrl: './coach-list-card.component.html',
  styleUrl: './coach-list-card.component.scss'
})
export class CoachListCardComponent {
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
