import { Component, OnInit } from '@angular/core';

import { HomeService } from 'src/app/api/home.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit {
  constructor(private homeService: HomeService) {}

  vehicleArrays=[];

  vehicleBasicArrays=[];

  catSlideOpts = {
    freeMode: true,
    slidesPerView: 1.2,
    slidesOffsetBefore: 11,
    spaceBetween: 1,
  };

  async ngOnInit() {
    const vehicleAdverts = await this.homeService.getHomeVehicleAdverts();
    
    this.vehicleArrays=vehicleAdverts.data.premium_plus_ads;
    this.vehicleBasicArrays=vehicleAdverts.data.basic;
    console.log(vehicleAdverts.data.premium_plus_ads);
    console.log(vehicleAdverts.data);
  }

}
