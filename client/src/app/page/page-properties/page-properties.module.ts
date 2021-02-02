import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagePropertiesRoutingModule } from './page-properties-routing.module';
import { PagePropertiesComponent } from './page-properties.component';
import {LayoutModule} from "../../layout/layout.module";
import {ImageModule} from "../../image/image.module";
import {PipeModule} from "../../pipe/pipe.module";


@NgModule({
  declarations: [PagePropertiesComponent],
  imports: [
    CommonModule,
    PagePropertiesRoutingModule,
    LayoutModule,
    ImageModule,
    PipeModule
  ]
})
export class PagePropertiesModule { }
