import { Component, OnInit } from '@angular/core';
import { ExampleService } from './example.service'

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent {
  example_data1:string[];
  // example_data2 is obtained from the service
  example_data2:string[];

  // example_data1 is generated here in the component
  example_data1 = [
    {item1:"item1-1", item2:"item1-2", item3:"item1-3"},
    {item1:"item2-1", item2:"item2-2", item3:"item2-3"}
  ];

  constructor(public exampleService: ExampleService) {  }

  ngOnInit() {
    this.example_data2 = this.exampleService.getData();
  }
}
