import { Directive, ElementRef, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[asterisks]'
})
export class AsterisksDirective {

  @Input() asterisks: number = 0;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @Input() set appAsterisks(times: number) {
    this.el.nativeElement.innerHTML = '';
    for (let i = 0; i < times; i++) {
      const asterisk = this.renderer.createText('*');
      this.renderer.appendChild(this.el.nativeElement, asterisk);
    }
  }

  ngOnInit() {
    this.appAsterisks = 5; // Default value
  }
}
