import { Injectable } from '@angular/core';
import { IProduct } from '../Interfaces/iproduct';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:3000'
  prods: IProduct[] = [];
  highShippingPrice: number = 250;
  lowShippingPrice: number = 35;

  //http://localhost:3000/products?_sort=id&_order=asc

  constructor(private httpClient: HttpClient) {
    this.prods = [
      {"id": 1, "name": "test product Dumbbell Dumbbell vv Dumbbell Dumbbell Dumbbell Dumbbell Dumbbell Dumbbell Dumbbell", "categoryId": 2, "price": 1200, "quantity": 10, "description": "Versatile equipment for strength training, ideal for a range of exercises including curls and presses. Versatile equipment for strength training, ideal for a range of exercises including curls and presses. Versatile equipment for strength training, ideal for a range of exercises including curls and presses.", "imageUrl": ["assets/Dumbbell.jpg", "assets/Treadmill.jpg", "assets/JumpRope.jpg", "assets/DoorGymBar.webp", "assets/Barbell.webp", "assets/JumpRope.jpg", "assets/DoorGymBar.webp", "assets/Barbell.webp"], "returnable": true, "discountPrecent": 10, "color": ["Red", "Blue", "Green", "Yellow", "Black", "White", "Orange", "Purple", "Pink", "Brown", "Gray", "Cyan", "Magenta", "Beige", "Teal"], "size": ["XS", "S", "M", "L", "XL", "XXL", "XXXL", "XXS", "XXXS", "S/M", "M/L", "L/XL", "One Size", "Petite", "Tall", "XS", "S", "M", "L", "XL", "XXL", "XXXL", "XXS", "XXXS", "S/M", "M/L", "L/XL", "One Size", "Petite", "Tall", "XS", "S", "M", "L", "XL", "XXL", "XXXL", "XXS", "XXXS", "S/M", "M/L", "L/XL", "One Size", "Petite", "Tall", "XS", "S", "M", "L", "XL", "XXL", "XXXL", "XXS", "XXXS", "S/M", "M/L", "L/XL", "One Size", "Petite", "Tall"], "freeShipping": false, "shippingPrice": 0, "isFav": false, "brand": "Nike", "material": "Metal", "productionCountry": "Egypt", "Fit": "Regular"},
      {"id": 2, "name": "Barbell", "categoryId": 2, "price": 2500, "quantity": 20, "description": "Sturdy bar for heavy lifting, perfect for squats, deadlifts, and bench presses. Sturdy bar for heavy lifting, perfect for squats, deadlifts, and bench presses. Sturdy bar for heavy lifting, perfect for squats, deadlifts, and bench presses. Sturdy bar for heavy lifting, perfect for squats, deadlifts, and bench presses.", "imageUrl": ["assets/Barbell.webp", "assets/JumpRope.jpg", "assets/DoorGymBar.webp", "assets/Barbell.webp", "assets/JumpRope.jpg", "assets/DoorGymBar.webp", "assets/Barbell.webp"], "returnable": true, "color": ["Red", "Blue", "Green", "Yellow", "Black", "White", "Orange", "Purple", "Pink", "Brown", "Gray", "Cyan", "Magenta", "Beige", "Teal"], "size": ["XS", "S", "M", "L", "XL", "XXL", "XXXL"], "freeShipping": true, "shippingPrice": 1, "isFav": false, "brand": "Nike", "material": "Metal", "productionCountry": "Egypt"},
      {"id": 3, "name": "Treadmill", "categoryId": 1, "price": 80000, "quantity": 30, "description": "Advanced treadmill with adjustable speed and incline for effective cardio workouts.", "imageUrl": ["assets/Treadmill.jpg", "assets/JumpRope.jpg", "assets/DoorGymBar.webp", "assets/Barbell.webp"], "discountPrecent": 15, "returnable": true, "color": ["Pink", "Brown", "Gray", "Cyan", "Magenta", "Beige", "Teal"], "size": ["XS", "S", "M"], "freeShipping": false, "shippingPrice": 1, "isFav": false, "brand": "Nike", "material": "Metal", "productionCountry": "Egypt"},
      {"id": 4, "name": "Jumb Rope", "categoryId": 4, "price": 40, "quantity": 40, "description": "Portable tool for improving cardio and agility, with adjustable length and comfortable handles.", "imageUrl": ["assets/JumpRope.jpg"], "discountPrecent": 10, "returnable": true, "color": ["red"], "size": ["XS"], "freeShipping": false, "shippingPrice": 0, "isFav": false, "brand": "Nike", "material": "Rubber", "productionCountry": "Egypt"},
      {"id": 5, "name": "Door Gym Bar", "categoryId": 4, "price": 50, "quantity": 50, "description": "Easy-to-install bar for bodyweight exercises like pull-ups and push-ups, fitting most doorways.", "imageUrl": ["assets/DoorGymBar.webp"], "discountPrecent": 30, "returnable": true, "freeShipping": false, "shippingPrice": 0, "isFav": false, "brand": "Nike", "material": "Metal", "productionCountry": "Egypt"},
      {"id": 6, "name": "test product Dumbbell Dumbbell vv Dumbbell Dumbbell Dumbbell Dumbbell Dumbbell Dumbbell Dumbbell", "categoryId": 2, "price": 1200, "quantity": 10, "description": "Versatile equipment for strength training, ideal for a range of exercises including curls and presses. Versatile equipment for strength training, ideal for a range of exercises including curls and presses. Versatile equipment for strength training, ideal for a range of exercises including curls and presses.", "imageUrl": ["assets/Dumbbell.jpg", "assets/Treadmill.jpg", "assets/JumpRope.jpg", "assets/DoorGymBar.webp", "assets/Barbell.webp", "assets/JumpRope.jpg", "assets/DoorGymBar.webp", "assets/Barbell.webp"], "returnable": true, "discountPrecent": 10, "color": ["Red", "Blue", "Green", "Yellow", "Black", "White", "Orange", "Purple", "Pink", "Brown", "Gray", "Cyan", "Magenta", "Beige", "Teal"], "size": ["XS", "S", "M", "L", "XL", "XXL", "XXXL", "XXS", "XXXS", "S/M", "M/L", "L/XL", "One Size", "Petite", "Tall"], "freeShipping": false, "shippingPrice": 0, "isFav": false, "brand": "Nike", "material": "Metal", "productionCountry": "Egypt"},
      {"id": 7, "name": "Barbell", "categoryId": 2, "price": 2500, "quantity": 20, "description": "Sturdy bar for heavy lifting, perfect for squats, deadlifts, and bench presses. Sturdy bar for heavy lifting, perfect for squats, deadlifts, and bench presses. Sturdy bar for heavy lifting, perfect for squats, deadlifts, and bench presses. Sturdy bar for heavy lifting, perfect for squats, deadlifts, and bench presses.", "imageUrl": ["assets/Barbell.webp", "assets/JumpRope.jpg", "assets/DoorGymBar.webp", "assets/Barbell.webp", "assets/JumpRope.jpg", "assets/DoorGymBar.webp", "assets/Barbell.webp"], "returnable": true, "color": ["Red", "Blue", "Green", "Yellow", "Black", "White", "Orange", "Purple", "Pink", "Brown", "Gray", "Cyan", "Magenta", "Beige", "Teal"], "size": ["XS", "S", "M", "L", "XL", "XXL", "XXXL"], "freeShipping": true, "shippingPrice": 1, "isFav": false, "brand": "Nike", "material": "Metal", "productionCountry": "Egypt"},
      {"id": 8, "name": "Treadmill", "categoryId": 1, "price": 80000, "quantity": 30, "description": "Advanced treadmill with adjustable speed and incline for effective cardio workouts.", "imageUrl": ["assets/Treadmill.jpg", "assets/JumpRope.jpg", "assets/DoorGymBar.webp", "assets/Barbell.webp"], "discountPrecent": 15, "returnable": true, "color": ["Pink", "Brown", "Gray", "Cyan", "Magenta", "Beige", "Teal"], "size": ["XS", "S", "M"], "freeShipping": false, "shippingPrice": 1, "isFav": false, "brand": "Nike", "material": "Metal", "productionCountry": "Egypt"},
      {"id": 9, "name": "Jumb Rope", "categoryId": 4, "price": 40, "quantity": 40, "description": "Portable tool for improving cardio and agility, with adjustable length and comfortable handles.", "imageUrl": ["assets/JumpRope.jpg"], "discountPrecent": 10, "returnable": true, "color": ["red"], "size": ["XS"], "freeShipping": false, "shippingPrice": 0, "isFav": false, "brand": "Nike", "material": "Rubber", "productionCountry": "Egypt"},
      {"id": 10, "name": "Door Gym Bar", "categoryId": 4, "price": 50, "quantity": 50, "description": "Easy-to-install bar for bodyweight exercises like pull-ups and push-ups, fitting most doorways.", "imageUrl": ["assets/DoorGymBar.webp"], "discountPrecent": 30, "returnable": true, "freeShipping": false, "shippingPrice": 0, "isFav": false, "brand": "Nike", "material": "Metal", "productionCountry": "Egypt"},
      {"id": 11, "name": "test product Dumbbell Dumbbell vv Dumbbell Dumbbell Dumbbell Dumbbell Dumbbell Dumbbell Dumbbell", "categoryId": 2, "price": 1200, "quantity": 10, "description": "Versatile equipment for strength training, ideal for a range of exercises including curls and presses.", "imageUrl": ["assets/Dumbbell.jpg", "assets/Treadmill.jpg", "assets/JumpRope.jpg", "assets/DoorGymBar.webp", "assets/Barbell.webp", "assets/JumpRope.jpg", "assets/DoorGymBar.webp", "assets/Barbell.webp"], "returnable": true, "discountPrecent": 10, "color": ["Red", "Blue", "Green", "Yellow", "Black", "White", "Orange", "Purple", "Pink", "Brown", "Gray", "Cyan", "Magenta", "Beige", "Teal"], "size": ["XS", "S", "M", "L", "XL", "XXL", "XXXL", "XXS", "XXXS", "S/M", "M/L", "L/XL", "One Size", "Petite", "Tall"], "freeShipping": false, "shippingPrice": 0, "isFav": false, "brand": "Nike", "material": "Metal", "productionCountry": "Egypt"},
      {"id": 12, "name": "Barbell", "categoryId": 2, "price": 2500, "quantity": 20, "description": "Sturdy bar for heavy lifting, perfect for squats, deadlifts, and bench presses. Sturdy bar for heavy lifting, perfect for squats, deadlifts, and bench presses. Sturdy bar for heavy lifting, perfect for squats, deadlifts, and bench presses. Sturdy bar for heavy lifting, perfect for squats, deadlifts, and bench presses.", "imageUrl": ["assets/Barbell.webp", "assets/JumpRope.jpg", "assets/DoorGymBar.webp", "assets/Barbell.webp", "assets/JumpRope.jpg", "assets/DoorGymBar.webp", "assets/Barbell.webp"], "returnable": true, "color": ["Red", "Blue", "Green", "Yellow", "Black", "White", "Orange", "Purple", "Pink", "Brown", "Gray", "Cyan", "Magenta", "Beige", "Teal"], "size": ["XS", "S", "M", "L", "XL", "XXL", "XXXL"], "freeShipping": true, "shippingPrice": 1, "isFav": false, "brand": "Nike", "material": "Metal", "productionCountry": "Egypt"},
      {"id": 13, "name": "Treadmill", "categoryId": 1, "price": 80000, "quantity": 30, "description": "Advanced treadmill with adjustable speed and incline for effective cardio workouts.", "imageUrl": ["assets/Treadmill.jpg", "assets/JumpRope.jpg", "assets/DoorGymBar.webp", "assets/Barbell.webp"], "discountPrecent": 15, "returnable": true, "color": ["Pink", "Brown", "Gray", "Cyan", "Magenta", "Beige", "Teal"], "size": ["XS", "S", "M"], "freeShipping": false, "shippingPrice": 1, "isFav": false, "brand": "Nike", "material": "Metal", "productionCountry": "Egypt"},
      {"id": 14, "name": "Jumb Rope", "categoryId": 4, "price": 40, "quantity": 40, "description": "Portable tool for improving cardio and agility, with adjustable length and comfortable handles.", "imageUrl": ["assets/JumpRope.jpg"], "discountPrecent": 10, "returnable": true, "color": ["red"], "size": ["XS"], "freeShipping": false, "shippingPrice": 0, "isFav": false, "brand": "Nike", "material": "Rubber", "productionCountry": "Egypt"},
      {"id": 15, "name": "Door Gym Bar", "categoryId": 4, "price": 50, "quantity": 50, "description": "Easy-to-install bar for bodyweight exercises like pull-ups and push-ups, fitting most doorways.", "imageUrl": ["assets/DoorGymBar.webp"], "discountPrecent": 30, "returnable": true, "freeShipping": false, "shippingPrice": 0, "isFav": false, "brand": "Nike", "material": "Metal", "productionCountry": "Egypt"}
    ]
  }

  getProducts() : IProduct[] {
    return this.prods;
  }

  getProductsBycategord(catId: number) : IProduct[] | undefined {
    return this.prods.filter((prod)=> prod.categoryId == catId)
  }

  getProductById(id: number) : IProduct | undefined{
    return this.prods.find((prod)=> prod.id == id)
  }
