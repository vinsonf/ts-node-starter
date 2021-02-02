import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagePropertyCreateRoutingModule } from './page-property-create-routing.module';
import { PagePropertyCreateComponent } from './page-property-create.component';


@NgModule({
  declarations: [PagePropertyCreateComponent],
  imports: [
    CommonModule,
    PagePropertyCreateRoutingModule
  ]
})
export class PagePropertyCreateModule { }
