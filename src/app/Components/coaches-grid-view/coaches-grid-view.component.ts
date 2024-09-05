import { Component } from '@angular/core';
import { ICoach } from '../../Interfaces/icoach';
import { CoachService } from '../../Services/coach.service';

@Component({
  selector: 'app-coaches-grid-view',
  templateUrl: './coaches-grid-view.component.html',
  styleUrl: './coaches-grid-view.component.scss'
})
export class CoachesGridViewComponent {
  coaches: ICoach[] = [];
  coachRows: ICoach[][] = [];

  constructor(public coachService: CoachService) {
    this.coaches = coachService.getCoaches();
    this.coachRows = coachService.convertListTo2DList(this.coaches, 4);
  }

}
