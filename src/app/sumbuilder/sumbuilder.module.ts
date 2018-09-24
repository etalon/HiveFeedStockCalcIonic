import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SumbuilderPage } from './sumbuilder.page';
import { PartcountsComponent} from '../partcounts/partcounts.component';

const routes: Routes = [
  {
    path: '',
    component: SumbuilderPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    SumbuilderPage,
    PartcountsComponent
 ]
})
export class SumbuilderPageModule {}
