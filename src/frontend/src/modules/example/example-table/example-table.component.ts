import { Component, OnInit } from '@angular/core';
import { ExampleService } from '../example.service';
import { ExampleItem } from '../example.model';
import { Observable } from "rxjs";

@Component({
  selector: 'app-example-table',
  templateUrl: './example-table.component.html',
  styleUrls: ['./example-table.component.css']
})
export class ExampleTableComponent implements OnInit {

  exampleService: ExampleService;

  // example_data1 is generated here in the component
  example_data:Observable<ExampleItem[]>;

  constructor(exampleService: ExampleService) {
    this.exampleService = exampleService;
  }

  ngOnInit() {
    this.example_data = this.exampleService.exampleDbaseItems; // subscribe to entire collection
    // Change this to a parameterised call, pass an id to return a specific collection
    this.exampleService.loadDbaseData();    // load all exampleItems
  }

}
