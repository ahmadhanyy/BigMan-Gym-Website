import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-products-sidebar',
  templateUrl: './products-sidebar.component.html',
  styleUrls: ['./products-sidebar.component.scss']
})
export class ProductsSidebarComponent {
  @Input() viewMode: 'grid' | 'list' = 'grid';
  @Output() viewModeChange = new EventEmitter<'grid' | 'list'>();
  @Output() sortChange = new EventEmitter<string>();
  @Output() filterChange = new EventEmitter<{ minPrice: number, maxPrice: number, freeShipping: boolean, discount: boolean }>();

  sortOption: string = 'price-asc';
  minPrice: number = 0;
  maxPrice: number = 1000000;
  freeShipping: boolean = false;
  discount: boolean = false;

  changeViewMode(mode: 'grid' | 'list') {
    this.viewModeChange.emit(mode);
  }

  changeSort() {
    this.sortChange.emit(this.sortOption);
  }

  applyFilters() {
    this.filterChange.emit({
      minPrice: this.minPrice,
      maxPrice: this.maxPrice,
      freeShipping: this.freeShipping,
      discount: this.discount
    });
  }
}
