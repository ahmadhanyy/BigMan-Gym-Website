import { Injectable } from '@angular/core';
import { ICoach } from '../Interfaces/icoach';

@Injectable({
  providedIn: 'root'
})
export class CoachService {
  Coaches : ICoach[] = [{"id": 1, "name": "Dwayne Johnson Dwayne Johnson Dwayne Johnson Dwayne Johnson v Dwayne Johnson Dwayne Johnson", "salary": 5000, "avilableTime": [{"day": "Monday", "hour": "10:00"}, {"day": "Friday", "hour": "10:00"}, {"day": "Monday", "hour": "10:00"}, {"day": "Friday", "hour": "10:00"}, {"day": "Monday", "hour": "10:00"}, {"day": "Friday", "hour": "10:00"}, {"day": "Monday", "hour": "10:00"}, {"day": "Friday", "hour": "10:00"}, {"day": "Monday", "hour": "10:00"}, {"day": "Friday", "hour": "10:00"}], "experiance": "5 years", "imageUrl": "assets/trainer1.webp", "reviews": ['It was cool to train with this coach.', 'He helped me to get excelent results.'], "introduction": 'I am a professional coach with 5 years of experience in the field. I have helped many people to achieve their goals and I am sure I can help you too.'},
                        {"id": 2, "name": "John Cena", "salary": 3000, "avilableTime": [{"day": "Monday", "hour": "10:00"}, {"day": "Friday", "hour": "10:00"}], "experiance": "2 years", "imageUrl": "assets/trainer2.jpeg", "ratings": [4, 3, 3, 3, 3, 3, 2, 2, 1, 1, 5], "reviews": ['It was cool to train with this coach.', 'He helped me to get excelent results.'], "discountPrecent": 10, "introduction": 'I am a professional coach with 2 years of experience in the field. I have helped many people to achieve their goals and I am sure I can help you too.'},
                        {"id": 3, "name": "Big Ramy", "salary": 10000, "avilableTime": [{"day": "Monday", "hour": "10:00"}, {"day": "Friday", "hour": "10:00"}], "experiance": "6 years", "imageUrl": "assets/trainer3.jpg", "ratings": [3, 3, 3, 3, 4, 4, 4, 5, 5, 5, 1], "reviews": ['It was cool to train with this coach.', 'He helped me to get excelent results.'], "discountPrecent": 15, "introduction": 'I am a professional coach with 6 years of experience in the field. I have helped many people to achieve their goals and I am sure I can help you too.'},
                        {"id": 4, "name": "Arnold Schwarzenegger", "salary": 5000, "avilableTime": [{"day": "Monday", "hour": "10:00"}, {"day": "Friday", "hour": "10:00"}], "experiance": "25 years", "imageUrl": "assets/trainer4.webp", "ratings": [2], "reviews": ['It was cool to train with this coach.', 'He helped me to get excelent results.'], "introduction": 'I am a professional coach with 25 years of experience in the field. I have helped many people to achieve their goals and I am sure I can help you too.'},
                        {"id": 5, "name": "Mahmoud Khalaf", "salary": 5000, "avilableTime": [{"day": "Monday", "hour": "10:00"}, {"day": "Friday", "hour": "10:00"}], "experiance": "5 years", "imageUrl": "assets/trainer1.webp", "ratings": [5, 2, 2, 2, 3], "reviews": ['It was cool to train with this coach.', 'He helped me to get excelent results.'], "introduction": 'I am a professional coach with 5 years of experience in the field. I have helped many people to achieve their goals and I am sure I can help you too.'},
                        {"id": 6, "name": "Hazem Ateya", "salary": 3000, "avilableTime": [{"day": "Monday", "hour": "10:00"}, {"day": "Friday", "hour": "10:00"}], "experiance": "2 years", "imageUrl": "assets/trainer2.jpeg", "ratings": [4], "reviews": ['It was cool to train with this coach.', 'He helped me to get excelent results.'], "discountPrecent": 50, "introduction": 'I am a professional coach with 5 years of experience in the field. I have helped many people to achieve their goals and I am sure I can help you too.'},
                        {"id": 7, "name": "Sayed Reda", "salary": 10000, "avilableTime": [{"day": "Monday", "hour": "10:00"}, {"day": "Friday", "hour": "10:00"}], "experiance": "6 years", "imageUrl": "assets/trainer3.jpg", "ratings": [3, 3, 3, 3, 3, 3, 3, 3], "reviews": ['It was cool to train with this coach.', 'He helped me to get excelent results.'], "introduction": 'I am a professional coach with 5 years of experience in the field. I have helped many people to achieve their goals and I am sure I can help you too.'},
                        {"id": 8, "name": "Arnold Schwarzenegger", "salary": 5000, "avilableTime": [{"day": "Monday", "hour": "10:00"}, {"day": "Friday", "hour": "10:00"}], "experiance": "25 years", "imageUrl": "assets/trainer4.webp", "ratings": [2], "reviews": ['It was cool to train with this coach.', 'He helped me to get excelent results.'], "introduction": 'I am a professional coach with 5 years of experience in the field. I have helped many people to achieve their goals and I am sure I can help you too.'},
                        {"id": 9, "name": "Mahmoud Khalaf", "salary": 5000, "avilableTime": [{"day": "Monday", "hour": "10:00"}, {"day": "Friday", "hour": "10:00"}], "experiance": "5 years", "imageUrl": "assets/trainer1.webp", "ratings": [5, 2, 2, 2, 3], "reviews": ['It was cool to train with this coach.', 'He helped me to get excelent results.'], "introduction": 'I am a professional coach with 5 years of experience in the field. I have helped many people to achieve their goals and I am sure I can help you too.'},
                        {"id": 10, "name": "Hazem Ateya", "salary": 3000, "avilableTime": [{"day": "Monday", "hour": "10:00"}, {"day": "Friday", "hour": "10:00"}], "experiance": "2 years", "imageUrl": "assets/trainer2.jpeg", "ratings": [4], "reviews": ['It was cool to train with this coach.', 'He helped me to get excelent results.'], "discountPrecent": 50, "introduction": 'I am a professional coach with 5 years of experience in the field. I have helped many people to achieve their goals and I am sure I can help you too.'},
                        {"id": 11, "name": "Sayed Reda", "salary": 10000, "avilableTime": [{"day": "Monday", "hour": "10:00"}, {"day": "Friday", "hour": "10:00"}], "experiance": "6 years", "imageUrl": "assets/trainer3.jpg", "ratings": [3, 3, 3, 3, 3, 3, 3, 3], "reviews": ['It was cool to train with this coach.', 'He helped me to get excelent results.'], "introduction": 'I am a professional coach with 5 years of experience in the field. I have helped many people to achieve their goals and I am sure I can help you too.'},
                        {"id": 12, "name": "Tamer Hagras", "salary": 5000, "avilableTime": [{"day": "Monday", "hour": "10:00"}, {"day": "Friday", "hour": "10:00"}], "experiance": "25 years", "imageUrl": "assets/trainer4.webp", "ratings": [2], "reviews": ['It was cool to train with this coach.', 'He helped me to get excelent results.'], "introduction": 'I am a professional coach with 5 years of experience in the field. I have helped many people to achieve their goals and I am sure I can help you too.'},
                        {"id": 13, "name": "Sayed Reda", "salary": 10000, "avilableTime": [{"day": "Monday", "hour": "10:00"}, {"day": "Friday", "hour": "10:00"}], "experiance": "6 years", "imageUrl": "assets/trainer3.jpg", "ratings": [3, 3, 3, 3, 3, 3, 3, 3], "reviews": ['It was cool to train with this coach.', 'He helped me to get excelent results.'], "introduction": 'I am a professional coach with 5 years of experience in the field. I have helped many people to achieve their goals and I am sure I can help you too.'},
                        {"id": 14, "name": "Tamer Hagras", "salary": 5000, "avilableTime": [{"day": "Monday", "hour": "10:00"}, {"day": "Friday", "hour": "10:00"}], "experiance": "25 years", "imageUrl": "assets/trainer4.webp", "ratings": [2], "reviews": ['It was cool to train with this coach.', 'He helped me to get excelent results.'], "introduction": 'I am a professional coach with 5 years of experience in the field. I have helped many people to achieve their goals and I am sure I can help you too.'}];

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
