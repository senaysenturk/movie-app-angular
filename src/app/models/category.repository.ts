import { Category } from './category';

export class CategoryRepository {
  private categories: Category[];
  constructor() {
    this.categories = [
      { id: 1, name: 'All Categories' },
      { id: 2, name: 'Adventure' },
      { id: 3, name: 'Romance' },
      { id: 4, name: 'Science Fiction' },
      { id: 5, name: 'Fantastic' },
    ];
  }
  getCategory(): Category[] {
    return this.categories;
  }
}
