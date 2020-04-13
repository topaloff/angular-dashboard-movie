import { MovieService } from './../../../shared/service/movie.service';
import { Component, OnInit } from '@angular/core';
import { SingleDataSet} from 'ng2-charts';

@Component({
  selector: 'app-chart-movie',
  templateUrl: './chart-movie.component.html',
  styleUrls: ['./chart-movie.component.css']
})
export class ChartMovieComponent implements OnInit {

  public barChartLabels: string[] = [];
  public barChartData: SingleDataSet[] = [];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartOption = {
    responsive: true,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  }
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getYears();
  }

  getYears() {
    this.movieService.getYears()
    .subscribe(data => {
      this.barChartLabels = data.map(movie => movie.data);
      this.barChartData = data.map(movie => movie.value);
    });
  }

}