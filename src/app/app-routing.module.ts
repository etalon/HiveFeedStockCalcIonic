import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sumbuilder',
    pathMatch: 'full'
  },
  {
    path: 'sumbuilder',
    loadChildren: './sumbuilder/sumbuilder.module#SumbuilderPageModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
