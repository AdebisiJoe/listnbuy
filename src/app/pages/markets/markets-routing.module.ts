import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarsPage } from './cars/cars.page';
import { BikesPage } from './bikes/bikes.page';
import { MarketplacePage } from './marketplace/marketplace.page';
import { VehiclepartsPage } from './vehicleparts/vehicleparts.page';
import { DetailsPage } from './details/details.page';
import { ProductsPage } from './products/products.page';

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
  {
    path: 'details/:id',
    component: DetailsPage,
  },
  {
    path: 'products/:category',
    component: ProductsPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarketsRoutingModule {}
