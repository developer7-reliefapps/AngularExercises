import { Component } from '@angular/core';

@Component({
  selector: 'caching',
  templateUrl: 'cache.component.html'
})

export class CacheComponent {

/**Variables declaration**/
public localObject: object;
public text: object;
public property: string;
public value: string;

constructor () {
  this.text = {};
  this.value = '';
  this.property = '';
  this.localObject = {};
}

/**Methods**/

  // GET from localStorage
  public getFromLocalStorage(key: string) {
    return localStorage.getItem(key);
  }

  // SET in localStorage
  public setInLocalStorage(key: string, property: string, value: string) {
    this.text = {property: property,value: value};
    console.log(this.text);
    localStorage.setItem(key, JSON.stringify(this.text));
    console.log(JSON.parse(localStorage.getItem(key)));
    this.localObject = JSON.parse(localStorage.getItem(key));
  }

  //Remove one itme in Local Storage
  public removeFromLocalStorage(keyRemove: string) {
    localStorage.removeItem(keyRemove);
  }

  //Clear the local storage
  public clearLocalStorage() {
    localStorage.clear();
  }
}
