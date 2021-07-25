import { Directive, HostListener,ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem:ElementRef) { }
  @HostListener("mouseenter") onMouseEnter(){
    this.clickUp("teal")
  }

  @HostListener("mouseleave") onMouseLeave(){
    this.clickUp("")
  }

  private clickUp(color:string){
    this.elem.nativeElement.style.backgroundColor=color;
  }

}
