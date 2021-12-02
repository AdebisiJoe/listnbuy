import { Component, OnInit,ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { faMotorcycle,faCar,faBicycle } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-sellupload',
  templateUrl: './sellupload.page.html',
  styleUrls: ['./sellupload.page.scss'],
})
export class SelluploadPage implements OnInit {


  faBicycle=faBicycle;
  activeState = 'Vehicles';
  @ViewChild('mainSlides', { static: true }) slides: IonSlides;
   value:boolean=true;
   only_cars:boolean=true;
   cars_and_bikes:boolean=true;
   general_market:boolean=true;

  states = [
    {'name':'Vehicles','icon':'car-sport-outline'},
    {'name':'Bikes','icon':'bicycle-outline'},
    {'name':'Spare Parts','icon':'cog-outline'},
    {'name':'General Market','icon':'cart-outline'},
  ];

  setStateAsActive(state:string) {
    this.activeState = state;
    console.log(this.activeState)
    this.value=!this.value;
  }

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  
  constructor() { }

  ngOnInit() {
  }

  public goBack() {
    this.slides.slidePrev();
  }

  public goToNext(){
    this.slides.slideNext();
  }

}
