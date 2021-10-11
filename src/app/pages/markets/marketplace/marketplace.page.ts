import { Component, OnInit } from '@angular/core';

import { GeneralMarketService } from 'src/app/api/generalmarket.service'; 

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.page.html',
  styleUrls: ['./marketplace.page.scss'],
})
export class MarketplacePage implements OnInit {

  constructor(private generalMarketService:GeneralMarketService) { }

  vehicleArrays=[];

  vehicleBasicArrays=[];

  catSlideOpts = {
    freeMode: true,
    slidesPerView: 2.2,
    slidesOffsetBefore: 11,
    spaceBetween: 1,
  };

  async ngOnInit() {
    const vehicleAdverts = await this.generalMarketService.getHomeGeneralAdverts();
    
    this.vehicleArrays=vehicleAdverts.data.premium_plus_ads;
    this.vehicleBasicArrays=vehicleAdverts.data.basic;
    console.log(vehicleAdverts.data.premium_plus_ads);
    console.log(vehicleAdverts.data);
  }

}
