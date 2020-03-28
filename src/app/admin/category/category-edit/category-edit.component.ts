import { Component, OnInit } from '@angular/core';

import { CategoryService } from 'src/app/shared/service/category.service';
import { Router, ActivatedRoute } from '@angular/router';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Category } from 'src/app/shared/model/Category';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {

  category;
  id: number;

  categoryForm: FormGroup;

  constructor(private categoryService: CategoryService, private router: Router, private route: ActivatedRoute, private http: HttpClient) { 
    this.route.params
    .subscribe(params => this.id = params.id);
  }

  ngOnInit(): void {
    this.getCategoryDetail(this.id);
    this.categoryForm = new FormGroup({
      name: new FormControl()
    });
  }

  // Get the category
  getCategoryDetail(id: number) {
    this.categoryService.getCategoryDetail(id)
    .subscribe( data => {
      this.categoryForm.patchValue({
            name: data.name
          });
      });
  }

  onSubmit() {
    this.categoryService.editCategory(this.categoryForm.value, this.id)
        .subscribe(category => {
          this.router.navigate(['/admin/category']);
        });
    }

}
