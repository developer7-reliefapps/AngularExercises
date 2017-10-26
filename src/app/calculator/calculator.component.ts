import { Component } from '@angular/core';

@Component({
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})

export class CalculatorComponent{
  /*Variables declaration*/
  public symbols: string[];
  public buttonValue: string;
  public resultValue: number;

  /*Constructor*/
  constructor () {
    this.symbols = ['0','1','2','3','4','5','6','7','8','9','.','=','+','-','*','/'];
    this.buttonValue = ' ';
    this.resultValue = 0;
  }

  /*Methods*/

  /**Display the value of clicked buttons**/
  public displayValue(buttonValue: string):void {

    /*Checking results on the console*/
    console.log("--------------- Checkings ---------------------");
    console.log("value before :" + this.buttonValue.slice(0, this.buttonValue.length - 1));
    console.log("char : " + this.buttonValue.charAt(this.buttonValue.length-1));
    console.log("Value after : "+ buttonValue);
    console.log("Result :");
    console.log(parseFloat(this.buttonValue.slice(0, this.buttonValue.length - 1))
                  + parseFloat(buttonValue));

    switch(this.buttonValue.charAt(this.buttonValue.length - 1)){

      case '+':
      this.resultValue = parseFloat(this.buttonValue.slice(0, this.buttonValue.length - 1))
                          + parseFloat(buttonValue);

      case '-':
      this.resultValue = parseFloat(this.buttonValue.slice(0, this.buttonValue.length - 1))
                          - parseFloat(buttonValue);

      case '*':
      this.resultValue = parseFloat(this.buttonValue.slice(0, this.buttonValue.length - 1))
                          * parseFloat(buttonValue);

      case '/':
      this.resultValue = parseFloat(this.buttonValue.slice(0, this.buttonValue.length - 1))
                          / parseFloat(buttonValue);

      default:
      this.resultValue = parseFloat(this.buttonValue += buttonValue);
    }

    /*return this.resultValue;*/
  }
}
