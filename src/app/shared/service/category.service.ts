import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {throwError as observableThrowError,  Observable } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { Category } from '../model/Category';
import { ErrorService } from './error.service';

import { environment as env } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient, private errorService: ErrorService) { }

  // ** Get Categories
  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(env.apiUrl + 'categories')
    .pipe(
      tap(data => data),
      catchError(this.errorService.handleError('getCategories', []))
    );
  }

  // ** Get Categories Count
  getCount(): Observable<any[]> {
    return this.http.get<any[]>(env.apiUrl + 'categories/count')
    .pipe(
      tap(data => data),
      catchError(this.errorService.handleError('getCategories', []))
    );
  }

  // ** Get Category
  getCategoryDetail(id: number): Observable<Category> {
    return this.http.get<any>(env.apiUrl + 'categories/' + id)
    .pipe(
      tap(data => data),
      catchError(this.errorService.handleError('getCategory'))
    );
  }

  // POST :  Add a category
  addCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(env.apiUrl + 'categories/add', category, {responseType: 'json'})
    .pipe(
      tap((data: Category) => console.log(data)),
      catchError(this.errorService.handleError<Category>('addCategory'))
      );
  }

  // PUT :  Edit a category
  editCategory(category: Category, id: number): Observable<Category> {
    return this.http.put<Category>(env.apiUrl + 'categories/edit/' + id, category, {responseType: 'json'})
    .pipe(
      tap((data: Category) => console.log(data)),
      catchError(this.errorService.handleError<Category>('deleteCategory'))
      );
  }

      /** DELETE: delete one category */
      deleteCategory(id: string): Observable<Category> {
        const url = env.apiUrl + 'categories/delete/' + id;
        return this.http.delete<any>(url)
          .pipe(
            tap(data => data),
            catchError(this.errorService.handleError('deleteCategory'))
          );
      }
}
