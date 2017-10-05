import {Directive, HostListener, Renderer2, ElementRef, HostBinding} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  @HostBinding('class.open') isOpen = false;

  // Max solution
  /*@HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }*/

  // improved solution
  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (this.elRef.nativeElement.contains(event.target)) {
      this.isOpen = !this.isOpen;
    } else {
      this.isOpen = false;
    }
  }

  // my first try
  /*@HostListener('mouseenter') mouseover(eventData: Event) {
    this.renderer.addClass(this.elRef.nativeElement, 'open');
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.removeClass(this.elRef.nativeElement, 'open');
  }*/

}
