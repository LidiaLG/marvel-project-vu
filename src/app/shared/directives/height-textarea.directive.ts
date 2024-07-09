import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHeightTextarea]'
})
export class HeightTextareaDirective {

  constructor(private element: ElementRef) { }

  @HostListener('input')
  onInput(): void {
    this.adjust();
  }

  ngOnInit(): void {
    this.adjust();
  }

  private adjust(): void {
    const textarea = this.element.nativeElement;
    textarea.style.overflow = 'hidden';
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  }
}
