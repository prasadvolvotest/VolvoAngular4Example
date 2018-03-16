import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class HttpErrorHandler {
  constructor() {}
  handleError(error: Response| any) {
    let errMsg = '';
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    // this.messagesService.pushMessage(MessageType.Error,
    //   "Opps! Your last operation could not completed due to some error. Please retry after some time.", true);
    return Observable.throw(errMsg);
  }
}
