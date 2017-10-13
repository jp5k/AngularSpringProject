import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import { PropertyDetailsModel} from "./property-details.model";
import {FormBuilder, FormControl, FormGroup, NG_VALIDATORS, ValidatorFn, Validators} from "@angular/forms";

@Component({
  selector: 'ecc-property-details-section',
  templateUrl: './property-details-section.component.html',
  //providers: [ { provide: NG_VALIDATORS, useValue: validatePostcode, multi: true } ],
  styleUrls: ['./property-details-section.component.less']
})

export class PropertyDetailsSectionComponent implements OnInit {

  phoneNumber: string = '0345 604 6483';

  propertyDetailsFormGroup: FormGroup;
  houseNumberFormCtrl = new FormControl("", Validators.required);
  postcodeFormCtrl = new FormControl("", [ Validators.required, postcodeValidator ]);

  propertyDetailsModel: PropertyDetailsModel;

  addressesFound = [];
  addressSelected: string;

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
        //console.log('value is '+JSON.stringify(value));
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

  findAddresses() {
    if (!this.postcodeFormCtrl.invalid) {
      this.addressesFound = buildAddresses();
      console.log('find addresses');
    }
  }


}

  function buildAddresses(): string[] {
    let adds = [];
    for (let i=0; i<36; i++) {
      adds[i] = i+' Footshill Close, Hanham, Bristol';
    }
    return adds;
  }

  function postcodeValidator(formControl: FormControl) {
    const EMAIL_REGXP = /^([A-Z][A-Z0-9]{0,3}\s?[0-9][A-Z0-9]{2})$/i;
    let pcode = formControl.value.replace(/\s/g,'');
    return EMAIL_REGXP.test(pcode) ? null : {
      validatePostcode: {
        valid: false
      }
    };
  }

