import { TestBed } from '@angular/core/testing';

import { IntegrantessemilleroService } from './integrantessemillero.service';

describe('IntegrantessemilleroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IntegrantessemilleroService = TestBed.get(IntegrantessemilleroService);
    expect(service).toBeTruthy();
  });
});
