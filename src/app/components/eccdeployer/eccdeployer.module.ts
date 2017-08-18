import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppComponent, EccdeployerComponent} from './eccdeployer.component';

@NgModule({
    imports: [BrowserModule],
    bootstrap: [EccdeployerComponent],
    declarations: [EccdeployerComponent],
})
export class EccdeployerModule {}