import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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
  file: File;

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
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getCategories()
  }

  getCategories(){
    this.categoryService.getCategories()
    .subscribe(data => this.categories = data);
  }


  onFileChanged(event) {
    this.file = event.target.files[0]
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('title', this.movieForm.get('title').value);
    formData.append('description', this.movieForm.get('description').value);
    formData.append('year', this.movieForm.get('year').value);
    formData.append('note', this.movieForm.get('note').value);
    formData.append('CategoryId', this.movieForm.get('CategoryId').value);

    if(this.file != undefined)
    {
      formData.append('picture', this.file, this.file.name);
    }

    this.movieService.addMovie(formData)
        .subscribe(movie => {
          this.router.navigate(['/admin/movie']);
        });
    }
}