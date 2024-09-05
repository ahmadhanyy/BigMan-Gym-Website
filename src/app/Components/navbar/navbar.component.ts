import { Component } from '@angular/core';
import { CategoryService } from '../../Services/category.service';
import { ICategory } from '../../Interfaces/icategory';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  categories: ICategory[] = [];

  constructor(private catService: CategoryService) {
    this.categories = this.catService.getCategories();
  }
}
