import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ExampleData } from './example.model';

@Injectable()
export class ExampleService {

  http: Http;

  constructor(http: Http) {
    this.http = http;
  }

  private backendBaseUrl = 'http://localhost:8080/example/';

  getData() {
    return [
      {service_item_1:"service-data-1_1", service_item_2:"service_data-1_2", service_item_3:"service_data-1_3"},
      {service_item_1:"service-data-2_1", service_item_2:"service_data-2_2", service_item_3:"service_data-2_3"}
    ];
  };

  // Hard coded data to use when developing
  getBackendData() : Observable<ExampleData[]>{
    let data1: ExampleData = new ExampleData('service-data-1_1','service-data-1_2','service-data-1_3');
    let data2: ExampleData = new ExampleData('service-data-2_1','service-data-2_2','service-data-2_3');
    let returnData = [ data1, data2 ];
    // For testing you can hard code a return
    return Observable.of(returnData);
  };

  // Real data from the java rest service
  getBackendData2() : Observable<ExampleData[]>{
    return this.http.get(this.backendBaseUrl+'getBackendData')
      //.do((data:any) => {
      //    console.log("data: " +data);
      //})
      .map((res:Response) => JSON.parse(res.json()));
  }

}

