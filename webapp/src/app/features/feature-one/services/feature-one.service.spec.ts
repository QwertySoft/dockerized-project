import { TestBed } from '@angular/core/testing';

import { FeatureOneService } from './feature-one.service';

describe('FeatureOneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FeatureOneService = TestBed.get(FeatureOneService);
    expect(service).toBeTruthy();
  });
});
