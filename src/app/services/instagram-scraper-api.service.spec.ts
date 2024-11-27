import { TestBed } from '@angular/core/testing';

import { InstagramScraperApiService } from './instagram-scraper-api.service';

describe('InstagramScraperApiService', () => {
  let service: InstagramScraperApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstagramScraperApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
