/* tslint:disable:no-unused-variable */
import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { CafeService } from './cafe.service';

describe('Service: Cafe', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [CafeService]
    });
  });

  it('should create the service', inject([CafeService], (service: CafeService) => {
    expect(service).toBeTruthy();
  }));
});
