import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/shared/model/Movie';
import { MovieService } from 'src/app/shared/service/movie.service';

@Component({
  selector: 'app-movie-best',
  templateUrl: './movie-best.component.html',
  styleUrls: ['./movie-best.component.css']
})
export class MovieBestComponent implements OnInit {

  movies: Movie[];
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(){
    this.movieService.getBestMovies()
    .subscribe(data => this.movies = data);
  }

}
