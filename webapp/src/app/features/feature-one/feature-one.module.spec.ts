import { FeatureOneModule } from './feature-one.module';

describe('FeatureOneModule', () => {
  let featureOneModule: FeatureOneModule;

  beforeEach(() => {
    featureOneModule = new FeatureOneModule();
  });

  it('should create an instance', () => {
    expect(featureOneModule).toBeTruthy();
  });
});
