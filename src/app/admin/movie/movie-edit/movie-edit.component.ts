import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/shared/service/movie.service';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/shared/model/Category';
import { CategoryService } from 'src/app/shared/service/category.service';


@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {

  categories: Category[];
  id: number;

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
    private route: ActivatedRoute,
    private router: Router
  ) { 
    this.route.params
    .subscribe(params => this.id = params.id);
  }

  ngOnInit(): void {
    this.getCategories();
    this.getMovieDetail(this.id)
  }

  // Get the actor
  getMovieDetail(id: number) {
    this.movieService.getMovieDetail(id)
    .subscribe( data => {
      console.log(data);
      this.movieForm.patchValue({
            title: data.title,
            description: data.description,
            picture: data.picture,
            year: data.year,
            note: data.note,
            CategoryId: data.CategoryId
      });
    });
  }
  getCategories(){
    this.categoryService.getCategories()
    .subscribe(data => this.categories = data);
  }


  onSubmit() {
    this.movieService.editMovie(this.movieForm.value, this.id)
        .subscribe(movie => {
          this.router.navigate(['/admin/movie']);
        });
    }

}
