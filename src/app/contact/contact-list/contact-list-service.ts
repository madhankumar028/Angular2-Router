import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ContactListServiceService {

  constructor(private http: Http) {}

  baseUrl = 'http://apitodo.herokuapp.com/api/todos';

  getContacts() {
    this.http.get(this.baseUrl);
  }
}
