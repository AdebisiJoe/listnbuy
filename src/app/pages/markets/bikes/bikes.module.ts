import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BikesPageRoutingModule } from './bikes-routing.module';

import { BikesPage } from './bikes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BikesPageRoutingModule
  ],
  declarations: [BikesPage]
})
export class BikesPageModule {}
