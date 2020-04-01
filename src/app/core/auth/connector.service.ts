import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment as env } from '../../../environments/environment';
import { map, tap, catchError } from 'rxjs/operators';
import { ErrorService } from '../../shared/service/error.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ConnectorService {

  private _connected: Subject<boolean> = new Subject<boolean>();
  public connectedObs = this._connected.asObservable();

  constructor(private http: HttpClient, private errorService: ErrorService, private router: Router) {
    this.isLoggedIn();
  }


  public login(params): Observable<T> {
    return this.http.post(
      env.apiUrl + 'users/login', params,{responseType: 'json'}
    )
    .pipe(
      tap(data => {
        if (data.token != null || data.token != undefined) {
                this._connected.next(true);
        }

      }),
      catchError(this.errorService.handleError('getActors', []))
    );
  }

  public postRequest(url, params): Observable<any> {
    return this.http.post(
      url,
      {
        params: params
      }
    );
  }

  public isLoggedIn() {
    if (localStorage.getItem('auth')) {
      this._connected.next(true);
      return true;
    }
    this._connected.next(false);
    return false;
  }

  public logout(){
    localStorage.removeItem('auth');
    this._connected.next(false);
    this.router.navigate(['/public/dashboard']);
  }

}