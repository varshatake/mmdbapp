import { TestBed } from '@angular/core/testing';

import { MovieserService } from './movieser.service';

describe('MovieserService', () => {
  let service: MovieserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
