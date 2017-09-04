import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ExampleData } from 'example.module';

@Injectable()
export class ExampleService {
  constructor(private http: Http) {
  }

  private backendBaseUrl = 'http://localhost:8080/example/'

  getData() {
    return [
      {service_item_1:"service-data-1_1", service_item_2:"service_data-1_2", service_item_3:"service_data-1_3"},
      {service_item_1:"service-data-2_1", service_item_2:"service_data-2_2", service_item_3:"service_data-2_3"}
    ];
  };

  getBackendData() : Observable<ExampleData[]>{
    return this.http.get(this.backendBaseUrl)
      .map((res:Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));


    // For testing you can hard code a return
    //return [
    //  {service_item_1:"service-data-1_1", service_item_2:"service_data-1_2", service_item_3:"service_data-1_3"},
    //  {service_item_1:"service-data-2_1", service_item_2:"service_data-2_2", service_item_3:"service_data-2_3"}
    //];
  };

}
