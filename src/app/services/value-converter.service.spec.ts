import { TestBed } from '@angular/core/testing';

import { ValueConverterService } from './value-converter.service';

describe('ValueConverterService', () => {
  let service: ValueConverterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValueConverterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
