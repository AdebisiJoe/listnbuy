import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { StoreService } from 'src/app/api/store.service';
@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
})
export class OnboardingPage implements OnInit {
  height: number;
  width: number;
  public onBoardSlides = [];
  @ViewChild('mainSlides', { static: true }) slides: IonSlides;
  user:any;

  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay:true,
    speed:200
   };

  constructor(private router: Router, platform: Platform,private storeService:StoreService) {
    platform.ready().then(() => {
      console.log('Width: ' + platform.width());
      console.log('Height: ' + platform.height());
      this.height = platform.height();
      this.width = platform.width();
    });
  }

  async ngOnInit() {

    this.user=await this.storeService.get('firsttime');

    if (this.user){
      this.router.navigate(['start']);
    }

    this.onBoardSlides = [
      {
        title: 'list with us',
        img: 'onboard1.png',
        desc: 'Shop a vehicle of choice',
      },
      {
        title: 'list with us',
        img: 'onboard2.png',
        desc: "Find your bike's preference",
      },
      {
        title: 'list with us',
        img: 'onboard3.png',
        desc: 'Select from a large catalogue of mechanical parts',
      },
      {
        title: 'list with us',
        img: 'onboard4.png',
        desc: 'Shop for your needs in our General Market',
      },
    ];
  }
  afterslidesLoad(slides) {
    slides.startAutoplay();
  }
  async goNext() {
    let check = await this.slides.isEnd();
    if (check) {
      this.storeService.save('firsttime','done');
      this.router.navigate(['start']);
    } else {
      this.slides.slideNext();
    }

    this.slides.ionSlideReachEnd;
  }

  public goBack() {
    this.slides.slidePrev();
  }

  public skipBtn() {
    this.storeService.save('firsttime','done');
    this.router.navigate(['start']);
  }

  getStyle(slide): any {
    return {
      'background-image': `url(../../../../assets/images/${slide.img})`,
      height: this.height + 'px',
      width: this.width + 'px',
    };
  }


  leftIconStyle():any{
    return {
      'position': 'absolute',
      'top': (this.height*0.05)+'px',
      'left': '16px',
      'font-size': '25px',
      'z-index': "2"
    };
  }

  rightIconStyle():any{
    return {
      'position': 'absolute',
      'top': (this.height*0.05)+'px',
      'right': '16px',
      'font-size': '25px',
      'z-index': "2"
    };
  }
}
