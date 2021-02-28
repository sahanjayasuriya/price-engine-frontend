import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(protected httpClient: HttpClient) {
  }

  public get(url: string): Observable<any> {
    return this.httpClient.get(url);
  }

  public post(url: string, data: any): Observable<any> {
    return this.httpClient.post(url, data)
      .pipe(
        catchError(this.handleError)
      );
  }

  public put(url: string, data: any): Observable<any> {
    return this.httpClient.put(url, data)
      .pipe(
        catchError(this.handleError)
      );
  }

  public delete(url: string): Observable<any> {
    return this.httpClient.delete(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error) {
    console.log(error);
    return throwError(error);
  }
}
