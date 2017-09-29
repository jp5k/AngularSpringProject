import { Component, OnInit, Input } from '@angular/core';
import { ExampleTableService } from './example-table.service';
import { ExampleItem } from '../example-item.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-example-table',
  // Make sure you put the service here - otherwise you'll get a more global injection
  providers: [ ExampleTableService ],
  templateUrl: './example-table.component.html',
  styleUrls: ['./example-table.component.css']
})

/*
This should all be a much more generic component, with the column data being an array
and the col headers on the table auto generated etc etc
this is just an example starting point
 */

export class ExampleTableComponent implements OnInit {

  @Input() tableId: string;
  @Input() tableName: string;

  exampleTableService: ExampleTableService;

  // example_data1 is generated here in the component
  example_data: Observable<ExampleItem[]>;

  constructor(exampleTableService: ExampleTableService) {
    this.exampleTableService = exampleTableService;
  }

  ngOnInit() {
    this.example_data = this.exampleTableService.exampleDbaseItems; // subscribe to entire collection
    // Change this to a parameterised call, pass an id to return a specific collection
    this.exampleTableService.loadDbaseData(this.tableId);    // load all exampleItems
  }

  getTableName(): String {
    return this.tableName;
  }

}
