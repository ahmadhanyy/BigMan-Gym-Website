import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ICoach } from '../../Interfaces/icoach';
import { CoachService } from '../../Services/coach.service';
import { ITimeSlot } from '../../Interfaces/itime-slot';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coach-details',
  templateUrl: './coach-details.component.html',
  styleUrl: './coach-details.component.scss'
})
export class CoachDetailsComponent implements OnInit {
  @Input() card!: ICoach;
  chosenTime: ITimeSlot = { "day": '', "hour": '' };
  showAllSessions = false;

  constructor(public coachService: CoachService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
        // Subscribe to route parameters to determine if an id is passed
        this.route.paramMap.subscribe((params) => {
          // Extract product ID, if present, otherwise it will be NaN
          const prodId = Number(params.get('id'));
          let prodCard = this.coachService.getCoachById(prodId);
          if(prodCard){
            this.card = prodCard;
          }
          // Initialize the chosen session time
          if (this.card.avilableTime && this.card.avilableTime.length > 0) {
          this.chosenTime = this.card.avilableTime[0];
          }
        });
  }

  chooseTime(time: ITimeSlot) {
    this.chosenTime = time;
  }

  contact(coach: ICoach) {
  }

  // Computed properties to determine visible items
  get visibleSessions() {
    if (this.card.avilableTime) {
      return this.showAllSessions ? this.card.avilableTime : this.card.avilableTime.slice(0, 10); // Show 10 Sessions
    }
    else {
      return [];
    }
  }

  // Methods to show more Sessions
  showMoreSessions() {
    this.showAllSessions = true;
  }

}
