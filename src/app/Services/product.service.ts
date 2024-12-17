import { ElementRef, Injectable } from '@angular/core';
import { IProduct } from '../Interfaces/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  prods : IProduct[] = [{"id": 1, "name": "Dumbbell Dumbbell Dumbbell vv Dumbbell Dumbbell Dumbbell Dumbbell Dumbbell Dumbbell Dumbbell", "category": 3, "price": 1200, "quantity": 10, "description": "Versatile equipment for strength training, ideal for a range of exercises including curls and presses.", "imageUrl": "assets/Dumbbell.jpg", "reviews": ['It is high quality and deserve every pound.', 'best value for money', 'تحفة بجد'], "discountPrecent": 10},
                        {"id": 2, "name": "Barbell", "category": 3, "price": 2500, "quantity": 20, "description": "Sturdy bar for heavy lifting, perfect for squats, deadlifts, and bench presses. Sturdy bar for heavy lifting, perfect for squats, deadlifts, and bench presses. Sturdy bar for heavy lifting, perfect for squats, deadlifts, and bench presses. Sturdy bar for heavy lifting, perfect for squats, deadlifts, and bench presses.", "imageUrl": "assets/Barbell.webp", "ratings": [4, 3, 3, 3, 3, 1, 1, 5], "reviews": ['It is high quality and deserve every pound.', 'best value for money']},
                        {"id": 3, "name": "Treadmill", "category": 2, "price": 80000, "quantity": 30, "description": "Advanced treadmill with adjustable speed and incline for effective cardio workouts.", "imageUrl": "assets/Treadmill.jpg", "ratings": [3, 3, 3, 2, 2, 1, 1, 5], "reviews": ['It is high quality and deserve every pound.', 'best value for money'], "discountPrecent": 15},
                        {"id": 4, "name": "Jumb Rope", "category": 5, "price": 40, "quantity": 40, "description": "Portable tool for improving cardio and agility, with adjustable length and comfortable handles.", "imageUrl": "assets/JumpRope.jpg", "ratings": [4, 3, 3, 3, 3, 3, 2], "reviews": ['It is high quality and deserve every pound.', 'best value for money'], "discountPrecent": 10},
                        {"id": 5, "name": "Door Gym Bar", "category": 5, "price": 50, "quantity": 50, "description": "Easy-to-install bar for bodyweight exercises like pull-ups and push-ups, fitting most doorways.", "imageUrl": "assets/DoorGymBar.webp", "ratings": [5], "reviews": ['It is high quality and deserve every pound.', 'best value for money'], "discountPrecent": 30},
                        {"id": 6, "name": "Dumbbell", "category": 3, "price": 1200, "quantity": 10, "description": "Versatile equipment for strength training, ideal for a range of exercises including curls and presses.", "imageUrl": "assets/Dumbbell.jpg", "ratings": [4, 3, 3, 2, 2, 1, 1, 5], "reviews": ['It is high quality and deserve every pound.', 'best value for money']},
                        {"id": 7, "name": "Barbell", "category": 3, "price": 2500, "quantity": 20, "description": "Sturdy bar for heavy lifting, perfect for squats, deadlifts, and bench presses.", "imageUrl": "assets/Barbell.webp", "ratings": [4, 3, 3, 2, 2, 3, 5], "reviews": ['It is high quality and deserve every pound.', 'best value for money'], "discountPrecent": 5},
                        {"id": 8, "name": "Treadmill", "category": 2, "price": 80000, "quantity": 30, "description": "Advanced treadmill with adjustable speed and incline for effective cardio workouts.", "imageUrl": "assets/Treadmill.jpg", "ratings": [4, 2, 2, 1, 1, 5], "reviews": ['It is high quality and deserve every pound.', 'best value for money']},
                        {"id": 9, "name": "Jumb Rope", "category": 5, "price": 40, "quantity": 40, "description": "Portable tool for improving cardio and agility, with adjustable length and comfortable handles.", "imageUrl": "assets/JumpRope.jpg", "ratings": [1], "reviews": ['It is high quality and deserve every pound.', 'best value for money']},
                        {"id": 10, "name": "Door Gym Bar", "category": 5, "price": 50, "quantity": 50, "description": "Easy-to-install bar for bodyweight exercises like pull-ups and push-ups, fitting most doorways.", "imageUrl": "assets/DoorGymBar.webp", "ratings": [4, 3, 1, 1, 5], "reviews": ['It is high quality and deserve every pound.', 'best value for money']},
                        {"id": 11, "name": "Dumbbell Dumbbell Dumbbell vv Dumbbell Dumbbell Dumbbell Dumbbell Dumbbell Dumbbell Dumbbell", "category": 3, "price": 1200, "quantity": 10, "description": "Versatile equipment for strength training, ideal for a range of exercises including curls and presses.", "imageUrl": "assets/Dumbbell.jpg", "reviews": ['It is high quality and deserve every pound.', 'best value for money', 'تحفة بجد'], "discountPrecent": 10},
                        {"id": 12, "name": "Barbell", "category": 3, "price": 2500, "quantity": 20, "description": "Sturdy bar for heavy lifting, perfect for squats, deadlifts, and bench presses. Sturdy bar for heavy lifting, perfect for squats, deadlifts, and bench presses. Sturdy bar for heavy lifting, perfect for squats, deadlifts, and bench presses. Sturdy bar for heavy lifting, perfect for squats, deadlifts, and bench presses.", "imageUrl": "assets/Barbell.webp", "ratings": [4, 3, 3, 3, 3, 1, 1, 5], "reviews": ['It is high quality and deserve every pound.', 'best value for money']},
                        {"id": 13, "name": "Treadmill", "category": 2, "price": 80000, "quantity": 30, "description": "Advanced treadmill with adjustable speed and incline for effective cardio workouts.", "imageUrl": "assets/Treadmill.jpg", "ratings": [3, 3, 3, 2, 2, 1, 1, 5], "reviews": ['It is high quality and deserve every pound.', 'best value for money'], "discountPrecent": 15},
                        {"id": 14, "name": "Jumb Rope", "category": 5, "price": 40, "quantity": 40, "description": "Portable tool for improving cardio and agility, with adjustable length and comfortable handles.", "imageUrl": "assets/JumpRope.jpg", "ratings": [4, 3, 3, 3, 3, 3, 2], "reviews": ['It is high quality and deserve every pound.', 'best value for money'], "discountPrecent": 10},
                        {"id": 15, "name": "Door Gym Bar", "category": 5, "price": 50, "quantity": 50, "description": "Easy-to-install bar for bodyweight exercises like pull-ups and push-ups, fitting most doorways.", "imageUrl": "assets/DoorGymBar.webp", "ratings": [5], "reviews": ['It is high quality and deserve every pound.', 'best value for money'], "discountPrecent": 30},
                        {"id": 16, "name": "Dumbbell", "category": 3, "price": 1200, "quantity": 10, "description": "Versatile equipment for strength training, ideal for a range of exercises including curls and presses.", "imageUrl": "assets/Dumbbell.jpg", "ratings": [4, 3, 3, 2, 2, 1, 1, 5], "reviews": ['It is high quality and deserve every pound.', 'best value for money']},
                        {"id": 17, "name": "Barbell", "category": 3, "price": 2500, "quantity": 20, "description": "Sturdy bar for heavy lifting, perfect for squats, deadlifts, and bench presses.", "imageUrl": "assets/Barbell.webp", "ratings": [4, 3, 3, 2, 2, 3, 5], "reviews": ['It is high quality and deserve every pound.', 'best value for money'], "discountPrecent": 5},
                        {"id": 18, "name": "Treadmill", "category": 2, "price": 80000, "quantity": 30, "description": "Advanced treadmill with adjustable speed and incline for effective cardio workouts.", "imageUrl": "assets/Treadmill.jpg", "ratings": [4, 2, 2, 1, 1, 5], "reviews": ['It is high quality and deserve every pound.', 'best value for money']},
                        {"id": 19, "name": "Jumb Rope", "category": 5, "price": 40, "quantity": 40, "description": "Portable tool for improving cardio and agility, with adjustable length and comfortable handles.", "imageUrl": "assets/JumpRope.jpg", "ratings": [1], "reviews": ['It is high quality and deserve every pound.', 'best value for money']},
                        {"id": 20, "name": "Door Gym Bar", "category": 5, "price": 50, "quantity": 50, "description": "Easy-to-install bar for bodyweight exercises like pull-ups and push-ups, fitting most doorways.", "imageUrl": "assets/DoorGymBar.webp", "ratings": [4, 3, 1, 1, 5], "reviews": ['It is high quality and deserve every pound.', 'best value for money']}];

  constructor() { }

  getProducts(): IProduct[] {
    return this.prods;
  }

  getProductsBatch(startIndex: number, batchSize: number): IProduct[] {
    return this.prods.slice(startIndex, startIndex + batchSize);
  }

  getAllProductsLength(): number {
    return this.prods.length;
  }

  calcRatersNumber(prod: IProduct): number {
    if (!prod.ratings) {
      return 0;
    }
    return prod.ratings.length;
  }

  calcAverageRating(prod: IProduct): number {
    // Check if the array is empty to avoid division by zero
    if (!prod.ratings) {
      return 0;
    }
    // Sum all the ratings
    const sum = prod.ratings.reduce((a, b) => a + b, 0);
    // Calculate the average
    const average = sum / prod.ratings.length;
    // Round the average to the nearest integer and ensure it falls within 1-5
    const roundedAverage = Math.round(average);
    return Math.max(1, Math.min(5, roundedAverage)); // Ensures the result is between 1 and 5
  }

  convertListTo2DList(prodsList: IProduct[], size: number): IProduct[][] {
    const rows: IProduct[][] = [];
    for (let i = 0; i < prodsList.length; i += size) {
      rows.push(prodsList.slice(i, i + 4));
    }
    return rows;
  }

<<<<<<< Updated upstream
=======
  calculateDiscountedPrice(product: IProduct): number {
    if (product.discountPrecent) {
      return product.price - (product.price * product.discountPrecent) / 100;
    }
    return product.price;
  }

>>>>>>> Stashed changes
}
