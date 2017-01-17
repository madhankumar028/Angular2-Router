import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ContactListService {

  constructor(private http: Http) {}

  baseUrl = 'http://localhost:3000/contacts';

  getContacts() {
    return this.http.get(this.baseUrl);
  }
}
