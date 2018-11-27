import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { FeatureOneService } from './services/feature-one.service';
import { PageOneModule } from './pages/page-one/page-one.module';

@NgModule({
  imports: [
    CommonModule,
    PageOneModule
  ],
  declarations: []
})
export class FeatureOneModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FeatureOneModule,
      providers: [
        FeatureOneService
      ]
    };
  }

}
