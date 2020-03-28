import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieListComponent } from './movie/movie-list/movie-list.component';
import { MovieDetailComponent } from './movie/movie-detail/movie-detail.component';
import { ActorListComponent } from './actor/actor-list/actor-list.component';
import { ActorDetailComponent } from './actor/actor-detail/actor-detail.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { CategoryDetailComponent } from './category/category-detail/category-detail.component';
import { PublicRoutingModule } from './public-routing.module';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    MovieListComponent,
    MovieDetailComponent,
    ActorListComponent,
    ActorDetailComponent,
    CategoryListComponent,
    CategoryDetailComponent,
    LoginComponent
  ],
  imports: [
    PublicRoutingModule,
    SharedModule,
    CommonModule,
    ]
})
export class PublicModule { }
