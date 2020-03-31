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
  file: File;
  avatar: string;

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

  // Get the movie
  getMovieDetail(id: number) {
    this.movieService.getMovieDetail(id)
    .subscribe( data => {
      console.log(data);
      this.movieForm.patchValue({
            title: data.title,
            description: data.description,
            year: data.year,
            note: data.note,
            CategoryId: data.CategoryId
      });
      this.avatar = data.picture;
    });
  }
  getCategories(){
    this.categoryService.getCategories()
    .subscribe(data => this.categories = data);
  }

  onFileChanged(event) {
    this.file = event.target.files[0];
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
    this.movieService.editMovie(formData, this.id)
        .subscribe(movie => {
          this.router.navigate(['/admin/movie']);
        });
    }

}
