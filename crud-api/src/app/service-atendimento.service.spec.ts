import { TestBed } from '@angular/core/testing';

import { ServiceAtendimentoService } from './service-atendimento.service';

describe('ServiceAtendimentoService', () => {
  let service: ServiceAtendimentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceAtendimentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
