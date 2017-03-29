import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EmailService {

  private APIKey = 'specifyAnAPIKeyHere';
  private URI = 'http://localhost:7000';

  constructor(public http: Http) {}

  /**
   * Emails List
   *
   * @param page
   * @param limit
   * @returns {Observable<Response>}
   */
  getEmailList(page: number, limit: number): Observable<{}> {
    return this.http.get(`${this.URI}/Emails?_page=${page}&_limit=${limit}`, {
      headers: new Headers({
        'Accept': 'application/json'
      })
    })
  }

}
