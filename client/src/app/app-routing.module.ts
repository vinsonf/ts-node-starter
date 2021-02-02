import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./page/page-login/page-login.module').then(
        (m) => m.PageLoginModule
      ),
  },
  {
    path: 'navigate',
    loadChildren: () =>
      import('./page/page-navigate/page-navigate.module').then(
        (m) => m.PageNavigateModule
      ),
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
