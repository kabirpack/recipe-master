import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open') isDropDownOpen : boolean = false


  constructor(private elRef : ElementRef, private renderer : Renderer2) { }


  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isDropDownOpen = this.elRef.nativeElement.contains(event.target) ? !this.isDropDownOpen : false;
  }
  // @HostListener('click') toggleDropdown(event : Event){

  //   this.isDropDownOpen = !this.isDropDownOpen;

    // if(this.isDropDownOpen == true){
    //   this.renderer.addClass(this.elRef.nativeElement, 'open');
    // }else{
    //   this.renderer.removeClass(this.elRef.nativeElement, 'open');
    // }

  // }



}
