import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutCenteredFormComponent } from './layout-centered-form/layout-centered-form.component';



@NgModule({
  declarations: [LayoutCenteredFormComponent],
  exports: [
    LayoutCenteredFormComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class LayoutModule { }
