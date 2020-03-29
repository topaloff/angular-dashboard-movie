import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {throwError as observableThrowError,  Observable } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { Actor } from '../model/Actor';
import { ErrorService } from './error.service';

import { environment as env } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  constructor(private http: HttpClient, private errorService: ErrorService) { }

  // ** Get Actors
  getActors(): Observable<Actor[]> {
    return this.http.get<Actor[]>(env.apiUrl + 'actors')
    .pipe(
      tap(data => data),
      catchError(this.errorService.handleError('getActors', []))
    );
  }

  // ** Get Actor
  getActorDetail(id: number): Observable<Actor> {
    return this.http.get<any>(env.apiUrl + 'actors/' + id)
    .pipe(
      tap(data => data),
      catchError(this.errorService.handleError('getActor'))
    );
  }

  // POST :  Add a actor
  addActor(actor): Observable<Actor> {
    return this.http.post<Actor>(env.apiUrl + 'actors/add', actor, {responseType: 'json'})
    .pipe(
      tap((data: Actor) => console.log(data)),
      catchError(this.errorService.handleError<Actor>('addActor'))
      );
  }

  // PUT :  Edit a actor
  editActor(actor, id: number): Observable<Actor> {
    return this.http.put<Actor>(env.apiUrl + 'actors/edit/' + id, actor, {responseType: 'json'})
    .pipe(
      tap((data: Actor) => console.log(data)),
      catchError(this.errorService.handleError<Actor>('deleteActor'))
      );
  }

      /** DELETE: delete one actor */
      deleteActor(id: string): Observable<Actor> {
        const url = env.apiUrl + 'actors/delete/' + id;
        return this.http.delete<any>(url)
          .pipe(
            tap(data => data),
            catchError(this.errorService.handleError('deleteActor'))
          );
      }
}
