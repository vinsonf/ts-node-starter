import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageUserNewEditRoutingModule } from './page-user-new-edit-routing.module';
import { PageUserNewEditComponent } from './page-user-new-edit.component';
import {LayoutModule} from "../../layout/layout.module";
import {ReactiveFormsModule} from "@angular/forms";
import {ControlModule} from "../../control/control.module";
import {ImageModule} from "../../image/image.module";


@NgModule({
  declarations: [PageUserNewEditComponent],
  imports: [
    CommonModule,
    PageUserNewEditRoutingModule,
    LayoutModule,
    ReactiveFormsModule,
    ControlModule,
    ImageModule
  ]
})
export class PageUserNewEditModule { }
