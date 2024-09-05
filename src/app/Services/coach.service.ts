import { Injectable } from '@angular/core';
import { ICoach } from '../Interfaces/icoach';

@Injectable({
  providedIn: 'root'
})
export class CoachService {
  Coaches : ICoach[] = [{"id": 1, "name": "Dwayne Johnson Dwayne Johnson Dwayne Johnson Dwayne Johnson v Dwayne Johnson Dwayne Johnson", "salary": 5000, "avilableTime": [{"day": "Monday", "fromHour": "10:00", "toHour": "12:00"}, {"day": "Friday", "fromHour": "10:00", "toHour": "12:00"}], "experiance": "5 years", "imageUrl": "assets/trainer1.webp", "reviews": ['It was cool to train with this coach.', 'He helped me to get excelent results.']},
                        {"id": 2, "name": "John Cena", "salary": 3000, "avilableTime": [{"day": "Monday", "fromHour": "10:00", "toHour": "12:00"}, {"day": "Friday", "fromHour": "10:00", "toHour": "12:00"}], "experiance": "2 years", "imageUrl": "assets/trainer2.jpeg", "ratings": [4, 3, 3, 3, 3, 3, 2, 2, 1, 1, 5], "reviews": ['It was cool to train with this coach.', 'He helped me to get excelent results.'], "discountPrecent": 10},
                        {"id": 3, "name": "Big Ramy", "salary": 10000, "avilableTime": [{"day": "Monday", "fromHour": "10:00", "toHour": "12:00"}, {"day": "Friday", "fromHour": "10:00", "toHour": "12:00"}], "experiance": "6 years", "imageUrl": "assets/trainer3.jpg", "ratings": [3, 3, 3, 3, 4, 4, 4, 5, 5, 5, 1], "reviews": ['It was cool to train with this coach.', 'He helped me to get excelent results.'], "discountPrecent": 15},
                        {"id": 4, "name": "Arnold Schwarzenegger", "salary": 5000, "avilableTime": [{"day": "Monday", "fromHour": "10:00", "toHour": "12:00"}, {"day": "Friday", "fromHour": "10:00", "toHour": "12:00"}], "experiance": "25 years", "imageUrl": "assets/trainer4.webp", "ratings": [2], "reviews": ['It was cool to train with this coach.', 'He helped me to get excelent results.']},
                        {"id": 5, "name": "Mahmoud Khalaf", "salary": 5000, "avilableTime": [{"day": "Monday", "fromHour": "10:00", "toHour": "12:00"}, {"day": "Friday", "fromHour": "10:00", "toHour": "12:00"}], "experiance": "5 years", "imageUrl": "assets/trainer1.webp", "ratings": [5, 2, 2, 2, 3], "reviews": ['It was cool to train with this coach.', 'He helped me to get excelent results.']},
                        {"id": 6, "name": "Hazem Ateya", "salary": 3000, "avilableTime": [{"day": "Monday", "fromHour": "10:00", "toHour": "12:00"}, {"day": "Friday", "fromHour": "10:00", "toHour": "12:00"}], "experiance": "2 years", "imageUrl": "assets/trainer2.jpeg", "ratings": [4], "reviews": ['It was cool to train with this coach.', 'He helped me to get excelent results.'], "discountPrecent": 50},
                        {"id": 7, "name": "Sayed Reda", "salary": 10000, "avilableTime": [{"day": "Monday", "fromHour": "10:00", "toHour": "12:00"}, {"day": "Friday", "fromHour": "10:00", "toHour": "12:00"}], "experiance": "6 years", "imageUrl": "assets/trainer3.jpg", "ratings": [3, 3, 3, 3, 3, 3, 3, 3], "reviews": ['It was cool to train with this coach.', 'He helped me to get excelent results.']},
                        {"id": 8, "name": "Tamer Hagras", "salary": 5000, "avilableTime": [{"day": "Monday", "fromHour": "10:00", "toHour": "12:00"}, {"day": "Friday", "fromHour": "10:00", "toHour": "12:00"}], "experiance": "25 years", "imageUrl": "assets/trainer4.webp", "ratings": [2], "reviews": ['It was cool to train with this coach.', 'He helped me to get excelent results.']},
                        {"id": 9, "name": "Sayed Reda", "salary": 10000, "avilableTime": [{"day": "Monday", "fromHour": "10:00", "toHour": "12:00"}, {"day": "Friday", "fromHour": "10:00", "toHour": "12:00"}], "experiance": "6 years", "imageUrl": "assets/trainer3.jpg", "ratings": [3, 3, 3, 3, 3, 3, 3, 3], "reviews": ['It was cool to train with this coach.', 'He helped me to get excelent results.']},
                        {"id": 10, "name": "Tamer Hagras", "salary": 5000, "avilableTime": [{"day": "Monday", "fromHour": "10:00", "toHour": "12:00"}, {"day": "Friday", "fromHour": "10:00", "toHour": "12:00"}], "experiance": "25 years", "imageUrl": "assets/trainer4.webp", "ratings": [2], "reviews": ['It was cool to train with this coach.', 'He helped me to get excelent results.']},
                        {"id": 11, "name": "Dwayne Johnson Dwayne Johnson Dwayne Johnson Dwayne Johnson", "salary": 5000, "avilableTime": [{"day": "Monday", "fromHour": "10:00", "toHour": "12:00"}, {"day": "Friday", "fromHour": "10:00", "toHour": "12:00"}], "experiance": "5 years", "imageUrl": "assets/trainer1.webp", "reviews": ['It was cool to train with this coach.', 'He helped me to get excelent results.']},
                        {"id": 12, "name": "John Cena", "salary": 3000, "avilableTime": [{"day": "Monday", "fromHour": "10:00", "toHour": "12:00"}, {"day": "Friday", "fromHour": "10:00", "toHour": "12:00"}], "experiance": "2 years", "imageUrl": "assets/trainer2.jpeg", "ratings": [4, 3, 3, 3, 3, 3, 2, 2, 1, 1, 5], "reviews": ['It was cool to train with this coach.', 'He helped me to get excelent results.'], "discountPrecent": 10},
                        {"id": 13, "name": "Big Ramy", "salary": 10000, "avilableTime": [{"day": "Monday", "fromHour": "10:00", "toHour": "12:00"}, {"day": "Friday", "fromHour": "10:00", "toHour": "12:00"}], "experiance": "6 years", "imageUrl": "assets/trainer3.jpg", "ratings": [3, 3, 3, 3, 4, 4, 4, 5, 5, 5, 1], "reviews": ['It was cool to train with this coach.', 'He helped me to get excelent results.'], "discountPrecent": 15},
                        {"id": 14, "name": "Arnold Schwarzenegger", "salary": 5000, "avilableTime": [{"day": "Monday", "fromHour": "10:00", "toHour": "12:00"}, {"day": "Friday", "fromHour": "10:00", "toHour": "12:00"}], "experiance": "25 years", "imageUrl": "assets/trainer4.webp", "ratings": [2], "reviews": ['It was cool to train with this coach.', 'He helped me to get excelent results.']},
                        {"id": 15, "name": "Mahmoud Khalaf", "salary": 5000, "avilableTime": [{"day": "Monday", "fromHour": "10:00", "toHour": "12:00"}, {"day": "Friday", "fromHour": "10:00", "toHour": "12:00"}], "experiance": "5 years", "imageUrl": "assets/trainer1.webp", "ratings": [5, 2, 2, 2, 3], "reviews": ['It was cool to train with this coach.', 'He helped me to get excelent results.']},
                        {"id": 16, "name": "Hazem Ateya", "salary": 3000, "avilableTime": [{"day": "Monday", "fromHour": "10:00", "toHour": "12:00"}, {"day": "Friday", "fromHour": "10:00", "toHour": "12:00"}], "experiance": "2 years", "imageUrl": "assets/trainer2.jpeg", "ratings": [4], "reviews": ['It was cool to train with this coach.', 'He helped me to get excelent results.'], "discountPrecent": 50},
                        {"id": 17, "name": "Sayed Reda", "salary": 10000, "avilableTime": [{"day": "Monday", "fromHour": "10:00", "toHour": "12:00"}, {"day": "Friday", "fromHour": "10:00", "toHour": "12:00"}], "experiance": "6 years", "imageUrl": "assets/trainer3.jpg", "ratings": [3, 3, 3, 3, 3, 3, 3, 3], "reviews": ['It was cool to train with this coach.', 'He helped me to get excelent results.']},
                        {"id": 18, "name": "Tamer Hagras", "salary": 5000, "avilableTime": [{"day": "Monday", "fromHour": "10:00", "toHour": "12:00"}, {"day": "Friday", "fromHour": "10:00", "toHour": "12:00"}], "experiance": "25 years", "imageUrl": "assets/trainer4.webp", "ratings": [2], "reviews": ['It was cool to train with this coach.', 'He helped me to get excelent results.']},
                        {"id": 19, "name": "Sayed Reda", "salary": 10000, "avilableTime": [{"day": "Monday", "fromHour": "10:00", "toHour": "12:00"}, {"day": "Friday", "fromHour": "10:00", "toHour": "12:00"}], "experiance": "6 years", "imageUrl": "assets/trainer3.jpg", "ratings": [3, 3, 3, 3, 3, 3, 3, 3], "reviews": ['It was cool to train with this coach.', 'He helped me to get excelent results.']},
                        {"id": 20, "name": "Tamer Hagras", "salary": 5000, "avilableTime": [{"day": "Monday", "fromHour": "10:00", "toHour": "12:00"}, {"day": "Friday", "fromHour": "10:00", "toHour": "12:00"}], "experiance": "25 years", "imageUrl": "assets/trainer4.webp", "ratings": [2], "reviews": ['It was cool to train with this coach.', 'He helped me to get excelent results.']}];

  constructor() { }

  getCoaches(): ICoach[] {
    return this.Coaches;
  }

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
