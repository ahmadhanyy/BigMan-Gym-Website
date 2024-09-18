import { Injectable } from '@angular/core';
import { ICoach } from '../Interfaces/icoach';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoachService {
  private apiUrl = 'http://localhost:3000'
  coaches: ICoach[] = [];

  constructor(private httpClient: HttpClient) {
    this.coaches = [
      {"id": 1, "name": "Dwayne Johnson Dwayne Johnson", "salary": 5000, "avilableTime": [{"day": "Monday", "hour": "10:00"}, {"day": "Friday", "hour": "10:00"}, {"day": "Monday", "hour": "10:00"}, {"day": "Friday", "hour": "10:00"}, {"day": "Monday", "hour": "10:00"}, {"day": "Friday", "hour": "10:00"}, {"day": "Monday", "hour": "10:00"}, {"day": "Friday", "hour": "10:00"}, {"day": "Monday", "hour": "10:00"}, {"day": "Friday", "hour": "10:00"}, {"day": "Friday", "hour": "10:00"}, {"day": "Monday", "hour": "10:00"}, {"day": "Friday", "hour": "10:00"}, {"day": "Friday", "hour": "10:00"}, {"day": "Monday", "hour": "10:00"}, {"day": "Friday", "hour": "10:00"}, {"day": "Friday", "hour": "10:00"}, {"day": "Monday", "hour": "10:00"}, {"day": "Friday", "hour": "10:00"}, {"day": "Friday", "hour": "10:00"}, {"day": "Monday", "hour": "10:00"}, {"day": "Friday", "hour": "10:00"}, {"day": "Monday", "hour": "10:00"}, {"day": "Friday", "hour": "10:00"}, {"day": "Monday", "hour": "10:00"}, {"day": "Friday", "hour": "10:00"}, {"day": "Monday", "hour": "10:00"}, {"day": "Friday", "hour": "10:00"}, {"day": "Monday", "hour": "10:00"}, {"day": "Friday", "hour": "10:00"}], "experiance": "5 years", "imageUrl": "assets/trainer1.webp", "reviews": ["It was cool to train with this coach.", "He helped me to get excelent results."], "introduction": "I am a professional coach with 5 years of experience in the field. I have helped many people to achieve their goals and I am sure I can help you too."},
      {"id": 2, "name": "John Cena", "salary": 3000, "avilableTime": [{"day": "Monday", "hour": "10:00"}, {"day": "Friday", "hour": "10:00"}], "experiance": "2 years", "imageUrl": "assets/trainer2.jpeg", "ratings": [4, 3, 3, 3, 3, 3, 2, 2, 1, 1, 5], "reviews": ["It was cool to train with this coach.", "He helped me to get excelent results."], "discountPrecent": 10, "introduction": "I am a professional coach with 5 years of experience in the field. I have helped many people to achieve their goals and I am sure I can help you too."},
      {"id": 3, "name": "Big Ramy", "salary": 10000, "avilableTime": [{"day": "Monday", "hour": "10:00"}, {"day": "Friday", "hour": "10:00"}], "experiance": "6 years", "imageUrl": "assets/trainer3.jpg", "ratings": [3, 3, 3, 3, 4, 4, 4, 5, 5, 5, 1], "reviews": ["It was cool to train with this coach.", "He helped me to get excelent results."], "discountPrecent": 15, "introduction": "I am a professional coach with 5 years of experience in the field. I have helped many people to achieve their goals and I am sure I can help you too."},
      {"id": 4, "name": "Arnold Schwarzenegger", "salary": 5000, "avilableTime": [{"day": "Monday", "hour": "10:00"}, {"day": "Friday", "hour": "10:00"}], "experiance": "25 years", "imageUrl": "assets/trainer4.webp", "ratings": [2], "reviews": ["It was cool to train with this coach.", "He helped me to get excelent results."], "introduction": "I am a professional coach with 5 years of experience in the field. I have helped many people to achieve their goals and I am sure I can help you too."},
      {"id": 5, "name": "Mahmoud Khalaf", "salary": 5000, "avilableTime": [{"day": "Monday", "hour": "10:00"}, {"day": "Friday", "hour": "10:00"}], "experiance": "5 years", "imageUrl": "assets/trainer1.webp", "ratings": [5, 2, 2, 2, 3], "reviews": ["It was cool to train with this coach.", "He helped me to get excelent results."], "introduction": "I am a professional coach with 5 years of experience in the field. I have helped many people to achieve their goals and I am sure I can help you too."},
      {"id": 6, "name": "Mohamed Salah", "salary": 3000, "avilableTime": [{"day": "Monday", "hour": "10:00"}, {"day": "Friday", "hour": "10:00"}], "experiance": "2 years", "imageUrl": "assets/trainer2.jpeg", "ratings": [4, 3, 3, 3, 3, 3, 2, 2, 1, 1, 5], "reviews": ["It was cool to train with this coach.", "He helped me to get excelent results."], "discountPrecent": 10, "introduction": "I am a professional coach with 5 years of experience in the field. I have helped many people to achieve their goals and I am sure I can help you too."},
      {"id": 7, "name": "Mohamed Ramadan", "salary": 10000, "avilableTime": [{"day": "Monday", "hour": "10:00"}, {"day": "Friday", "hour": "10:00"}], "experiance": "6 years", "imageUrl": "assets/trainer3.jpg", "ratings": [3, 3, 3, 3, 4, 4, 4, 5, 5, 5, 1], "reviews": ["It was cool to train with this coach.", "He helped me to get excelent results."], "discountPrecent": 15, "introduction": "I am a professional coach with 5 years of experience in the field. I have helped many people to achieve their goals and I am sure I can help you too."},
      {"id": 8, "name": "Amr Diab", "salary": 5000, "avilableTime": [{"day": "Monday", "hour": "10:00"}, {"day": "Friday", "hour": "10:00"}], "experiance": "25 years", "imageUrl": "assets/trainer4.webp", "ratings": [2], "reviews": ["It was cool to train with this coach.", "He helped me to get excelent results."], "introduction": "I am a professional coach with 5 years of experience in the field. I have helped many people to achieve their goals and I am sure I can help you too."},
      {"id": 9, "name": "Dwayne Johnson Dwayne Johnson", "salary": 5000, "avilableTime": [{"day": "Monday", "hour": "10:00"}, {"day": "Friday", "hour": "10:00"}, {"day": "Monday", "hour": "10:00"}, {"day": "Friday", "hour": "10:00"}, {"day": "Monday", "hour": "10:00"}, {"day": "Friday", "hour": "10:00"}, {"day": "Monday", "hour": "10:00"}, {"day": "Friday", "hour": "10:00"}, {"day": "Monday", "hour": "10:00"}, {"day": "Friday", "hour": "10:00"}, {"day": "Friday", "hour": "10:00"}, {"day": "Monday", "hour": "10:00"}, {"day": "Friday", "hour": "10:00"}, {"day": "Friday", "hour": "10:00"}, {"day": "Monday", "hour": "10:00"}, {"day": "Friday", "hour": "10:00"}, {"day": "Friday", "hour": "10:00"}, {"day": "Monday", "hour": "10:00"}, {"day": "Friday", "hour": "10:00"}, {"day": "Friday", "hour": "10:00"}, {"day": "Monday", "hour": "10:00"}, {"day": "Friday", "hour": "10:00"}, {"day": "Monday", "hour": "10:00"}, {"day": "Friday", "hour": "10:00"}, {"day": "Monday", "hour": "10:00"}, {"day": "Friday", "hour": "10:00"}, {"day": "Monday", "hour": "10:00"}, {"day": "Friday", "hour": "10:00"}, {"day": "Monday", "hour": "10:00"}, {"day": "Friday", "hour": "10:00"}], "experiance": "5 years", "imageUrl": "assets/trainer1.webp", "reviews": ["It was cool to train with this coach.", "He helped me to get excelent results."], "introduction": "I am a professional coach with 5 years of experience in the field. I have helped many people to achieve their goals and I am sure I can help you too."},
      {"id": 10, "name": "John Cena", "salary": 3000, "avilableTime": [{"day": "Monday", "hour": "10:00"}, {"day": "Friday", "hour": "10:00"}], "experiance": "2 years", "imageUrl": "assets/trainer2.jpeg", "ratings": [4, 3, 3, 3, 3, 3, 2, 2, 1, 1, 5], "reviews": ["It was cool to train with this coach.", "He helped me to get excelent results."], "discountPrecent": 10, "introduction": "I am a professional coach with 5 years of experience in the field. I have helped many people to achieve their goals and I am sure I can help you too."},
      {"id": 11, "name": "Big Ramy", "salary": 10000, "avilableTime": [{"day": "Monday", "hour": "10:00"}, {"day": "Friday", "hour": "10:00"}], "experiance": "6 years", "imageUrl": "assets/trainer3.jpg", "ratings": [3, 3, 3, 3, 4, 4, 4, 5, 5, 5, 1], "reviews": ["It was cool to train with this coach.", "He helped me to get excelent results."], "discountPrecent": 15, "introduction": "I am a professional coach with 5 years of experience in the field. I have helped many people to achieve their goals and I am sure I can help you too."},
      {"id": 12, "name": "Arnold Schwarzenegger", "salary": 5000, "avilableTime": [{"day": "Monday", "hour": "10:00"}, {"day": "Friday", "hour": "10:00"}], "experiance": "25 years", "imageUrl": "assets/trainer4.webp", "ratings": [2], "reviews": ["It was cool to train with this coach.", "He helped me to get excelent results."], "introduction": "I am a professional coach with 5 years of experience in the field. I have helped many people to achieve their goals and I am sure I can help you too."}
    ]
  }

  getCoaches(): ICoach[] { //Observable<ICoach[]> {
    //return this.httpClient.get<ICoach[]>(`${this.apiUrl}/coaches`);
    return this.coaches;
  }

  getCoachById(id: number): ICoach | undefined { //Observable<ICoach> {
    //return this.httpClient.get<ICoach>(`${this.apiUrl}/coaches${id}`);
    return this.coaches.find((coach)=> coach.id == id);;
  }
/*
  getMinSalarySortedCoaches(): Observable<ICoach[]> {
    return this.httpClient.get<ICoach[]>(`${this.apiUrl}/coaches?_sort=salary&_order=asc`);
  }

  getMaxSalarySortedCoaches(): Observable<ICoach[]> {
    return this.httpClient.get<ICoach[]>(`${this.apiUrl}/coaches?_sort=salary&_order=desc`);
  }

  getNewestSortedCoaches(): Observable<ICoach[]> {
    return this.httpClient.get<ICoach[]>(`${this.apiUrl}/coaches?_sort=date&_order=desc`);
  }

  getRatingSortedCoaches(): Observable<ICoach[]> {
    return this.httpClient.get<ICoach[]>(`${this.apiUrl}/coaches?_sort=ratings&_order=desc`);
  }

  updateCoach(id: number, coach: ICoach) {
    return this.httpClient.put(`${this.apiUrl}/coaches/${id}`, coach);
  }

  deleteCoach(id: number) {
    return this.httpClient.delete(`${this.apiUrl}/coaches/${id}`);
  }
*/
  calcRatersNumber(coach: ICoach): number {
    if (!coach.ratings) {
      return 0;
    }
    return coach.ratings.length;
  }

  calcAverageRating(coach: ICoach): number {
    // Check if the array is empty to avoid division by zero
    if (!coach.ratings) {
      return 0;
    }
    // Sum all the ratings
    const sum = coach.ratings.reduce((a, b) => a + b, 0);
    // Calculate the average
    const average = sum / coach.ratings.length;
    // Round the average to the nearest integer and ensure it falls within 1-5
    const roundedAverage = Math.round(average);
    return Math.max(1, Math.min(5, roundedAverage)); // Ensures the result is between 1 and 5
  }

  convertListTo2DList(prodsList: ICoach[], size: number): ICoach[][] {
    const rows: ICoach[][] = [];
    for (let i = 0; i < prodsList.length; i += size) {
      rows.push(prodsList.slice(i, i + 4));
    }
    return rows;
  }

}
