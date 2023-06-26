import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameAddPage } from './game-add.page';

const routes: Routes = [
  {
    path: '',
    component: GameAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameAddPageRoutingModule {}
