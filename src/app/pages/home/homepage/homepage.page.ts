import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/api/home.service';
import { faMotorcycle,faCar,faBicycle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit {

  faMotorcycle = faMotorcycle;
  faCar=faCar;
  faBicycle=faBicycle;
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
