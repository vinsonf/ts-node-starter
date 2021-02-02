import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormLoginComponent } from './form-login/form-login.component';
import {LayoutModule} from "../layout/layout.module";
import {ControlModule} from "../control/control.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
    declarations: [FormLoginComponent],
    exports: [
        FormLoginComponent
    ],
  imports: [
    CommonModule,
    LayoutModule,
    ControlModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class FormModule { }
