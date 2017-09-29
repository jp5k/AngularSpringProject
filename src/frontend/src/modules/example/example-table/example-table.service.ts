import { Injectable } from '@angular/core';
import { Http  } from '@angular/http';
import { URLSearchParams } from "@angular/http";
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ExampleItem } from '../example-item.model';

@Injectable()
export class ExampleTableService {

  http: Http;

  private backendBaseUrl = 'http://localhost:8080/example/';

  exampleDbaseItems: Observable<ExampleItem[]>;
  private _exampleDbaseItems: BehaviorSubject<ExampleItem[]>;
  private dataDbaseStore: { exampleDbaseItems: ExampleItem[] };

  constructor(http: Http) {
    this.http = http;
    // initialise dataStore
    this.dataDbaseStore = { exampleDbaseItems: [] };
    this._exampleDbaseItems = <BehaviorSubject<ExampleItem[]>> new BehaviorSubject([]);
    this.exampleDbaseItems = this._exampleDbaseItems.asObservable();
  }

  // This is real async data loading
  loadDbaseData(tableId: string) {
    let searchTableId = new URLSearchParams();
    searchTableId.set('tableId', tableId);
    this.http.get(this.backendBaseUrl + 'getRealBackendData', {params: searchTableId})
      .do((response: any) => {
        // this will log out the return
        console.log('response: ' + JSON.stringify(response) + '\n');
      })
      // map creates and array of objects
      .map(response => response.json())
      .subscribe(response => {
        this.dataDbaseStore.exampleDbaseItems = this.convertToExampleItems(response);
        // Need to convert array of objects into an array of ExampleItem
        this._exampleDbaseItems.next(Object.assign({}, this.dataDbaseStore).exampleDbaseItems);
      }, error => console.log('Could not load data.'));
  }

  convertToExampleItems(sourceData: Object[]): ExampleItem[] {
    console.log('Convert response data to the objects we want ' + sourceData);
    let returnData = [];
    for (var sourceItem of sourceData) {
      console.log('sourceItem is ' + JSON.stringify(sourceItem));
      let newExampleItem = new ExampleItem(sourceItem['backendItem1'], sourceItem['backendItem2'], sourceItem['backendItem3'] );
      returnData.push(newExampleItem);
    }
    return returnData;
  }

}

