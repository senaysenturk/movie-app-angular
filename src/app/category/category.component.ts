import { Component } from '@angular/core';
import { Category } from '../models/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent {
  categories: Category[] = [
    { id: 1, name: 'Macera' },
    { id: 2, name: 'Romantik' },
    { id: 3, name: 'Bilim Kurgu' },
    { id: 4, name: 'Fantastik' },
  ];
}
