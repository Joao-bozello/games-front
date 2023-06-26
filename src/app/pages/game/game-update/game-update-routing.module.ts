import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameUpdatePage } from './game-update.page';

const routes: Routes = [
  {
    path: '',
    component: GameUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameUpdatePageRoutingModule {}
