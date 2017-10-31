import { Component, Input } from '@angular/core';

import { CalculatorData } from'../../../pages/calculator/CalculatorData';

@Component({
  selector: 'result',
  templateUrl:'./result.component.html',
  styleUrls: ['../../../pages/calculator/calculator.component.css']
})

export class ResultComponent {

  /*Variable declarations*/
  @Input() calculatorData: CalculatorData;
}
