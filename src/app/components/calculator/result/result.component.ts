import { Component, Input } from '@angular/core';

@Component({
  selector: 'result',
  templateUrl:'./result.component.html',
  styleUrls: ['../../../calculator/calculator.component.css']
})

export class ResultComponent {

  /*Variable declarations*/
  @Input() resultValue: number;
  @Input() buttonValue: string;

}
