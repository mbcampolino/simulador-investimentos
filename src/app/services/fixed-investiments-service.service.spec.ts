import { TestBed } from '@angular/core/testing';

import { FixedInvestimentsServiceService } from './fixed-investiments-service.service';

describe('FixedInvestimentsServiceService', () => {
  let service: FixedInvestimentsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FixedInvestimentsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
