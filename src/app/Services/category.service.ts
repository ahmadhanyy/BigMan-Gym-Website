import { Injectable } from '@angular/core';
import { ICategory } from '../Interfaces/icategory';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = 'http://localhost:3000'
  categories: ICategory[] = []

  constructor(private httpClient: HttpClient) {
    this.categories = [
      {"id":1,"name":"Machines"},
      {"id":2,"name":"Cardio Machines"},
      {"id":3,"name":"Barbells & Dumbbells"},
      {"id":4,"name":"Free Weights"},
      {"id":5,"name":"Home Equipments"},
      {"id":6,"name":"Supplements"},
      {"id":7,"name":"Clothes"}
    ]
  }

  getCategories(): ICategory[] {//Observable<ICategory[]> {
    //return this.httpClient.get<ICategory[]>(`${this.apiUrl}/categories`);
    return this.categories;
  }

}
