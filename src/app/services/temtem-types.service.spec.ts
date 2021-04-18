import { TestBed } from '@angular/core/testing';

import { TemtemTypesService } from './temtem-types.service';

describe('TemtemTypesService', () => {
  let service: TemtemTypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemtemTypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
