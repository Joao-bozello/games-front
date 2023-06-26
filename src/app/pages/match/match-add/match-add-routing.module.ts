import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MatchAddPage } from './match-add.page';

const routes: Routes = [
  {
    path: '',
    component: MatchAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MatchAddPageRoutingModule {}
