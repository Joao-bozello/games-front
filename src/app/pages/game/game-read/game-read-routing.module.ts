import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameReadPage } from './game-read.page';

const routes: Routes = [
  {
    path: '',
    component: GameReadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameReadPageRoutingModule {}
