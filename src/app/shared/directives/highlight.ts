import { Directive, ElementRef, HostListener, inject, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class Highlight {

  private readonly el = inject(ElementRef)
  // Renderer2 : it want use dom and bom
  private readonly renderer = inject(Renderer2)

  // ngAfterViewInit : if it is use one time only
  // ngAfterViewInit(): void {
  //   this.el.nativeElement.style.backgroundColor = 'yello'
  // }

  @HostListener('mouseenter')
  mouseEnter(): void {
    this.addStyle('yellow')
  }

  @HostListener('mouseleave')
  mouseLeave(): void {
    this.addStyle('')
  }

  addStyle(color: string) {
    // this.el.nativeElement.style.backgroundColor = color;
    this.renderer.setStyle(this.el.nativeElement, 'background-color', color)
  }


}
