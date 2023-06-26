import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlayerAddPageRoutingModule } from './player-add-routing.module';

import { PlayerAddPage } from './player-add.page';
import { ReactiveFormsModule} from '@angular/forms';
import { IonicInputMaskModule } from '@thiagoprz/ionic-input-mask';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlayerAddPageRoutingModule,
    ReactiveFormsModule,
    IonicInputMaskModule
  ],
  exports: [PlayerAddPage],
  declarations: [PlayerAddPage]
})
export class PlayerAddPageModule {}
