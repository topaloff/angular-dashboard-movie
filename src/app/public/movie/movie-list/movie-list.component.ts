import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/shared/service/movie.service';
import { Movie } from 'src/app/shared/model/Movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies: Movie[];
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(){
    this.movieService.getMovies()
    .subscribe(data => this.movies = data);
  }

}
