import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import { PropertyDetailsModel} from "./property-details.model";

@Component({
  selector: 'ecc-property-details-section',
  templateUrl: './property-details-section.component.html',
  styleUrls: ['./property-details-section.component.css']
})
export class PropertyDetailsSectionComponent implements OnInit {

  phoneNumber: string = '0345 604 6483';

  @Input() propertyDetailsModel: PropertyDetailsModel;
  @Output() propertDetailsModelChange = new EventEmitter<string>()

  constructor() { }

  ngOnInit() {
    this.propertyDetailsModel = new PropertyDetailsModel();
  }

}
