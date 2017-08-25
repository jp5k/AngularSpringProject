import { Injectable } from '@angular/core';

@Injectable()
export class ExampleService {
  getData() {
    return [
      {service_item_1:"service-data-1_1", service_item_2:"service_data-1_2", service_item_3:"service_data-1_3"},
      {service_item_1:"service-data-2_1", service_item_2:"service_data-2_2", service_item_3:"service_data-2_3"}
    ];
  }
}
