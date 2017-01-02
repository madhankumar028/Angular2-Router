import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ContactListService {

  constructor(private http: Http) {}

  baseUrl = 'http://apitodo.herokuapp.com/api/todos';

  getContacts() {
    return this.http.get(this.baseUrl);
  }
}
