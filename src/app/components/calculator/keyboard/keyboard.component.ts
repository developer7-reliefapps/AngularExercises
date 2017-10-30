import { Component } from '@angular/core';

import { digits } from '../../../calculator/digits';
import { symbols } from '../../../calculator/symbols';

@Component({
  selector: 'keyboard',
  templateUrl:'./keyboard.component.html',
  styleUrls: ['../../../calculator/calculator.component.css']
})

export class KeyboardComponent {

  /*Variables declaration*/
  public buttonValue: string;
  public resultValue: number;
  public digit: number;
  public symbol: symbol;
  public digits: number[];
  public symbols: string[];

  /*Constructor*/
  constructor () {
    this.buttonValue = '';
    this.resultValue = 0;
    /*Retrieve list of digits*/
    this.digits = digits;
    /*Retrieve list of symbols*/
    this.symbols = symbols;
  }

  /*Methods*/

  /**Display the value of clicked buttons**/
  public displayValue(currentValue: string): void {
    console.log("-----------TEST------------")
    console.log("1/ Key entered : " + currentValue);

     if(currentValue !== "="){
       this.buttonValue += currentValue;
         } else {
           switch(
             this.buttonValue.charAt(this.buttonValue.indexOf("+")) ||
             this.buttonValue.charAt(this.buttonValue.indexOf("*")) ||
             this.buttonValue.charAt(this.buttonValue.indexOf("-")) ||
             this.buttonValue.charAt(this.buttonValue.indexOf("/"))
           ) {

             case '+':
             console.log("2/ addition");
             this.resultValue =
             parseFloat(this.buttonValue.substring(0, this.buttonValue.indexOf("+"))) +
             parseFloat(this.buttonValue.substring(this.buttonValue.indexOf("+") + 1, this.buttonValue.length));
             console.log(parseFloat(this.buttonValue.substring(this.buttonValue.indexOf("+") + 1, this.buttonValue.length)));
             break;

             case '-':
             this.resultValue =
             parseFloat(this.buttonValue.substring(0, this.buttonValue.indexOf("-"))) -
             parseFloat(this.buttonValue.substring(this.buttonValue.indexOf("-") + 1, this.buttonValue.length));
             break;

             case '*':
             this.resultValue =
             parseFloat(this.buttonValue.substring(0, this.buttonValue.indexOf("*"))) *
             parseFloat(this.buttonValue.substring(this.buttonValue.indexOf("*") + 1, this.buttonValue.length));
             break;

             case '/':
             this.resultValue =
             parseFloat(this.buttonValue.substring(0, this.buttonValue.indexOf("/"))) /
             parseFloat(this.buttonValue.substring(this.buttonValue.indexOf("/") + 1, this.buttonValue.length));
             break;

             default:
               this.resultValue = parseFloat(this.buttonValue);
         }
         if(this.resultValue.toString() === "NaN"){
           console.log(this.resultValue);
           this.resultValue = parseFloat(this.buttonValue);
           console.log(this.resultValue);
           this.buttonValue = this.resultValue.toString();
         } else {
           this.buttonValue = this.resultValue.toString();
         }
     }
    console.log("3/ Result :");
    console.log(this.resultValue);

  }

  resetCalculator(){
    this.buttonValue = '';
    this.resultValue = 0;
  }

}
