import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { GeneralMarketService } from 'src/app/api/generalmarket.service';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.page.html',
  styleUrls: ['./marketplace.page.scss'],
})
export class MarketplacePage implements OnInit {
  constructor(
    private generalMarketService: GeneralMarketService,
    private router: Router
  ) {}

  vehicleArrays = [];

  vehicleBasicArrays = [];
  category:string;
  catSlideOpts = {
    freeMode: true,
    slidesPerView: 2.2,
    slidesOffsetBefore: 11,
    spaceBetween: 1,
  };

  async ngOnInit() {
    const vehicleAdverts =
      await this.generalMarketService.getHomeGeneralAdverts();

    this.vehicleArrays = vehicleAdverts.data.premium_plus_ads;
    this.vehicleBasicArrays = vehicleAdverts.data.basic;
    console.log(vehicleAdverts.data.premium_plus_ads);
    console.log(vehicleAdverts.data.gateway);
    this.category=vehicleAdverts.data.gateway;
  }

  seeAll() {
    this.router.navigateByUrl(`/tabs/market/products/general`);
  }

  async gotoDetail(code:string){
    
    // const product = await this.productsAutoCompleteServiceService.productDetail(this.category,code)
    // console.log(product);

    this.router.navigateByUrl(`/tabs/market/productdetail/${code}/${this.category}`);
  }
}
