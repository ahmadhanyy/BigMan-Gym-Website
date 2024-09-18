import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  viewMode: 'grid' | 'list' = 'grid'; // Grid view is the default
  currentSort: string = 'price-asc';
  currentFilters: any = {};

  setViewMode(mode: 'grid' | 'list') {
    this.viewMode = mode;
  }

  onSortChange(sortOption: string): void {
    this.currentSort = sortOption;
  }

  onFilterChange(filters: any): void {
    this.currentFilters = filters;
  }
}
