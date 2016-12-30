/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ContactDetailsServiceService } from 'app/contact/contact-details/contact-details-service.service';

describe('ContactDetailsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactDetailsServiceService]
    });
  });

  it('should ...', inject([ContactDetailsServiceService], (service: ContactDetailsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
