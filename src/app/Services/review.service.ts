import { Injectable } from '@angular/core';
import { IProductReview } from '../Interfaces/iproduct-review';
import { ICoachReview } from '../Interfaces/icoach-review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  prodReviews: IProductReview[] = []
  coachReviews: ICoachReview[] = []

  constructor() {
    this.prodReviews = [
      {"id": 1, "userId": 1, "productId": 1, "review": "first this product is awsome, the fit is very comfortable. this product is awsome, the fit is very comfortable. this product is awsome, the fit is very comfortable. this product is awsome, the fit is very comfortable.", "date": {"day": 17, "month": 5, "year": 2020}, "rating": 5},
      {"id": 2, "userId": 2, "productId": 1, "review": "second I love this product, it is very durable", "date": {"day": 17, "month": 5, "year": 2020}, "rating": 5},
      {"id": 3, "userId": 2, "productId": 1, "date": {"day": 17, "month": 5, "year": 2020}, "rating": 1},
      {"id": 4, "userId": 4, "productId": 1, "review": "fourth I like this product, it is very light", "date": {"day": 17, "month": 5, "year": 2020}, "rating": 4},
      {"id": 5, "userId": 2, "productId": 1, "review": "تحفة حلو جدا و خامة محترمة", "date": {"day": 17, "month": 5, "year": 2020}, "rating": 2},
      {"id": 6, "userId": 4, "productId": 2, "review": "I love this product, it is very affordable", "date": {"day": 17, "month": 5, "year": 2020}, "rating": 5},
      {"id": 7, "userId": 1, "productId": 2, "date": {"day": 17, "month": 5, "year": 2020}, "rating": 1},
      {"id": 8, "userId": 3, "productId": 3, "review": "I like this product, it is very expensive", "date": {"day": 17, "month": 5, "year": 2020}, "rating": 4},
      {"id": 9, "userId": 1, "productId": 3, "review": "I love this product, it is very affordable", "date": {"day": 17, "month": 5, "year": 2020}, "rating": 5},
      {"id": 10, "userId": 3, "productId": 4, "review": "I don't like this product, it is very cheap", "date": {"day": 17, "month": 5, "year": 2020}, "rating": 1},
      {"id": 11, "userId": 2, "productId": 4, "review": "I like this product, it is very durable", "date": {"day": 17, "month": 5, "year": 2020}, "rating": 4},
      {"id": 12, "userId": 2, "productId": 4, "date": {"day": 17, "month": 5, "year": 2020}, "rating": 2},
      {"id": 13, "userId": 2, "productId": 4, "date": {"day": 17, "month": 5, "year": 2020}, "rating": 5},
      {"id": 14, "userId": 2, "productId": 4, "review": "I love this product, it is very affordable", "date": {"day": 17, "month": 5, "year": 2020}, "rating": 5},
      {"id": 15, "userId": 2, "productId": 4, "date": {"day": 17, "month": 5, "year": 2020}, "rating": 5},
    ]

    this.coachReviews = [
      {"id": 1, "userId": 1, "coachId": 0, "review": "I love this product, it is very durable", "date": {"day": 17, "month": 5, "year": 2020}, "rating": 5},
      {"id": 0, "userId": 0, "coachId": 0, "review": "this product is awsome, the fit is very comfortable. this product is awsome, the fit is very comfortable. this product is awsome, the fit is very comfortable. this product is awsome, the fit is very comfortable.", "date": {"day": 17, "month": 5, "year": 2020}, "rating": 5},
      {"id": 2, "userId": 1, "coachId": 0, "date": {"day": 17, "month": 5, "year": 2020}, "rating": 1},
      {"id": 3, "userId": 3, "coachId": 0, "review": "I like this product, it is very light", "date": {"day": 17, "month": 5, "year": 2020}, "rating": 4},
      {"id": 4, "userId": 1, "coachId": 0, "review": "تحفة حلو جدا و خامة محترمة", "date": {"day": 17, "month": 5, "year": 2020}, "rating": 2},
      {"id": 5, "userId": 3, "coachId": 0, "review": "I love this product, it is very affordable", "date": {"day": 17, "month": 5, "year": 2020}, "rating": 5},
      {"id": 6, "userId": 1, "coachId": 1, "date": {"day": 17, "month": 5, "year": 2020}, "rating": 1},
      {"id": 7, "userId": 3, "coachId": 1, "review": "I like this product, it is very expensive", "date": {"day": 17, "month": 5, "year": 2020}, "rating": 4},
      {"id": 8, "userId": 1, "coachId": 2, "review": "I love this product, it is very affordable", "date": {"day": 17, "month": 5, "year": 2020}, "rating": 5},
      {"id": 9, "userId": 3, "coachId": 2, "review": "I don't like this product, it is very cheap", "date": {"day": 17, "month": 5, "year": 2020}, "rating": 1},
      {"id": 10, "userId": 2, "coachId": 3, "review": "I like this product, it is very durable", "date": {"day": 17, "month": 5, "year": 2020}, "rating": 4},
      {"id": 11, "userId": 2, "coachId": 3, "date": {"day": 17, "month": 5, "year": 2020}, "rating": 2},
      {"id": 12, "userId": 2, "coachId": 3, "date": {"day": 17, "month": 5, "year": 2020}, "rating": 5},
      {"id": 13, "userId": 2, "coachId": 3, "review": "I love this product, it is very affordable", "date": {"day": 17, "month": 5, "year": 2020}, "rating": 5},
      {"id": 14, "userId": 2, "coachId": 3, "date": {"day": 17, "month": 5, "year": 2020}, "rating": 5},
    ]
  }

  getProdReviews(prodId: number): IProductReview[] | undefined {
    return this.prodReviews.filter(review => review.productId === prodId && review.review);
  }

  getProdUserReviews(userId: number): IProductReview[] | undefined {
    return this.prodReviews.filter(review => review.userId === userId);
  }

  getProdReviewsStatistics(prodId: number): number[] | undefined {
    let reviews = this.prodReviews.filter(review => review.productId === prodId);
    let ratings = [0, 0, 0, 0, 0];
    reviews.forEach(review => {
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

  getProdReviewById(id: number): IProductReview | undefined {
    return this.prodReviews.find(review => review.id === id);
  }

  addProdReview(review: IProductReview): void {
    this.prodReviews.push(review);
  }

  deleteProdReview(id: number): void {
    const index = this.prodReviews.findIndex(review => review.id === id);
    if (index !== -1) {
      this.prodReviews.splice(index, 1);
    }
  }

  calcProdRatersNumber(prodId: number): number {
    let raters = this.prodReviews.filter(review => review.productId === prodId)
    if (!raters) {
      return 0;
    }
    return raters.length;
  }

  calcProdAverageRating(prodId: number): number {
    // Check if the array is empty to avoid division by zero
    let raters = this.prodReviews.filter(review => review.productId === prodId)
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


  getCoachReviews(coachId: number): ICoachReview[] | undefined {
    return this.coachReviews.filter(review => review.coachId === coachId && review.review);
  }

  getCoachUserReviews(userId: number): ICoachReview[] | undefined {
    return this.coachReviews.filter(review => review.userId === userId);
  }

  getCoachReviewsStatistics(coachId: number): number[] | undefined {
    let reviews = this.coachReviews.filter(review => review.coachId === coachId);
    let ratings = [0, 0, 0, 0, 0];
    reviews.forEach(review => {
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

  getCoachReviewById(id: number): ICoachReview | undefined {
    return this.coachReviews.find(review => review.id === id);
  }

  addCoachReview(review: ICoachReview): void {
    this.coachReviews.push(review);
  }

  deleteCoachReview(id: number): void {
    const index = this.coachReviews.findIndex(review => review.id === id);
    if (index !== -1) {
      this.coachReviews.splice(index, 1);
    }
  }

  calcCoachRatersNumber(coachId: number): number {
    let raters = this.coachReviews.filter(review => review.coachId === coachId)
    if (!raters) {
      return 0;
    }
    return raters.length;
  }

  calcCoachAverageRating(coachId: number): number {
    // Check if the array is empty to avoid division by zero
    let raters = this.coachReviews.filter(review => review.coachId === coachId)
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
}
