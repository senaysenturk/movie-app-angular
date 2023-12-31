import { Component } from '@angular/core';
import { Category } from '../models/category';
import { CategoryRepository } from '../models/category.repository';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent {
  categories: Category[];
  selectedCategory: number | null = null;
  categoryRespository: CategoryRepository;
  constructor() {
    this.categoryRespository = new CategoryRepository();
    this.categories = this.categoryRespository.getCategory();
  }

  setSelectedCategory($event: MouseEvent, categoryId: number) {
    // $event.preventDefault();
    this.selectedCategory = categoryId;

    return this.selectedCategory;
  }
}
