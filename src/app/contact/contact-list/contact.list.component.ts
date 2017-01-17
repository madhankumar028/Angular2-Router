import { Component, OnInit } from '@angular/core';
import { ContactListService } from 'app/contact/contact-list/contact-list-service';

@Component({
    selector: 'app-contact-list',
    templateUrl: 'app/contact/contact-list/contact.list.component.html',
    providers: [
        ContactListService
    ]
})

export class ContactListComponent implements OnInit {

    constructor(private contactListService: ContactListService) {}

    contacts: any;
    
    ngOnInit() {
        this.contactListService.getContacts()
            .subscribe(data => {
                this.contacts = data.json();
                console.log(this.contacts);
            });
    }
}
