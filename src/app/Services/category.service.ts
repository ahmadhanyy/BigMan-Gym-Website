import { Injectable } from '@angular/core';
import { ICategory } from '../Interfaces/icategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories : ICategory[] = [{"id":1,"name":"Machines"},
                              {"id":2,"name":"Cardio Machines"},
                              {"id":3,"name":"Barbells & Dumbbells"},
                              {"id":4,"name":"Free Weights"},
                              {"id":5,"name":"Home Equipments"},
                              {"id":6,"name":"Supplements"},
                              {"id":7,"name":"Clothes"}];

  constructor() { }
  getCategories(): ICategory[] {
    return this.categories;
  }

}
