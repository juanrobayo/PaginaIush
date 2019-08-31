import { TestBed } from '@angular/core/testing';

import { TarjetaProyectoService } from './tarjeta-proyecto.service';

describe('TarjetaProyectoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TarjetaProyectoService = TestBed.get(TarjetaProyectoService);
    expect(service).toBeTruthy();
  });
});
