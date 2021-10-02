import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchRoutingModule } from './search-routing.module';

import { BikesearchPage } from './bikesearch/bikesearch.page';
import { MarketplacesearchPage } from './marketplacesearch/marketplacesearch.page';
import { CarsearchPage } from './carsearch/carsearch.page';
import { VehiclepartssearchPage } from './vehiclepartssearch/vehiclepartssearch.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, SearchRoutingModule],
  declarations: [
    BikesearchPage,
    CarsearchPage,
    MarketplacesearchPage,
    VehiclepartssearchPage,
  ],
})
export class SearchModule {}

"export 'SearchRoutingModule' (imported as 'SearchRoutingModule') was not found in './search-routing.module' (possible exports: BikesearchPageRoutingModule)"
