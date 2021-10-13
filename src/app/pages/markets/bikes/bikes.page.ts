import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BikeService } from 'src/app/api/bike.service';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.page.html',
  styleUrls: ['./bikes.page.scss'],
})
export class BikesPage implements OnInit {
  constructor(private bikeService: BikeService, private router: Router) {}

  vehicleArrays = [];

  vehicleBasicArrays = [];

  catSlideOpts = {
    freeMode: true,
    slidesPerView: 2.2,
    slidesOffsetBefore: 11,
    spaceBetween: 1,
  };

  async ngOnInit() {
    const vehicleAdverts = await this.bikeService.getHomeBikesAdverts();

    this.vehicleArrays = vehicleAdverts.data.premium_plus_ads;
    this.vehicleBasicArrays = vehicleAdverts.data.basic;
    console.log(vehicleAdverts.data.premium_plus_ads);
    console.log(vehicleAdverts.data);
  }

  seeAll() {
    this.router.navigateByUrl(`/tabs/market/products/bikes`);
  }
}
