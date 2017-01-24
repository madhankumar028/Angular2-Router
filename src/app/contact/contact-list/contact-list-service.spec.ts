/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ContactListService } from 'app/contact/contact-list/contact-list-service';

describe('ContactListServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactListService]
    });
  });

  it('should ...', inject([ContactListService], (service: ContactListService) => {
    expect(service).toBeTruthy();
  }));
});
