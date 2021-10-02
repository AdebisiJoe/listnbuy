import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarketsRoutingModule } from './markets-routing.module';
import { CarsPage } from './cars/cars.page';
import { BikesPage } from './bikes/bikes.page';
import { MarketplacePage } from './marketplace/marketplace.page';
import { VehiclepartsPage } from './vehicleparts/vehicleparts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarketsRoutingModule
  ],
  declarations: [
    CarsPage,
    BikesPage,
    MarketplacePage,
    VehiclepartsPage
  ]
})
export class MarketsModule {}
