import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlTextInputComponent } from './control-text-input/control-text-input.component';
import { ControlFormActionButtonComponent } from './control-form-action-button/control-form-action-button.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SmartTableComponent} from "../smart/smart-table/smart-table.component";
import {TextMaskDirective} from "../directives/text-mask/text-mask.directive";



@NgModule({
  declarations: [
    ControlTextInputComponent,
    ControlFormActionButtonComponent,
    SmartTableComponent,
    TextMaskDirective,
  ],
  exports: [
    ControlTextInputComponent,
    ControlFormActionButtonComponent,
    SmartTableComponent,
    TextMaskDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ControlModule { }
