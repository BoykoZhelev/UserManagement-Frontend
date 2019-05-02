import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';



const endpoint = 'http://localhost:8081/persons';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RestService {
  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getPersons(): Observable<any> {
    return this.http.get(endpoint + '/all').pipe(
      map(this.extractData));
  }

  getPerson(id): Observable<any> {
    return this.http.get(endpoint + '/find/' + id).pipe(
      map(this.extractData));
  }

  updatePerson(id, product): Observable<any> {
    return this.http.put(endpoint + '/update/' + id, JSON.stringify(product), httpOptions).pipe(
      tap(_ => console.log(`updated person id=${id}`)),
      catchError(this.handleError<any>('updatePerson'))
    );
  }

  addPerson (person): Observable<any> {
    console.log(person);
    return this.http.post<any>(endpoint + '/create', JSON.stringify(person), httpOptions).pipe(
      tap((pers) => console.log(`added person w/ id=${pers.id}`)),
      catchError(this.handleError<any>('addPerson'))
    );
  }

  deletePerson(id) {
    return this.http.delete<any>(endpoint + '/delete/' + id , httpOptions).pipe(
      tap(_ => console.log('deleted person id =${id}')), catchError(this.handleError<any>('deletePerson')));
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}


