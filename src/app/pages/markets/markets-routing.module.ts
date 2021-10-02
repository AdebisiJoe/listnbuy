import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarsPage } from './cars/cars.page';
import { BikesPage } from './bikes/bikes.page';
import { MarketplacePage } from './marketplace/marketplace.page';
import { VehiclepartsPage } from './vehicleparts/vehicleparts.page';

const routes: Routes = [

  {
    path: 'cars',
    component: CarsPage,
  },
  {
    path: 'bikes',
    component: BikesPage,
  },
  {
    path: 'marketplace',
    component: MarketplacePage,
  },
  {
    path: 'vehicleparts',
    component: VehiclepartsPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarketsRoutingModule {}
