import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appHorizontalScroll]'
})

export class HorizontalScrollDirective {

  @HostListener('wheel', ['$event']) onScroll(event:any) {
    event.preventDefault();
    const delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
    event.currentTarget.scrollLeft -= (delta * 310); // Adjust scrolling speed here
  }

}