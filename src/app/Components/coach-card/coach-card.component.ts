import { Component, Input } from '@angular/core';
import { ICoach } from '../../Interfaces/icoach';
import { CoachService } from '../../Services/coach.service';

@Component({
  selector: 'app-coach-card',
  templateUrl: './coach-card.component.html',
  styleUrl: './coach-card.component.scss'
})
export class CoachCardComponent {
  @Input() card!: ICoach;

  constructor(public coachService: CoachService) {
  }

}
