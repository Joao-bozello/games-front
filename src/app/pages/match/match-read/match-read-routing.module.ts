import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MatchReadPage } from './match-read.page';

const routes: Routes = [
  {
    path: '',
    component: MatchReadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MatchReadPageRoutingModule {}
