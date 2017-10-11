import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {AppError} from '../common/app-error';
import {NotFoundError} from '../common/not-found-error';
import {BadInput} from '../common/bad-input';

@Injectable()
export class DataService {

  constructor(private url: string, private http: Http) { }

  //methods
  public getAll(): Observable<any>
  {
    return this.http.get(this.url)
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  private handleError(error: Response): Observable<any>
  {
    if (error.status === 400)
      return Observable.throw(new BadInput(error.json()));

    if (error.status === 404)
      return Observable.throw(new NotFoundError());

    return Observable.throw(new AppError(error));
  }

}
