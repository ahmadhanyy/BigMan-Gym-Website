import { Component, OnInit } from '@angular/core';
import { ICategory } from '../../Interfaces/icategory';
import { CategoryService } from '../../Services/category.service';

@Component({
  selector: 'app-categories-button',
  templateUrl: './categories-button.component.html',
  styleUrl: './categories-button.component.scss'
})
export class CategoriesButtonComponent {
  categories: ICategory[] = [];

  constructor(private catService: CategoryService) {
    //this.catService.getCategories().subscribe((data) => {
    //  this.categories = data;
    //});
    this.categories = this.catService.getCategories();
  }

}
