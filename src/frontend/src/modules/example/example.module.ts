import { NgModule,  ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule} from "@angular/forms";

import { ExamplePipe } from './example.pipe';

import { ExampleTableComponent } from './example-table/example-table.component';
import { ExampleSectionComponent} from './example-section/example-section.component';
import { ExampleInputComponent } from './example-input/example-input.component';
import { ExampleSelectComponent} from "./example-select/example-select.component";


@NgModule({
  imports: [CommonModule, HttpModule, FormsModule],
  declarations: [
    ExamplePipe,
    ExampleSectionComponent,
    ExampleTableComponent,
    ExampleInputComponent,
    ExampleSelectComponent
  ],
  providers: [],
  exports: [ ExampleSectionComponent, ExampleTableComponent, ExampleInputComponent, ExampleSelectComponent ]
})
export class ExampleModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ExampleModule,
      providers: []
    };
  }
}
