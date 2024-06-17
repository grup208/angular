import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[Asterisks]'
})
export class AsteriksDirective {

  constructor(
    private elementRef:ElementRef
  ) { }

  @Input() set Asterisks(count:number){
    let aster=''
    for(let i=0; i<count; i++){aster+='*'};
    this.elementRef.nativeElement.textContent=aster;
  }
 
}
