import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CarService } from 'src/app/api/car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.page.html',
  styleUrls: ['./cars.page.scss'],
})
export class CarsPage implements OnInit {
  constructor(private carService: CarService, private router: Router) {}

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
    const vehicleAdverts = await this.carService.getHomeVehicleAdverts();

    this.vehicleArrays = vehicleAdverts.data.premium_plus_ads;
    this.vehicleBasicArrays = vehicleAdverts.data.basic;
    console.log(vehicleAdverts.data.premium_plus_ads);
    console.log(vehicleAdverts.data);
    this.category=vehicleAdverts.data.gateway;
  }

  seeAll() {
    this.router.navigateByUrl(`/tabs/market/products/vehicles`);
  }

  async gotoDetail(code:string){
        this.router.navigateByUrl(`/tabs/market/productdetail/${code}/${this.category}`);
  }
  
}
