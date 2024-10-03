import { Injectable } from '@angular/core';
import { IReview } from '../Interfaces/ireview';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  /*
  constructor() {
  }

  getReviewsByUserId(userId: number): IReview[] | undefined {
    return this.reviews.filter(review => review.userId === userId);
  }

  getReviewById(id: number): IReview | undefined {
    return this.reviews.find(review => review.id === id);
  }

  getReviewsByProductId(prodId: number): IReview[] | undefined {
    return this.reviews.filter(review => review.prodId === prodId && review.review);
  }

  getReviewsByCoachId(coachId: number): IReview[] | undefined {
    return this.reviews.filter(review => review.coachId === coachId && review.review);
  }

  addReview(review: IReview): void {
    this.reviews.push(review);
  }

  deleteReview(id: number): void {
    const index = this.reviews.findIndex(review => review.id === id);
    if (index !== -1) {
      this.reviews.splice(index, 1);
    }
  }

  getReviewsStatistics(itemId: number, isProduct: boolean): number[] | undefined {
    let itemReviews: IReview[] = [];
    if (isProduct) {
      itemReviews = this.reviews.filter(review => review.prodId === itemId);
    }
    else {
      itemReviews = this.reviews.filter(review => review.coachId === itemId);
    }
    let ratings = [0, 0, 0, 0, 0];
    itemReviews.forEach(review => {
      if (review.rating === 1) {
        ratings[0]++;
      }
      if (review.rating === 2) {
        ratings[1]++;
      }
      if (review.rating === 3) {
        ratings[2]++;
      }
      if (review.rating === 4) {
        ratings[3]++;
      }
      if (review.rating === 5) {
        ratings[4]++;
      }
    });
    return ratings;
  }

  calcRatersNumber(itemId: number, isProduct: boolean): number {
    let raters: IReview[] = [];
    if(isProduct) {
      raters = this.reviews.filter(review => review.prodId === itemId)
    }
    else{
      raters = this.reviews.filter(review => review.coachId === itemId)
    }
    if (!raters) {
      return 0;
    }
    return raters.length;
  }

  calcRatingAverage(itemId: number, isProduct: boolean): number {
    // Check if the array is empty to avoid division by zero
    let raters: IReview[] = [];
    if(isProduct) {
      raters = this.reviews.filter(review => review.prodId === itemId)
    }
    else{
      raters = this.reviews.filter(review => review.coachId === itemId)
    }
    if (!raters) {
      return 0;
    }
    // Sum all the ratings
    const sum = raters.reduce((a, b) => a + b.rating, 0);
    // Calculate the average
    const average = sum / raters.length;
    // Round the average to the nearest integer and ensure it falls within 1-5
    const roundedAverage = Math.round(average);
    return Math.max(1, Math.min(5, roundedAverage)); // Ensures the result is between 1 and 5
  }
*/
}
