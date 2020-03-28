import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {throwError as observableThrowError,  Observable } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { Gender } from '../model/Gender';
import { ErrorService } from './error.service';

import { environment as env } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GenderService {

  constructor(private http: HttpClient, private errorService: ErrorService) { }

  // ** Get genders
  getGenders(): Observable<Gender[]> {
    return this.http.get<Gender[]>(env.apiUrl + 'genders')
    .pipe(
      tap(data => data),
      catchError(this.errorService.handleError('getGenders', []))
    );
  }
}
