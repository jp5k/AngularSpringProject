import { Component, OnInit } from '@angular/core';
import { ExampleService } from './example.service';
import { ExampleItem } from './example.model';
import {Observable} from "rxjs";

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent {
  exampleService: ExampleService;

  // example_data1 is generated here in the component
  example_data1:Object[];
  // example_data2 is obtained from the service
  example_data2:Object[];
  // example_data3 is obtained from the service which it has hard coded for dev
  example_data3:Observable<ExampleItem[]>;
  // example_data4 is obtained from the service which gets it from a webservice
  example_data4:Observable<ExampleItem[]>;

  constructor(exampleService: ExampleService) {
    this.exampleService = exampleService;
    this.example_data1 = [
      {item1:"item1-1", item2:"item1-2", item3:"item1-3"},
      {item1:"item2-1", item2:"item2-2", item3:"item2-3"}
    ];
  }

  ngOnInit() {
    this.example_data2 = this.exampleService.getData();
    this.example_data3 = this.exampleService.getBackendData();
    this.example_data4 = this.exampleService.exampleItems; // subscribe to entire collection
    this.exampleService.loadExampleData();    // load all exampleItems
  }
}
