import { Component, OnInit } from '@angular/core';

import { CarService } from 'src/app/api/car.service'; 

@Component({
  selector: 'app-cars',
  templateUrl: './cars.page.html',
  styleUrls: ['./cars.page.scss'],
})
export class CarsPage implements OnInit {

  constructor(private carService:CarService ) { }

  vehicleArrays=[];

  vehicleBasicArrays=[];

  catSlideOpts = {
    freeMode: true,
    slidesPerView: 2.2,
    slidesOffsetBefore: 11,
    spaceBetween: 1,
  };

  async ngOnInit() {
    const vehicleAdverts = await this.carService.getHomeVehicleAdverts();
    
    this.vehicleArrays=vehicleAdverts.data.premium_plus_ads;
    this.vehicleBasicArrays=vehicleAdverts.data.basic;
    console.log(vehicleAdverts.data.premium_plus_ads);
    console.log(vehicleAdverts.data);
  }

}
