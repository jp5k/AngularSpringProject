import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import { PropertyDetailsModel} from "./property-details.model";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {logging} from "selenium-webdriver";
import {logger} from "codelyzer/util/logger";

@Component({
  selector: 'ecc-property-details-section',
  templateUrl: './property-details-section.component.html',
  styleUrls: ['./property-details-section.component.less']
})
export class PropertyDetailsSectionComponent implements OnInit {

  phoneNumber: string = '0345 604 6483';

  propertyDetailsFormGroup: FormGroup;
  houseNumberFormCtrl = new FormControl("", Validators.required);
  postcodeFormCtrl = new FormControl("", Validators.required);

  propertyDetailsModel: PropertyDetailsModel;
  //@Input() propertyDetailsModel: PropertyDetailsModel;
  //@Output() propertDetailsModelChange = new EventEmitter<string>()

  constructor(fb: FormBuilder) {
    this.propertyDetailsModel = new PropertyDetailsModel();
    this.propertyDetailsFormGroup = fb.group({
      "houseNumberFormCtrl": this.houseNumberFormCtrl,
      "postcodeFormCtrl": this.postcodeFormCtrl
    });
  }

  ngOnInit() {
    this.houseNumberFormCtrl.valueChanges
      .map((value) => {
        // do some processing here
        console.log('value is '+JSON.stringify(value));
        return value;
      })
      .subscribe((value) => {
        this.propertyDetailsModel.ecc_houseNumber = value;
      });
    this.postcodeFormCtrl.valueChanges
      .map((value) => {
        // do some processing here
        value = value.toUpperCase();
        return value;
      })
      // if valid postcode activate the find address button
      //.filter((value) => this.form.valid)
      .subscribe((value) => {
        this.propertyDetailsModel.ecc_postCode = value;
      });
  }

}
