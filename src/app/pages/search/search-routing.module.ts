import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BikesearchPage } from './bikesearch/bikesearch.page';
import { VehiclepartssearchPage } from './vehiclepartssearch/vehiclepartssearch.page';
import { MarketplacesearchPage } from './marketplacesearch/marketplacesearch.page';

const routes: Routes = [
  {
    path: 'bikesearch',
    component: BikesearchPage,
  },
  {
    path: 'vehiclepartssearch',
    component: VehiclepartssearchPage,
  },
  {
    path: 'marketplacesearch',
    component: MarketplacesearchPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchRoutingModule {}
