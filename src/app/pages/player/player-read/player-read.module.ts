import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlayerReadPageRoutingModule } from './player-read-routing.module';

import { PlayerReadPage } from './player-read.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlayerReadPageRoutingModule
  ],
  declarations: [PlayerReadPage]
})
export class PlayerReadPageModule {}
