import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[displayForm]'
})

export class DisplayFormDirective {

  constructor(private el: ElementRef) {}

  @Input('displayForm') displayProp: string;

  @HostListener('click') click() {
    this.displayForm(this.displayProp);
  }

  private displayForm(visible: string) {
    this.el.nativeElement.style.visibility = visible;
  }
}