/*
  getProducts(sortOption: string, filters: any): Observable<IProduct[]> {
    let query = `?`;

    // Adding sorting
    if (sortOption) {
      query += `_sort=${this.getSortField(sortOption)}&_order=${this.getSortOrder(sortOption)}&`;
    }

    // Adding filters
    if (filters) {
      if (filters.minPrice) query += `price_gte=${filters.minPrice}&`;
      if (filters.maxPrice) query += `price_lte=${filters.maxPrice}&`;
      if (filters.freeShipping) query += `freeShipping=true&`;
      if (filters.discount) query += `discount=true&`;
    }

    return this.httpClient.get<IProduct[]>(`${this.apiUrl}/products${query}`);
  }

  getSortField(sortOption: string): string {
    switch (sortOption) {
      case 'price-asc':
        return 'price';
      case 'price-desc':
        return 'price';
      case 'rating':
        return 'ratings';
      case 'newest':
        return 'id';
      default:
        return 'price';
    }
  }

  getSortOrder(sortOption: string): string {
    return sortOption.includes('desc') ? 'desc' : 'asc';
  }

  getProductsBycategord(categoryd: number, sort: string = 'price-asc', filters: any = {}): Observable<IProduct[]> {
    let params = new HttpParams().set('categoryd', categoryd.toString());

    // Same sorting and filtering logic as `getProducts` method

    if (sort === 'price-asc') {
      params = params.set('_sort', 'price').set('_order', 'asc');
    } else if (sort === 'price-desc') {
      params = params.set('_sort', 'price').set('_order', 'desc');
    } else if (sort === 'rating') {
      params = params.set('_sort', 'ratings').set('_order', 'desc');
    } else if (sort === 'newest') {
      params = params.set('_sort', 'id').set('_order', 'desc');
    }

    if (filters.minPrice !== undefined) {
      params = params.set('price_gte', filters.minPrice.toString());
    }
    if (filters.maxPrice !== undefined) {
      params = params.set('price_lte', filters.maxPrice.toString());
    }
    if (filters.freeShipping) {
      params = params.set('shipping', 'free');
    }
    if (filters.discount) {
      params = params.set('discount', 'true');
    }

    return this.httpClient.get<IProduct[]>(`${this.apiUrl}/products`, { params });
  }

  getMinPriceSortedProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(`${this.apiUrl}/products?_sort=price&_order=asc`);
  }

  getMaxPriceSortedProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(`${this.apiUrl}/products?_sort=price&_order=desc`);
  }

  getNewestSortedProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(`${this.apiUrl}/products?_sort=id&_order=desc`);
  }

  getRatingSortedProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(`${this.apiUrl}/products?_sort=ratings&_order=desc`);
  }

  updateProduct(id: number, prod: IProduct) {
    return this.httpClient.put<IProduct>(`${this.apiUrl}/products/${id}`, prod);
  }
*/

  convertListTo2DList(prodsList: IProduct[], size: number): IProduct[][] {
    const rows: IProduct[][] = [];
    for (let i = 0; i < prodsList.length; i += size) {
      rows.push(prodsList.slice(i, i + 4));
    }
    return rows;
  }

}
