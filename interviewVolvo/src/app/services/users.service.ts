import { HttpErrorHandler } from './../commons/error-handler';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/Rx';

@Injectable()
export class UserService {

  constructor(private http: Http, private error: HttpErrorHandler) { }

  getAllUsers () {
    const url = 'assets/users.json';
    return this.http.get(url).map(resp => {
      if (resp.status === 200) {
        console.log(resp.json());
        return resp.json();
      }
    }).catch(err => this.error.handleError(err));
  }

}
