import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageLoginRoutingModule } from './page-login-routing.module';
import { PageLoginComponent } from './page-login.component';
import {LayoutModule} from "../../layout/layout.module";


@NgModule({
  declarations: [PageLoginComponent],
  imports: [
    CommonModule,
    PageLoginRoutingModule,
    LayoutModule
  ]
})
export class PageLoginModule { }
