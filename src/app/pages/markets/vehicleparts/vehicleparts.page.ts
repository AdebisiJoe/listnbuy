import { Component, OnInit } from '@angular/core';

import { PartsService } from 'src/app/api/parts.service';

@Component({
  selector: 'app-vehicleparts',
  templateUrl: './vehicleparts.page.html',
  styleUrls: ['./vehicleparts.page.scss'],
})
export class VehiclepartsPage implements OnInit {

  constructor(private partsService:PartsService ) { }

  vehicleArrays=[];

  vehicleBasicArrays=[];

  catSlideOpts = {
    freeMode: true,
    slidesPerView: 2.2,
    slidesOffsetBefore: 11,
    spaceBetween: 1,
  };

  async ngOnInit() {
    const vehicleAdverts = await this.partsService.getHomePartsAdverts();
    
    this.vehicleArrays=vehicleAdverts.data.premium_plus_ads;
    this.vehicleBasicArrays=vehicleAdverts.data.basic;
    console.log(vehicleAdverts.data.premium_plus_ads);
    console.log(vehicleAdverts.data);
  }
}
