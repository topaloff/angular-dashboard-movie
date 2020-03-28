import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/shared/service/category.service';
import { Router } from '@angular/router';

import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {

  categoryForm = new FormGroup({
    name: new FormControl()
  });

  constructor(private categoryService: CategoryService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.categoryService.addCategory(this.categoryForm.value)
        .subscribe(category => {
          this.router.navigate(['/admin/category']);
        });
    }
}
