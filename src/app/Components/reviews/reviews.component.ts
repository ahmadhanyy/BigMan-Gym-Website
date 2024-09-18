import { Component, Input, OnInit } from '@angular/core';
import { ReviewService } from '../../Services/review.service';
import { IProduct } from '../../Interfaces/iproduct';
import { IProductReview } from '../../Interfaces/iproduct-review';
import { ICoach } from '../../Interfaces/icoach';
import { ICoachReview } from '../../Interfaces/icoach-review';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent implements OnInit {
  @Input() prodCard!: IProduct;
  @Input() coachCard!: ICoach;
  rating: number = 0;
  ratersNumber: number = 0;
  prodReviews: IProductReview[] = [];
  coachReviews: ICoachReview[] = [];

  constructor(private reviewService: ReviewService){}

  ngOnInit(): void {
    if(this.prodCard){
      this.prodReviews = this.reviewService.getProdReviews(this.prodCard.id!) || [];
      this.ratersNumber = this.reviewService.calcProdRatersNumber(this.prodCard.id!);
      this.rating = this.reviewService.calcProdAverageRating(this.prodCard.id!);
    }
    else if(this.coachCard){
      this.coachReviews = this.reviewService.getCoachReviews(this.coachCard.id!) || [];
      this.ratersNumber = this.reviewService.calcCoachRatersNumber(this.coachCard.id!);
      this.rating = this.reviewService.calcCoachAverageRating(this.coachCard.id!);
    }
    if(this.ratersNumber == 0 || isNaN(this.rating))
      this.rating = 0;
  }

  get ReviewsStatistics(): number[] | undefined {
    if(this.coachCard)
      return this.reviewService.getCoachReviewsStatistics(this.coachCard.id!);
    else
    return this.reviewService.getProdReviewsStatistics(this.prodCard.id!);
  }

  getPercentage(count: number): number {
    return (count / this.ratersNumber) * 100;
  }

  getReviews() : IProductReview[] | ICoachReview[] | undefined {
    if(this.coachCard)
      return this.reviewService.getCoachReviews(this.coachCard.id!) || [];
    else
    return this.reviewService.getProdReviews(this.prodCard.id!) || [];
  }

  showMoreReviews(){
  }

}
