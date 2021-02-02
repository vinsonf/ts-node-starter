import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageNavigateComponent} from "./page-navigate.component";


const routes: Routes = [
  {
    path: '',
    component: PageNavigateComponent,
    children: [
      {
        path: 'users',
        data: {
          title: 'Users',
          viewPath: 'Users',
          newButton: true,
        },
        loadChildren: () =>
          import('../page-users/page-users.module').then(
            (m) => m.PageUsersModule
          ),
      },
      {
        path: 'user-create',
        data: {
          title: 'User Create',
          viewPath: 'users / user-create',
        },
        loadChildren: () =>
          import('../page-user-new-edit/page-user-new-edit.module').then(
            (m) => m.PageUserNewEditModule
          ),
      },
      {
        path: 'properties',
        data: {
          title: 'Properties',
          viewPath: 'properties',
          newButton: true,
        },
        loadChildren: () =>
          import('../page-properties/page-properties.module').then(
            (m) => m.PagePropertiesModule
          ),
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageNavigateRoutingModule { }
