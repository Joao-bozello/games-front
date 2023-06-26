import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MatchReadPageRoutingModule } from './match-read-routing.module';

import { MatchReadPage } from './match-read.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatchReadPageRoutingModule
  ],
  declarations: [MatchReadPage]
})
export class MatchReadPageModule {}
