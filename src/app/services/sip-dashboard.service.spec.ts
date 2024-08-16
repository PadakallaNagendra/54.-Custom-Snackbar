import { TestBed } from '@angular/core/testing';

import { SipDashboardService } from './sip-dashboard.service';

describe('SipDashboardService', () => {
  let service: SipDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SipDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
