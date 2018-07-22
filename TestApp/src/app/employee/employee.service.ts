import { Injectable } from '@angular/core';
import { Http, Response,Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
@Injectable()
export class EmployeeService {
    //httpi:Http;
  constructor (private http: Http  ) {
      //this.httpi = http;
  }

  getEmployee(): Observable<any> {
    return this.http.get("https://arcane-refuge-65794.herokuapp.com/employee").pipe(map(res => res));

  }


}