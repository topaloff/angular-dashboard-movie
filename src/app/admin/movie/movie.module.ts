import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminMovieAddComponent } from './admin-movie-add/admin-movie-add.component';
import { AddActorComponent } from './add-actor/add-actor.component';



@NgModule({
  declarations: [AdminMovieAddComponent, AddActorComponent],
  imports: [
    CommonModule
  ]
})
export class MovieModule { }
