import { Component } from '@angular/core';

import { digits } from '../../../pages/calculator/digits';
import { symbols } from '../../../pages/calculator/symbols';
import { CalculatorData } from'../../../pages/calculator/CalculatorData';

@Component({
  selector: 'keyboard',
  templateUrl:'./keyboard.component.html',
  styleUrls: ['../../../pages/calculator/calculator.component.css']
})

export class KeyboardComponent {

  /*Variables declaration*/
  public calculatorData: CalculatorData;
  public digit: number;
  public symbol: symbol;
  public digits: number[];
  public symbols: string[];

  /*Constructor*/
  constructor () {
    /*Retrieve list of digits*/
    this.digits = digits;
    /*Retrieve list of symbols*/
    this.symbols = symbols;
    this.calculatorData = {resultValue: 0, buttonValue: ''};
  }

  /*Methods*/

  /**Display the value of clicked buttons**/
  public displayValue(currentValue: string): void {
    console.log("-----------TEST------------")
    console.log("1/ Key entered : " + currentValue);

     if(currentValue !== "="){
       this.calculatorData.buttonValue += currentValue;
         } else {
           switch(
             this.calculatorData.buttonValue.charAt(this.calculatorData.buttonValue.indexOf("+")) ||
             this.calculatorData.buttonValue.charAt(this.calculatorData.buttonValue.indexOf("*")) ||
             this.calculatorData.buttonValue.charAt(this.calculatorData.buttonValue.indexOf("-")) ||
             this.calculatorData.buttonValue.charAt(this.calculatorData.buttonValue.indexOf("/"))
           ) {

             case '+':
             console.log("2/ addition");
             this.calculatorData.resultValue =
             parseFloat(this.calculatorData.buttonValue.substring(0, this.calculatorData.buttonValue.indexOf("+"))) +
             parseFloat(this.calculatorData.buttonValue.substring(this.calculatorData.buttonValue.indexOf("+") + 1, this.calculatorData.buttonValue.length));
             console.log(parseFloat(this.calculatorData.buttonValue.substring(this.calculatorData.buttonValue.indexOf("+") + 1, this.calculatorData.buttonValue.length)));
             break;

             case '-':
             this.calculatorData.resultValue =
             parseFloat(this.calculatorData.buttonValue.substring(0, this.calculatorData.buttonValue.indexOf("-"))) -
             parseFloat(this.calculatorData.buttonValue.substring(this.calculatorData.buttonValue.indexOf("-") + 1, this.calculatorData.buttonValue.length));
             break;

             case '*':
             this.calculatorData.resultValue =
             parseFloat(this.calculatorData.buttonValue.substring(0, this.calculatorData.buttonValue.indexOf("*"))) *
             parseFloat(this.calculatorData.buttonValue.substring(this.calculatorData.buttonValue.indexOf("*") + 1, this.calculatorData.buttonValue.length));
             break;

             case '/':
             this.calculatorData.resultValue =
             parseFloat(this.calculatorData.buttonValue.substring(0, this.calculatorData.buttonValue.indexOf("/"))) /
             parseFloat(this.calculatorData.buttonValue.substring(this.calculatorData.buttonValue.indexOf("/") + 1, this.calculatorData.buttonValue.length));
             break;

             default:
               this.calculatorData.resultValue = parseFloat(this.calculatorData.buttonValue);
         }
         if(this.calculatorData.resultValue.toString() === "NaN"){
           console.log(this.calculatorData.resultValue);
           this.calculatorData.resultValue = parseFloat(this.calculatorData.buttonValue);
           console.log(this.calculatorData.resultValue);
           this.calculatorData.buttonValue = this.calculatorData.resultValue.toString();
         } else {
           this.calculatorData.buttonValue = this.calculatorData.resultValue.toString();
         }
     }
    console.log("3/ Result :");
    console.log(this.calculatorData.resultValue);

  }

  resetCalculator(){
    this.calculatorData.buttonValue = '';
    this.calculatorData.resultValue = 0;
  }

}
