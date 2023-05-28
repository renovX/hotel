import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appHover]',
})
export class HoverDirective implements OnInit {
  color: string = 'red';
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = this.color;
  }
  ngOnInit(): void {}
}
