import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Form, FormsModule} from "@angular/forms";


import { QuotePageComponent } from "./quote-page/quote-page.component";
import { PropertyDetailsSectionComponent } from "./property-details-section/property-details-section.component";

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  declarations: [ QuotePageComponent, PropertyDetailsSectionComponent ],
  providers: [],
  exports: [ QuotePageComponent, PropertyDetailsSectionComponent ]
})
export class HhdQuoteModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: HhdQuoteModule,
      providers: [
        QuotePageComponent,
        PropertyDetailsSectionComponent
      ]
    };
  }
}
