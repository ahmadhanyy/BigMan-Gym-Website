import { Component, OnInit } from '@angular/core';
import { ICoach } from '../../Interfaces/icoach';
import { CoachService } from '../../Services/coach.service';

@Component({
  selector: 'app-coaches-grid-view',
  templateUrl: './coaches-grid-view.component.html',
  styleUrl: './coaches-grid-view.component.scss'
})
export class CoachesGridViewComponent implements OnInit {
  //coaches: ICoach[] = [];
  coachRows: ICoach[][] = [];

  constructor(public coachService: CoachService) {
  }
  ngOnInit(): void {
    this.coachRows = this.coachService.convertListTo2DList(this.coachService.getCoaches(), 4);
    //this.coachService.getCoaches().subscribe(coaches => {
    //  this.coachRows = this.coachService.convertListTo2DList(coaches, 4);
    //});
  }

}
