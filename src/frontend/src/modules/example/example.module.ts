import { NgModule,  ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { ExamplePipe } from './example.pipe';

import { ExampleTableComponent } from './example-table/example-table.component';
import { ExampleSectionComponent} from './example-section/example-section.component';
import { ExampleInputComponent } from './example-input/example-input.component';

@NgModule({
  imports: [CommonModule, HttpModule],
  declarations: [
    ExamplePipe,
    ExampleSectionComponent,
    ExampleTableComponent,
    ExampleInputComponent
  ],
  providers: [],
  exports: [ ExampleSectionComponent, ExampleTableComponent, ExampleInputComponent ]
})
export class ExampleModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ExampleModule,
      providers: []
    };
  }
}
