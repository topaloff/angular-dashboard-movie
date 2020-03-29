import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {throwError as observableThrowError,  Observable } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { Movie } from '../model/Movie';
import { ErrorService } from './error.service';

import { environment as env } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient, private errorService: ErrorService) { }

  // ** Get Movies
  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(env.apiUrl + 'movies')
    .pipe(
      tap(data => data),
      catchError(this.errorService.handleError('getMovies', []))
    );
  }

   // ** Get Movie
   getMovieDetail(id: number): Observable<Movie> {
    return this.http.get<any>(env.apiUrl + 'movies/' + id)
    .pipe(
      tap(data => data),
      catchError(this.errorService.handleError('getMovie'))
    );
  }

  // POST :  Add a movie
  addMovie(movie): Observable<Movie> {
    return this.http.post<Movie>(env.apiUrl + 'movies/add', movie, {responseType: 'json'})
    .pipe(
      tap((data: Movie) => console.log(data)),
      catchError(this.errorService.handleError<Movie>('addMovie'))
      );
  }

  // PUT :  Edit a movie
  editMovie(movie, id: number): Observable<Movie> {
    return this.http.put<Movie>(env.apiUrl + 'movies/edit/' + id, movie, {responseType: 'json'})
    .pipe(
      tap((data: Movie) => console.log(data)),
      catchError(this.errorService.handleError<Movie>('deleteMovie'))
      );
  }

      /** DELETE: delete one movie */
      deleteMovie(id: string): Observable<Movie> {
        const url = env.apiUrl + 'movies/delete/' + id;
        return this.http.delete<any>(url)
          .pipe(
            tap(data => data),
            catchError(this.errorService.handleError('deleteMovie'))
          );
      }



}
