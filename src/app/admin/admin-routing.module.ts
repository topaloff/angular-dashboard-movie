import { CategoryEditComponent } from './category/category-edit/category-edit.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActorListComponent as AdminActorList} from './actor/actor-list/actor-list.component';
import { CategoryListComponent as AdminCategoryList } from './category/category-list/category-list.component';
import { MovieListComponent as AdminMovieList } from './movie/movie-list/movie-list.component';
import { CategoryAddComponent } from './category/category-add/category-add.component';
import { MovieAddComponent } from './movie/movie-add/movie-add.component';
import { ActorAddComponent } from './actor/actor-add/actor-add.component';
import { ActorEditComponent } from './actor/actor-edit/actor-edit.component';
import { MovieEditComponent } from './movie/movie-edit/movie-edit.component';
import { AddActorComponent } from './movie/add-actor/add-actor.component';

const adminRoutes: Routes = [
    { path: 'actor', component: AdminActorList },
    { path: 'actor/add', component: ActorAddComponent },
    { path: 'actor/edit/:id', component: ActorEditComponent },
    { path: 'category', component: AdminCategoryList },
    { path: 'category/add', component: CategoryAddComponent },
    { path: 'category/edit/:id', component: CategoryEditComponent },
    { path: 'movie', component: AdminMovieList },
    { path: 'movie/add/actor/:id', component: AddActorComponent },
    { path: 'movie/add', component: MovieAddComponent },
    { path: 'movie/edit/:id', component: MovieEditComponent },
];

@NgModule({
    imports: [RouterModule.forChild(adminRoutes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
