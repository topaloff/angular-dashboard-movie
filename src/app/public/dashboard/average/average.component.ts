import { MovieService } from 'src/app/shared/service/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-average',
  templateUrl: './average.component.html',
  styleUrls: ['./average.component.css']
})
export class AverageComponent implements OnInit {

  average: number;
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieAverage();
  }

  movieAverage() {
    this.movieService.movieAverage()
    .subscribe(data => this.average = data[0].value);
  }
}
