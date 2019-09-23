import { TestBed } from '@angular/core/testing';

import { InformaciomService } from './informaciom.service';

describe('InformaciomService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InformaciomService = TestBed.get(InformaciomService);
    expect(service).toBeTruthy();
  });
});
