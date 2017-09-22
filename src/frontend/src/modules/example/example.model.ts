/**
 * Created by stewartdunlop on 04/09/2017.
 */
import { ExampleData } from './example.interface';

export class ExampleItem implements ExampleData {
  _service_item_1: String;

  _service_item_2: String;

  _service_item_3: String;

  constructor (item_1: String, item_2: String, item_3: String) {
    this._service_item_1 = item_1;
    this._service_item_2 = item_2;
    this._service_item_3 = item_3;
  }

  set service_item_1(value: String) {
    this._service_item_1 = value;
  }

  set service_item_2(value: String) {
    this._service_item_2 = value;
  }

  set service_item_3(value: String) {
    this._service_item_3 = value;
  }


  get service_item_1(): String {
    return this._service_item_1;
  }

  get service_item_2(): String {
    return this._service_item_2;
  }

  get service_item_3(): String {
    return this._service_item_3;
  }
}

