import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {DataService} from './data.service';

@Injectable()
export class FollowService extends DataService{

  constructor(http: Http) {
    super('http://api.github.com/users/mosh-hamedani/followers', http);
  }

}
