import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GameUpdatePageRoutingModule } from './game-update-routing.module';

import { GameUpdatePage } from './game-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GameUpdatePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [GameUpdatePage],
})
export class GameUpdatePageModule {}
