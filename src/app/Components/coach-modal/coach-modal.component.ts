import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ICoach } from '../../Interfaces/icoach';
import { CoachService } from '../../Services/coach.service';
import { ITimeSlot } from '../../Interfaces/itime-slot';

@Component({
  selector: 'app-coach-modal',
  templateUrl: './coach-modal.component.html',
  styleUrl: './coach-modal.component.scss'
})
export class CoachModalComponent implements OnInit {
  @Input() card!: ICoach;
  @Input() isOpen: boolean = false;
  @Output() close = new EventEmitter<void>();
  chosenTime: ITimeSlot = { "day": '', "hour": '' };
  showAllSessions = false;

  constructor(public coachService: CoachService) {
  }

  ngOnInit(): void {
    // Initialize the chosen session time
    if (this.card.avilableTime && this.card.avilableTime.length > 0) {
      this.chosenTime = this.card.avilableTime[0];
    }
  }

  closeModal() {
    this.close.emit();
    this.showAllSessions = false;
    if (this.card.avilableTime && this.card.avilableTime.length > 0) {
      this.chosenTime = this.card.avilableTime[0];
    }
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
