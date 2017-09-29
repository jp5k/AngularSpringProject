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

  public setServiceItem1(value: String) {
    this._service_item_1 = value;
  }

  public setServiceItem2(value: String) {
    this._service_item_2 = value;
  }

  public setServiceItem3(value: String) {
    this._service_item_3 = value;
  }


  public getServiceItem1(): String {
    return this._service_item_1;
  }

  public getServiceItem2(): String {
    return this._service_item_2;
  }

  public getServiceItem3(): String {
    return this._service_item_3;
  }
}

