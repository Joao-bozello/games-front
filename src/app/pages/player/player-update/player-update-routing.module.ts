import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayerUpdatePage } from './player-update.page';

const routes: Routes = [
  {
    path: '',
    component: PlayerUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayerUpdatePageRoutingModule {}
