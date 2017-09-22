import { NgModule,  ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from "@angular/http";

import { ExamplePipe } from './example.pipe';
import { ExampleService } from './example.service';

import { ExampleTableComponent } from "./example-table/example-table.component";
import { ExampleSectionComponent} from "./example-section/example-section.component";

@NgModule({
  imports: [CommonModule, HttpModule],
  declarations: [
    ExamplePipe,
    ExampleSectionComponent,
    ExampleTableComponent
  ],
  providers: [ExampleService],
  exports: [ExampleSectionComponent, ExampleTableComponent]
})
export class ExampleModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ExampleModule,
      providers: [ExampleService]
    }
  }
}
