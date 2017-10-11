import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-select',
  templateUrl: './example-select.component.html',
  styleUrls: ['./example-select.component.css']
})
export class ExampleSelectComponent implements OnInit {

  constructor() {
  }

  @Input() selectRequest: string = '';
  @Input() selectLabel: string = '';
  @Input() selectItems: Array<string>;

  ngOnInit() {
  }

}
