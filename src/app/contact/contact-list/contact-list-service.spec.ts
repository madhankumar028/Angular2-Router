/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ContactListServiceService } from 'app/contact/contact-list/contact-list-service';

describe('ContactListServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactListServiceService]
    });
  });

  it('should ...', inject([ContactListServiceService], (service: ContactListServiceService) => {
    expect(service).toBeTruthy();
  }));
});
