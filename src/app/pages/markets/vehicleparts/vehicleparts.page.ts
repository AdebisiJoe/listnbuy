import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PartsService } from 'src/app/api/parts.service';

@Component({
  selector: 'app-vehicleparts',
  templateUrl: './vehicleparts.page.html',
  styleUrls: ['./vehicleparts.page.scss'],
})
export class VehiclepartsPage implements OnInit {
  constructor(private partsService: PartsService, private router: Router) {}

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
    const vehicleAdverts = await this.partsService.getHomePartsAdverts();

    this.vehicleArrays = vehicleAdverts.data.premium_plus_ads;
    this.vehicleBasicArrays = vehicleAdverts.data.basic;
    console.log(vehicleAdverts.data.premium_plus_ads);
    console.log(vehicleAdverts.data);
    this.category=vehicleAdverts.data.gateway;
  }

  seeAll() {
    this.router.navigateByUrl(`/tabs/market/products/parts`);
  }

  async gotoDetail(code:string){
    
    this.router.navigateByUrl(`/tabs/market/productdetail/${code}/${this.category}`);
  }
}
