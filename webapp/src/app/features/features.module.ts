import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureOneModule } from './feature-one/feature-one.module';
import { LandingModule } from './landing/landing.module';

@NgModule({
  imports: [
    CommonModule,
    FeatureOneModule,
    LandingModule
  ],
  declarations: []
})
export class FeaturesModule { }
