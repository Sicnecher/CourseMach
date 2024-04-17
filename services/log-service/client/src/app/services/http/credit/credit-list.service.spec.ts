import { TestBed } from '@angular/core/testing';

import { CreditListService } from './credit-list.service';

describe('CreditListService', () => {
  let service: CreditListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreditListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
