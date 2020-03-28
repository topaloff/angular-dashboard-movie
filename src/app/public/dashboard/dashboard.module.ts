import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { ChartMovieComponent } from './chart-movie/chart-movie.component';
import { ChartBalanceComponent } from './chart-balance/chart-balance.component';
import { MovieBestComponent } from './movie-best/movie-best.component';
import { ActorBestComponent } from './actor-best/actor-best.component';
import { ActressBestComponent } from './actress-best/actress-best.component';
import { ChartCategoryComponent } from './chart-category/chart-category.component';
import { AverageComponent } from './average/average.component';



@NgModule({
  declarations: [DashboardComponent, ChartMovieComponent, ChartBalanceComponent, MovieBestComponent, ActorBestComponent, ActressBestComponent, ChartCategoryComponent, AverageComponent],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
