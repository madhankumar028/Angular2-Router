import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ContactListService } from 'app/contact/contact-list/contact-list-service';

@Component({
    selector: 'app-contact-list',
    templateUrl: 'app/contact/contact-list/contact.list.component.html'
})

export class ContactListComponent implements OnInit {

    constructor(private http: Http) {}

    contacts = [
        // {firstName: 'John', lastName: 'Doe'},
        // {firstName: 'Anna', lastName: 'Smith'},
        // {firstName: 'Peter', lastName: 'Jones'}
    ];

    contact: any;
    
    ngOnInit() {
        this.http.get('http://apitodo.herokuapp.com/api/todos')
            .subscribe(data => {
                console.log(data);
                console.log(this.contact = data.json().todo);
            });
        this.contacts.push(this.contact);
    }
}
