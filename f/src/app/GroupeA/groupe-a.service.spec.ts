import { TestBed } from '@angular/core/testing';

import { GroupeAService } from './groupe-a.service';

describe('GroupeAService', () => {
  let service: GroupeAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupeAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
