import { TestBed } from '@angular/core/testing';

import { ClienteService } from './cliente.service';
import { CidadeService } from './cidade.service';

describe('ClienteService', () => {
  let service: CidadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CidadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
