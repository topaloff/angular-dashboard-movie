import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/shared/service/category.service';
import { SingleDataSet} from 'ng2-charts';

@Component({
  selector: 'app-chart-category',
  templateUrl: './chart-category.component.html',
  styleUrls: ['./chart-category.component.css']
})
export class ChartCategoryComponent implements OnInit {

  public barChartLabels: string[] = [];
  public barChartData: SingleDataSet[] = [];
  public barChartType = 'horizontalBar';
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
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getCount();
  }

  getCount() {
    this.categoryService.getCount()
    .subscribe(data => {
      this.barChartLabels = data.map(movie => movie.data);
      this.barChartData = data.map(movie => movie.value);
    });
  }

}
