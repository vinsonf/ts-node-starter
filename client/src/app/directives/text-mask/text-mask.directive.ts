import {Directive, ElementRef, HostListener, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {MaskService} from "../../services/mask.service";

@Directive({
  selector: '[appTextMask]',
})
export class TextMaskDirective {
  @Input()
  public appTextMask: string;
  @Input()
  public maskForm: FormGroup;
  @Input()
  public maskFormControlName: string;

  @HostListener('input') onInput(): void {
    switch (this.appTextMask) {
      case 'phone':
        // @ts-ignore
        this.maskForm.get(this.maskFormControlName).setValue(this.maskService.phoneFormat(this.el.nativeElement.value));
        break;
      case 'zipCode':
        // @ts-ignore
        this.maskForm.get(this.maskFormControlName).setValue(this.maskService.zipCodeFormat(this.el.nativeElement.value));
        break;
    }
  }

  @HostListener('paste') onPaste(): void {
    switch (this.appTextMask) {
      case 'phone':
        // @ts-ignore
        this.maskForm.get(this.maskFormControlName).setValue(this.maskService.phoneFormat(this.el.nativeElement.value));
        break;
      case 'zipCode':
        // @ts-ignore
        this.maskForm.get(this.maskFormControlName).setValue(this.maskService.zipCodeFormat(this.el.nativeElement.value));
        break;
    }
  }

  @HostListener('paste', ['$event']) blockPaste(e: KeyboardEvent): void {
    if (this.appTextMask === 'phone') { return; }
    if (this.appTextMask === 'zipCode') {  return; }
    e.preventDefault();
  }

  @HostListener('copy', ['$event']) blockCopy(e: KeyboardEvent): void {
    e.preventDefault();
  }

  @HostListener('cut', ['$event']) blockCut(e: KeyboardEvent): void {
    e.preventDefault();
  }
  constructor(
    public el: ElementRef,
    public maskService: MaskService,
  ) { }
}
