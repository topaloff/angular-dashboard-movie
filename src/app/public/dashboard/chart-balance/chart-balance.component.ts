import { Component, OnInit } from '@angular/core';
import { ActorService } from 'src/app/shared/service/actor.service';
import { SingleDataSet} from 'ng2-charts';


@Component({
  selector: 'app-chart-balance',
  templateUrl: './chart-balance.component.html',
  styleUrls: ['./chart-balance.component.css']
})

export class ChartBalanceComponent implements OnInit {

  public doughnutChartLabels:string[]=[];
  public doughnutChartData:SingleDataSet[]=[];
  public doughnutChartType = 'doughnut';
  // public doughnutChartLabels = [];
  // public doughnutChartData = [];

  constructor(private actorService: ActorService) { }

  ngOnInit(): void {
    this.getBalance();
  }

  getBalance(){
    this.actorService.getBalance()
    .subscribe(data => {
      this.doughnutChartLabels = data.map(gender => gender.data);
      this.doughnutChartData = data.map(gender => gender.value);
    });
  }

}

