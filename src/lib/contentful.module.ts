import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from './services/config.service';
import { CommonModule } from "@angular/common";
import ConfigInterface from './interfaces/config.interface';
import { CapContentfulService } from './services/contentful.service';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    CommonModule,
  ],
  exports: [],
  providers: [
    CapContentfulService
  ],
  schemas: []
})
export class CapContentfulModule {
  static forRoot(config: ConfigInterface): ModuleWithProviders {
    return {
      ngModule: CapContentfulModule,
      providers: [
        {
          provide: ConfigService,
          useValue: config
        },
      ]
    };
  }
}

