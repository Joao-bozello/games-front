import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MatchAddPageRoutingModule } from './match-add-routing.module';

import { MatchAddPage } from './match-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatchAddPageRoutingModule,
    ReactiveFormsModule
  ],
  exports: [MatchAddPage],
  declarations: [MatchAddPage]
})
export class MatchAddPageModule {}
