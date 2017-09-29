import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ExampleItem } from '../example-item.model';

@Injectable()
export class ExampleSectionService {

  http: Http;

  private backendBaseUrl = 'http://localhost:8080/example/';

  exampleItems: Observable<ExampleItem[]>;
  private _exampleItems: BehaviorSubject<ExampleItem[]>;
  private dataStore: { exampleItems: ExampleItem[] };

  constructor(http: Http) {
    this.http = http;
    // initialise dataStore
    this.dataStore = { exampleItems: [] };
    this._exampleItems = <BehaviorSubject<ExampleItem[]>> new BehaviorSubject([]);
    this.exampleItems = this._exampleItems.asObservable();
  }

  // This is real async data loading - backed is hard coded in java layer - no dbase data
  loadExampleData() {
    const backendUrl = this.backendBaseUrl + 'getBackendData';

    this.http.get(backendUrl)
      .do((response: any) => {
        // this will log out the return
        console.log('response: ' + JSON.stringify(response) + '\n');
      })
      // map creates and array of objects
      .map(response => response.json())
      .subscribe(response => {
        this.dataStore.exampleItems = this.convertToExampleItems(response);
        console.log('subscribe datastore is ' + JSON.stringify(this.dataStore.exampleItems));
        // Need to convert array of objects into an array of ExampleItem
//        this._exampleItems.next(Object.assign({}, this.dataStore).exampleItems);
        this._exampleItems.next(Object.assign({}, this.dataStore).exampleItems);
      }, error => console.log('Could not load data.'));
  }

  convertToExampleItems(sourceData: Object[]): ExampleItem[] {
    console.log('Convert response data to the objects we want ' + sourceData);
    const returnData = [];
    for (const sourceItem of sourceData) {
      console.log('sourceItem is ' + JSON.stringify(sourceItem));
      const newExampleItem = new ExampleItem(sourceItem['backendItem1'], sourceItem['backendItem2'], sourceItem['backendItem3'] );
      returnData.push(newExampleItem);
    }
    return returnData;
  }

  // Sample data in format of a array of objects
  getData() {
    return [
      {service_item_1: 'service-data-1_1', service_item_2: 'service_data-1_2', service_item_3: 'service_data-1_3'},
      {service_item_1: 'service-data-2_1', service_item_2: 'service_data-2_2', service_item_3: 'service_data-2_3'}
    ];
  }

  // Hard coded data to use when developing - expand to use Observable pattern
  getBackendData(): Observable<ExampleItem[]> {
    const data1: ExampleItem = new ExampleItem('obs_service-data-1_1', 'obs_service-data-1_2', 'obs_service-data-1_3');
    const data2: ExampleItem = new ExampleItem('obs_service-data-2_1', 'obs_service-data-2_2', 'obs_service-data-2_3');
    const returnData = [ data1, data2 ];
    return Observable.of(returnData);
  }

}

