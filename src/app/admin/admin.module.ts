import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { MovieListComponent } from './movie/movie-list/movie-list.component';
import { MovieAddComponent } from './movie/movie-add/movie-add.component';
import { MovieEditComponent } from './movie/movie-edit/movie-edit.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { CategoryAddComponent } from './category/category-add/category-add.component';
import { CategoryEditComponent } from './category/category-edit/category-edit.component';
import { GenderListComponent } from './gender/gender-list/gender-list.component';
import { GenderAddComponent } from './gender/gender-add/gender-add.component';
import { GenderEditComponent } from './gender/gender-edit/gender-edit.component';
import { ActorListComponent } from './actor/actor-list/actor-list.component';
import { ActorAddComponent } from './actor/actor-add/actor-add.component';
import { ActorEditComponent } from './actor/actor-edit/actor-edit.component';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    MovieListComponent,
    MovieAddComponent,
    MovieEditComponent,
    CategoryListComponent,
    CategoryAddComponent,
    CategoryEditComponent,
    GenderListComponent,
    GenderAddComponent,
    GenderEditComponent,
    ActorListComponent,
    ActorAddComponent,
    ActorEditComponent],
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule
  ],
  exports: [],
  providers: [DatePipe]
})
export class AdminModule { }
