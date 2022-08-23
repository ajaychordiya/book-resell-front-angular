import { TestBed } from '@angular/core/testing';

import { BookAuthService } from './book-auth.service';

describe('BookAuthService', () => {
  let service: BookAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
