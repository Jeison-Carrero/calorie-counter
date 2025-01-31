import { Directive, ElementRef, Input, Renderer2, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appShowError]'
})
export class ShowErrorDirective implements OnChanges {

  @Input() control!: AbstractControl | null;

  constructor(private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['control'] && this.control) {
      this.control.statusChanges?.subscribe(() => {
        this.showError();
      });
    }
  }

  private showError(): void {
    
    const existingMessage = this.el.nativeElement.parentElement?.querySelector('.error-message');
    if (existingMessage) {
      existingMessage.remove();
    }

    if (this.control && this.control.errors?.['invalidValue']) {
      const errorMessage = this.control.getError('invalidValue')
      const messageElement = document.createElement('div');
      messageElement.classList.add('grid', 'text-red-600', 'text-sm', 'error-message');
      messageElement.innerText = errorMessage;

      this.el.nativeElement.parentElement?.appendChild(messageElement);
    }
  }
}
