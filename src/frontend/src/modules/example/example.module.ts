import { NgModule,  ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamplePipe } from './example.pipe';
import { ExampleService } from './example.service';
import { ExampleComponent } from './example.component';
import {ExampleData} from "./example.model";

@NgModule({
  imports: [CommonModule],
  declarations: [
    ExamplePipe,
    ExampleComponent,
    ExampleData
  ],
  providers: [ExampleService],
  exports: [ExampleComponent]
})
export class ExampleModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ExampleModule,
      providers: [ExampleService, ExampleData]
    }
  }
}
