import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PagePropertiesComponent} from "./page-properties.component";


const routes: Routes = [
  {
    path: '',
    component: PagePropertiesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagePropertiesRoutingModule { }
