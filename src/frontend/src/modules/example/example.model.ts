/**
 * Created by stewartdunlop on 04/09/2017.
 */

export class ExampleData {

  private _service_item_1 : String;

  private _service_item_2 : String;

  private _service_item_3: String;

  contstructor (item_1: String, item_2: String, item_3: String) {
    this._service_item_1 = item_1;
    this._service_item_2 = item_2;
    this._service_item_3 = item_3;
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

