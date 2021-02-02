import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageUsersRoutingModule } from './page-users-routing.module';
import { PageUsersComponent } from './page-users.component';
import {SmartPageTitleComponent} from "../../smart/smart-page-title/smart-page-title.component";
import {ImageModule} from "../../image/image.module";
import {LayoutModule} from "../../layout/layout.module";
import {ControlModule} from "../../control/control.module";
import {PipeModule} from "../../pipe/pipe.module";


@NgModule({
  declarations: [PageUsersComponent],
  exports: [
  ],
  imports: [
    CommonModule,
    PageUsersRoutingModule,
    ImageModule,
    LayoutModule,
    ControlModule,
    PipeModule
  ]
})
export class PageUsersModule { }
