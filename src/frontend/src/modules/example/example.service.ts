import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ExampleItem } from './example.model';

@Injectable()
export class ExampleService {

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

  loadExampleData() {
    this.http.get(this.backendBaseUrl+'getBackendData')
      .do((data:any) => {
        // this will log out the return
        console.log("data: " +JSON.stringify(data));
      })
      .map(response => response.json())
      .subscribe(data => {
        this.dataStore.exampleItems = data;
        this._exampleItems.next(Object.assign({}, this.dataStore).exampleItems);
      }, error => console.log('Could not load todos.'));
  }

  getData() {
    return [
      {service_item_1:"service-data-1_1", service_item_2:"service_data-1_2", service_item_3:"service_data-1_3"},
      {service_item_1:"service-data-2_1", service_item_2:"service_data-2_2", service_item_3:"service_data-2_3"}
    ];
  };

  // Hard coded data to use when developing
  getBackendData() : Observable<ExampleItem[]>{
    let data1: ExampleItem = new ExampleItem('service-data-1_1','service-data-1_2','service-data-1_3');
    let data2: ExampleItem = new ExampleItem('service-data-2_1','service-data-2_2','service-data-2_3');
    let returnData = [ data1, data2 ];
    // For testing you can hard code a return
    return Observable.of(returnData);
  };

  // Real data from the java rest service
  getBackendData2() : Observable<ExampleItem[]> {
    return this._exampleItems.asObservable();
  }

/*
    return this.http.get(this.backendBaseUrl+'getBackendData')
      .do((data:any) => {
          // this will log out the return
          console.log("data: " +JSON.stringify(data));
      })
      //.map((res:Response) => JSON.parse(res.json()))
      .map(data => data._body)
      .map(item => {
          return new ExampleData(item.backendItem1, item.backendItem2, item.backendItem3);
        })
      .do((parsedData:any) => {
        console.log("parsed data : "+JSON.stringify(parsedData))
      })
  }
*/
}

