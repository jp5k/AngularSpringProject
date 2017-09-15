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

  exampleDbaseItems: Observable<ExampleItem[]>;
  private _exampleDbaseItems: BehaviorSubject<ExampleItem[]>;
  private dataDbaseStore: { exampleDbaseItems: ExampleItem[] };

  constructor(http: Http) {
    this.http = http;
    // initialise dataStore
    this.dataStore = { exampleItems: [] };
    this._exampleItems = <BehaviorSubject<ExampleItem[]>> new BehaviorSubject([]);
    this.exampleItems = this._exampleItems.asObservable();
    // initialise dataStore
    this.dataDbaseStore = { exampleDbaseItems: [] };
    this._exampleDbaseItems = <BehaviorSubject<ExampleItem[]>> new BehaviorSubject([]);
    this.exampleDbaseItems = this._exampleDbaseItems.asObservable();
  }

  // This is real async data loading
  loadExampleData() {
    this.http.get(this.backendBaseUrl+'getBackendData')
      .do((response:any) => {
        // this will log out the return
        console.log("response: " +JSON.stringify(response)+'\n');
      })
      // map creates and array of objects
      .map(response => response.json())
      .subscribe(response => {
        this.dataStore.exampleItems = this.convertToExampleItems(response);
        console.log('subscribe datastore is '+JSON.stringify(this.dataStore.exampleItems));
        // Need to convert array of objects into an array of ExampleItem
//        this._exampleItems.next(Object.assign({}, this.dataStore).exampleItems);
        this._exampleItems.next(Object.assign({}, this.dataStore).exampleItems);
      }, error => console.log('Could not load data.'));
  }

  // This is real async data loading
  loadDbaseData() {
    this.http.get(this.backendBaseUrl+'getRealBackendData')
      .do((response:any) => {
        // this will log out the return
        console.log("response: " +JSON.stringify(response)+'\n');
      })
      // map creates and array of objects
      .map(response => response.json())
      .subscribe(response => {
        this.dataDbaseStore.exampleDbaseItems = this.convertToExampleItems(response);
        // Need to convert array of objects into an array of ExampleItem
        this._exampleDbaseItems.next(Object.assign({}, this.dataDbaseStore).exampleDbaseItems);
      }, error => console.log('Could not load data.'));
  }

  convertToExampleItems(sourceData: Object[]) : ExampleItem[] {
    console.log('Convert response data to the objects we want '+sourceData);
    let returnData = [];
    for(var sourceItem of sourceData) {
      console.log('sourceItem is '+JSON.stringify(sourceItem));
      let newExampleItem = new ExampleItem(sourceItem['backendItem1'],sourceItem['backendItem2'],sourceItem['backendItem3'] )
      returnData.push(newExampleItem);
    }
    return returnData;
  }

  // Real data from the java rest service
  getRealBackedData() : Observable<ExampleItem[]> {
    return this._exampleItems.asObservable();
  }

  // Sample data in format of a array of objects
  getData() {
    return [
      {service_item_1:"service-data-1_1", service_item_2:"service_data-1_2", service_item_3:"service_data-1_3"},
      {service_item_1:"service-data-2_1", service_item_2:"service_data-2_2", service_item_3:"service_data-2_3"}
    ];
  };

  // Hard coded data to use when developing
  getBackendData() : Observable<ExampleItem[]>{
    let data1: ExampleItem = new ExampleItem('obs_service-data-1_1','obs_service-data-1_2','obs_service-data-1_3');
    let data2: ExampleItem = new ExampleItem('obs_service-data-2_1','obs_service-data-2_2','obs_service-data-2_3');
    let returnData = [ data1, data2 ];
    return Observable.of(returnData);
  };

}

