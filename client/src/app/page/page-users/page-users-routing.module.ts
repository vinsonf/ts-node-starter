import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageUsersComponent} from "./page-users.component";


const routes: Routes = [
  {
    path: '',
    component: PageUsersComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageUsersRoutingModule { }
