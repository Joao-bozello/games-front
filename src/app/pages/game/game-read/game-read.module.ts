import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GameReadPageRoutingModule } from './game-read-routing.module';

import { GameReadPage } from './game-read.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GameReadPageRoutingModule
  ],
  declarations: [GameReadPage]
})
export class GameReadPageModule {}
