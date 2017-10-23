import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name:'safe'
})
@Injectable()
export class SafePipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer){
  }

  transform(value, args){
  return this.sanitizer.bypassSecurityTrustResourceUrl(value);
  }
}
