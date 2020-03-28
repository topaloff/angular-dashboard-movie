import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../shared/service/category.service';
import { Category } from '../../../shared/model/Category';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories: Category[];
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    this.categoryService.getCategories()
    .subscribe(data => this.categories = data);
  }

  deleteCategory(id) {
    this.categoryService.deleteCategory(id).subscribe();
    this.categories = this.categories.filter(element => element.id !== id);
  }
}

