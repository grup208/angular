import { Directive, ElementRef, Input, TemplateRef, ViewContainerRef } from '@angular/core';
// structural directive 
@Directive({
  selector: '[not]',
})
export class NotDirective {
  hasView:boolean=false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,    
  ) { 
  }

  @Input() set not(condition: boolean) {   
    
   
    if (!condition && !this.hasView) {
        this.viewContainer.createEmbeddedView(this.templateRef);
        this.hasView = true;
     } 

    else if (condition && this.hasView) {
        this.viewContainer.clear();
        this.hasView = false;
     }
    }

}
