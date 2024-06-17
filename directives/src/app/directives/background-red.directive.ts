import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[backgroundRed]'
})
export class BackgroundRedDirective {
  
  constructor(private eleRef: ElementRef) { }
  
  @Input() set backgroundRed(color: string) {
    const element=this.eleRef.nativeElement; 
     element.style.background=color
  }

  ngOnInit(): void {
   
  }

}
