import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageNavigateRoutingModule } from './page-navigate-routing.module';
import { PageNavigateComponent } from './page-navigate.component';
import {ImageModule} from "../../image/image.module";
import {SmartHeaderComponent} from "../../smart/smart-header/smart-header.component";
import {SmartMenuComponent} from "../../smart/smart-menu/smart-menu.component";
import {SmartPageTitleComponent} from "../../smart/smart-page-title/smart-page-title.component";


@NgModule({
  declarations: [PageNavigateComponent, SmartHeaderComponent, SmartMenuComponent, SmartPageTitleComponent],
  exports: [
    SmartPageTitleComponent
  ],
  imports: [
    CommonModule,
    PageNavigateRoutingModule,
    ImageModule
  ]
})
export class PageNavigateModule { }
