import { Component, Input, Renderer2 } from '@angular/core';
import { ICoach } from '../../Interfaces/icoach';
import { CoachService } from '../../Services/coach.service';

@Component({
  selector: 'app-coach-card',
  templateUrl: './coach-card.component.html',
  styleUrl: './coach-card.component.scss'
})
export class CoachCardComponent {
  @Input() card!: ICoach;
  isModalOpen = false;

  constructor(public coachService: CoachService, private renderer: Renderer2) {
  }

  openModal() {
    this.isModalOpen = true;
    this.renderer.addClass(document.body, 'modal-open'); // Add the modal-open class to <body>
  }

  closeModal() {
    this.isModalOpen = false;
    this.renderer.removeClass(document.body, 'modal-open'); // Remove the modal-open class to <body>
  }

}
