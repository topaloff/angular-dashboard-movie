import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {throwError as observableThrowError,  Observable } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { Country } from '../model/Country';
import { ErrorService } from './error.service';

import { environment as env } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient, private errorService: ErrorService) { }

  // ** Get country
  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(env.apiUrl + 'countries')
    .pipe(
      tap(data => data),
      catchError(this.errorService.handleError('getCountries', []))
    );
  }
}
