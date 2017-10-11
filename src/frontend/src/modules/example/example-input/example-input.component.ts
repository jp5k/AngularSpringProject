import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-example-input',
  templateUrl: './example-input.component.html',
  styleUrls: ['./example-input.component.css']
})
export class ExampleInputComponent {

  @Input() inputName: string = '';
  @Input() inputLabel: string = '';

}
