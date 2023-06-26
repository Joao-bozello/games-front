import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayerReadPage } from './player-read.page';

const routes: Routes = [
  {
    path: '',
    component: PlayerReadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayerReadPageRoutingModule {}
