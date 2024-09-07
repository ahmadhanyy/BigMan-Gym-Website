import { Component, Renderer2 } from '@angular/core';
import { ICoach } from '../../Interfaces/icoach';
import { CoachService } from '../../Services/coach.service';

@Component({
  selector: 'app-coaches-list-view',
  templateUrl: './coaches-list-view.component.html',
  styleUrl: './coaches-list-view.component.scss'
})
export class CoachesListViewComponent {
  coachesList: ICoach[] = [];
  isModalOpen = false;
  selectedCoach!: ICoach;

  constructor(public coachService: CoachService, private renderer: Renderer2) {
    this.coachesList = this.coachService.getCoaches();
    this.selectedCoach = this.coachesList[0];
  }

  openModal(coach: ICoach) {
    this.selectedCoach = coach;
    this.isModalOpen = true;
    this.renderer.addClass(document.body, 'modal-open'); // Add the modal-open class to <body>
  }

  closeModal() {
    this.isModalOpen = false;
    this.renderer.removeClass(document.body, 'modal-open'); // Remove the modal-open class to <body>
  }

}
