import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MatchUpdatePage } from './match-update.page';

const routes: Routes = [
  {
    path: '',
    component: MatchUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MatchUpdatePageRoutingModule {}
