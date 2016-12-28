import { Component } from '@angular/core';

@Component({
    selector: 'app-contact-list',
    templateUrl: 'app/contact/contact.list.component.html'
})

export class ContactListComponent {

    contacts = [
        {firstName: 'John', lastName: 'Doe'},
        {firstName: 'Anna', lastName: 'Smith'},
        {firstName: 'Peter', lastName: 'Jones'}
    ];
}
