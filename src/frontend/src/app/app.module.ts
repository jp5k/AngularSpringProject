import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ExampleModule } from '../modules/example/example.module';
import {HhdQuoteModule} from "../modules/hhd-quote/hhd-quote.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ExampleModule.forRoot(),
    HhdQuoteModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
