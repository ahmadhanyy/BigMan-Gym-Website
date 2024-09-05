import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.scss'
})
export class StarRatingComponent {
  @Input() rating: number = 0;
  @Input() ratersNo: number = 0;
  @Output() ratingUpdated = new EventEmitter<number>();

  starCount: number = 5;
  stars: boolean[] = [];

  ngOnInit() {
    this.stars = Array(this.starCount).fill(false);
  }

  showIcon(index: number) {
    return this.rating >= index + 1 ? '★' : '☆';
  }
}
