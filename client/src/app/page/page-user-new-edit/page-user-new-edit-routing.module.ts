import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageUserNewEditComponent} from "./page-user-new-edit.component";


const routes: Routes = [
  {
    path: '',
    component: PageUserNewEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageUserNewEditRoutingModule { }
