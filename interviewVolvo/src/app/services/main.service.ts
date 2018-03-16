import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MainService {
  myId: any;
  constructor(
    private router: Router,

  ) { }
   
  navigateToViewDetails(id) {
    this.myId = id;
    this.router.navigate(['/view/'+this.myId]);
  }
}
