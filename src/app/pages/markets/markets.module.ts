import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PhotoGalleryModule } from '@twogate/ngx-photo-gallery';
import { IonicRatingComponentModule }   from 'ionic-rating-component';

import { MarketsRoutingModule } from './markets-routing.module';
import { CarsPage } from './cars/cars.page';
import { BikesPage } from './bikes/bikes.page';
import { MarketplacePage } from './marketplace/marketplace.page';
import { VehiclepartsPage } from './vehicleparts/vehicleparts.page';
import { ProductsPage } from './products/products.page';
import { AutoCompleteModule } from 'ionic4-auto-complete';
import { ProductdetailPage } from './productdetail/productdetail.page';
import { SharedDirectivesModule } from 'src/app/directives/shared-directives.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarketsRoutingModule,
    ReactiveFormsModule,
    AutoCompleteModule,
    SharedDirectivesModule,
    PhotoGalleryModule.forRoot({
      defaultOptions: {
        showHideOpacity: true,
        arrowEl: true,
        indexIndicatorSep: '-',
      },
    }),
    IonicRatingComponentModule,
  ],
  declarations: [
    CarsPage,
    BikesPage,
    MarketplacePage,
    VehiclepartsPage,
    ProductsPage,
    ProductdetailPage,
  ],
})
export class MarketsModule {}
