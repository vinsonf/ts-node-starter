import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutCenteredFormComponent } from './layout-centered-form/layout-centered-form.component';
import {ImageModule} from "../image/image.module";
import { LayoutFormSingleColumnComponent } from './layout-form-single-column/layout-form-single-column.component';
import { LayoutNavigateMainComponent } from './layout-navigate-main/layout-navigate-main.component';
import { LayoutTableContainerComponent } from './layout-table-container/layout-table-container.component';



@NgModule({
  declarations: [LayoutCenteredFormComponent, LayoutFormSingleColumnComponent, LayoutNavigateMainComponent, LayoutTableContainerComponent],
  exports: [
    LayoutCenteredFormComponent,
    LayoutFormSingleColumnComponent,
    LayoutNavigateMainComponent,
    LayoutTableContainerComponent
  ],
  imports: [
    CommonModule,
    ImageModule,
  ]
})
export class LayoutModule { }
