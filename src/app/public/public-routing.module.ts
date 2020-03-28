import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { ActorListComponent } from './actor/actor-list/actor-list.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { MovieListComponent } from './movie/movie-list/movie-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

const publicRoutes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'movie', component: MovieListComponent },
    { path: 'category', component: CategoryListComponent },
    { path: 'actor', component: ActorListComponent },
    { path: 'login', component: LoginComponent }
];

@NgModule({
    imports: [RouterModule.forChild(publicRoutes)],
    exports: [RouterModule]
})
export class PublicRoutingModule { }
