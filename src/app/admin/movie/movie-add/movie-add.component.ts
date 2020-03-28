import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/shared/service/movie.service';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/shared/model/Category';
import { CategoryService } from 'src/app/shared/service/category.service';

@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.css']
})
export class MovieAddComponent implements OnInit {

  categories: Category[];

  movieForm = new FormGroup({
    title: new FormControl(),
    description: new FormControl(),
    picture: new FormControl(),
    year: new FormControl(),
    note: new FormControl(),
    CategoryId: new FormControl()
  });

  constructor(
    private movieService: MovieService,
    private categoryService: CategoryService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getCategories()
  }

  getCategories(){
    this.categoryService.getCategories()
    .subscribe(data => this.categories = data);
  }


  onSubmit() {
    this.movieService.addMovie(this.movieForm.value)
        .subscribe(movie => {
          this.router.navigate(['/admin/movie']);
        });
    }
}